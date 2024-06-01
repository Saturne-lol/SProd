import badgesData from "~/api/badgesData";
import {PlanEnum, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return []

    const plan = await prisma.account.findFirst({
        where: {
            Setting: {
                url: getQuery(event).username as string
            }
        },
        select: {
            plan: true,
            id: true,
            beta: true
        }
    })
    const badges = (await prisma.badges.findMany({
        where: {
            account_id: plan?.id
        },
        select: {
            badge: true
        }
    })).map(({badge}) => badge)
    badges.push("member")

    if (plan?.plan === PlanEnum.PREMIUM) badges.push("premium1")
    if (plan?.plan === PlanEnum.PREMIUM_PLUS) badges.push("premium2")
    if (plan?.beta) badges.push("beta")
    badges.sort((a, b) => badgesData.findIndex(badge => badge.id === a) - badgesData.findIndex(badge => badge.id === b))
    badges.filter(badges => badges !== undefined)

    return badges.map(badge => ({
        image: badge + ".png",
        name: badgesData.find(b => b.id === badge)?.name
    })).filter(badges => badges.image !== undefined && badges.name !== undefined)
})