import {checkToken} from "~/api/discord";
import {PlanEnum, PrismaClient} from "@prisma/client";
import {getBot} from "~/api/bot";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return false
    const settings = await prisma.setting.findFirst({
        where: {
            account_id: user.id
        },
        select: {
            url: true,
            username: true,
            bio: true,
            enter_message: true,
            views: true
        }
    })
    const account = await prisma.account.findFirst({
        where: {
            id: user.id
        },
        select: {
            plan: true
        }
    })
    const discord = (await prisma.discord.findMany({
        where: {
            account_id: user.id
        },
        select: {
            index: true,
            invite: true,
        }
    })).map((d: any) => {
        return {index: d.index, invite: d.invite}
    }) as { index: number, invite: string }[]

    let plan: number = 0
    if (account?.plan === PlanEnum.FREE) plan = 0
    if (account?.plan === PlanEnum.PREMIUM) plan = 1
    if (account?.plan === PlanEnum.PREMIUM_PLUS) plan = 2

    const member = await (await getBot()?.guilds.fetch("1129015826410901556")).members.fetch(user.id)

    return {
        url: settings?.url,
        username: settings?.username,
        bio: settings?.bio,
        plan,
        discord,
        linked: member ? `${member.user.displayName} (${member.user.id})` : null,
        enter: settings?.enter_message || "Click to enter...",
        views: settings?.views || 0
    }
})