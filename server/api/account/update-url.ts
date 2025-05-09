// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";
import {getBlUrl} from "~/api/blacklist";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response("Method not allowed", {status: 405})

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const url = (await readBody(event)).data
    if (!url) return false
    if (getBlUrl().includes(url)) return new Response("URL is blacklisted", {status: 403})

    if (await prisma.setting.count({
        where: {
            url: url
        }
    }) > 0) return new Response("URL already exists", {status: 409})

    await prisma.setting.update({
        where: {
            account_id: user.id
        },
        data: {
            url: url
        }
    })
    return true
})