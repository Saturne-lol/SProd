import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return false

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const bio = (await readBody(event)).data
    if (!bio) return false
    // if (getBlUrl().includes(username)) return false


    await prisma.setting.update({
        where: {
            account_id: user.id
        },
        data: {
            bio: bio
        }
    })
    return true
})