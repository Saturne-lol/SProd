// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response("Method not allowed", {status: 405})

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const username = (await readBody(event)).data
    if (!username) return new Response("Username is required", {status: 400})
    // if (getBlUrl().includes(username)) return false

    if (await prisma.setting.count({
        where: {
            username: username
        }
    }) > 0) return new Response("Username already exists", {status: 409})

    await prisma.setting.update({
        where: {
            account_id: user.id
        },
        data: {
            username: username.charAt(0).toUpperCase() + username.slice(1)
        }
    })
    return new Response("Username updated", {status: 200})
})