import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";
import {getBlUrl} from "~/api/blacklist";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return false

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const view = (await readBody(event)).view
    if (typeof view !== 'boolean') return new Response("Invalid view", {status: 400})

    await prisma.setting.update({
        where: {
            account_id: user.id
        },
        data: {
            views: view
        }
    })
    return true
})