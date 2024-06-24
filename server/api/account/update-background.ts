// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'GET') return new Response("Method not allowed", {status: 405})

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const plan = (await prisma.account.findFirst({
        where: {
            id: user.id
        },
        select: {
            plan: true
        }
    }))?.plan

    const url = await axios.get(`https://cdn.saturne.lol/upload?type=background&fileName=${user.id}.png&plan=${plan}`).then(res => res.data.link).catch(e => {
        console.error(e)
        return null
    })

    return new Response(url, {status: 200})
})