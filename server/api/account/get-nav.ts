// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
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
    return {
        username: user?.global_name,
        avatar: `https://cdn.saturne.lol/file/profile/${user?.id}`,
        plan: plan?.plan
    }
})