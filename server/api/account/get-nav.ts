import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return false
    const plan = await prisma.account.findUnique({
        where: {
            id: user.id
        },
        select: {
            plan: true
        }
    })
    return {username: user?.global_name, avatar: `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png`, plan: plan?.plan}
})