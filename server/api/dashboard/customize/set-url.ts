import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    let url = (await readBody(event)).url
    if (!url) return new Response("No URL provided", {status: 400})
    url = url.toLowerCase()

    if (await prisma.setting.count({where: {url: url}}) !== 0) return new Response("URL already set", {status: 400})
    await prisma.setting.update({
        where: {account_id: user.id},
        data: {url: url}
    })
    
    return new Response("URL set", {status: 200})
})