import {checkToken} from "~/api/discord";
import {PrismaClient, PlanEnum} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})
    
    return {
        plan: (await prisma.account.findFirst({
            where: {id: user.id},
            select: {plan: true}
        }))?.plan as PlanEnum
    }
})