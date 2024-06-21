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

    const url = await axios.get(`https://cdn.saturne.lol/upload?type=profile&fileName=${user.id}.png`).then(res => res.data.link).catch(e => {
        console.error(e)
        return null
    })

    await prisma.setting.update({
        where: {
            account_id: user.id
        },
        data: {
            avatar: true
        }
    })

    return new Response(url, {status: 200})
})