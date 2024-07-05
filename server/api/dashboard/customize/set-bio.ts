import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const bio = (await readBody(event)).bio
    if (!bio) return new Response("No Bio provided", {status: 400})

    if (await prisma.setting.count({where: {bio: bio}}) !== 0) return new Response("Bio already set", {status: 400})
    await prisma.setting.update({
        where: {account_id: user.id},
        data: {bio: bio}
    })
    
    return new Response("Bio set", {status: 200})
})