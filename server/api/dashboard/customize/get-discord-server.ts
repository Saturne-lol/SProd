import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const index = getQuery(event)?.index as string
    if (!index || !/^\d+$/.test(index)) return new Response("Invalid index", {status: 400})

    return {
        invite: (await prisma.discord.findFirst({
            where: {account_id: user.id, index: parseInt(index, 10)},
            select: {invite: true}
        }))?.invite ?? "" as string
    }
})