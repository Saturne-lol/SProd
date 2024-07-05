import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const username = (await readBody(event)).username
    if (!username) return new Response("No Username provided", {status: 400})

    if (await prisma.setting.count({where: {username: username}}) !== 0) return new Response("Username already set", {status: 400})
    await prisma.setting.update({
        where: {account_id: user.id},
        data: {username: username}
    })
    
    return new Response("Username set", {status: 200})
})