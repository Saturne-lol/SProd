import badgesData from "~/api/badgesData";
import {PlanEnum, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return []

    const plan = await prisma.account.findFirst({
        where: {
            Setting: {
                some: {
                    url: getQuery(event).username as string
                }
            }
        },
        select: {
            plan: true,
            id: true
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
    badges.filter(badges => badges !== undefined)
    badges.sort((a, b) => badgesData.findIndex(badge => badge.id === a) - badgesData.findIndex(badge => badge.id === b))

    return badges.map(badge => ({image: badge + ".png", name: badgesData.find(b => b.id === badge)?.name}))
})