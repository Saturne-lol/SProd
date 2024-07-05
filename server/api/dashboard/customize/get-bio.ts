import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})
    
    return {
        bio: (await prisma.setting.findFirst({
            where: {account_id: user.id},
            select: {bio: true}
        }))?.bio as string
    }
})