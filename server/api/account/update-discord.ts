import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response("Method not allowed", {status: 405})

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const body = await readBody(event)
    if (!body.invite) {
        await prisma.discord.deleteMany({
            where: {
                index: body.index,
                account_id: user.id
            }
        })
        return new Response("OK", {status: 200})
    }
    if (typeof body.index !== "number") return new Response("Index is required", {status: 400})

    if (await prisma.discord.count({where: {invite: body.invite, account_id: user.id}}) > 0) return new Response("Invite already in profile", {status: 400})

    await prisma.discord.upsert({
        where: {
            account_id_index: {
                account_id: user.id,
                index: body.index
            }
        },
        update: {
            invite: body.invite
        },
        create: {
            account_id: user.id,
            index: body.index,
            invite: body.invite
        }
    })

    return new Response("OK", {status: 200})
})