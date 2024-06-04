import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";
import {getBlUrl} from "~/api/blacklist";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return false

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const enter = (await readBody(event)).data
    if (!enter) return false
    // if (getBlUrl().includes(enter)) return false

    await prisma.setting.update({
        where: {
            account_id: user.id
        },
        data: {
            enter_message: enter
        }
    })
    return true
})