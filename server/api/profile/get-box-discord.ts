import axios from "axios";
import {PlanEnum, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return []

    const discordBox = await prisma.discord.findMany({
        where: {
            account: {
                setting: {
                    url: getQuery(event).username as string
                }
            }
        },
        orderBy: {
            index: "asc"
        }
    })

    const plan = (await prisma.account.findFirst({
        where: {
            setting: {
                url: getQuery(event).username as string
            }
        },
        select: {
            plan: true
        }
    }))?.plan

    const maxBox = plan === PlanEnum.FREE ? 1 : (plan === PlanEnum.PREMIUM ? 3 : 5)

    return await Promise.all(discordBox.slice(0,maxBox).map(async ({invite}) => {
        const data = await axios.get(`https://discord.com/api/v9/invites/${invite}?with_counts=true`).then(({data}) => data).catch(() => null)
        return {
            name: data?.guild.name || "Invalid invite",
            total: data?.approximate_member_count || 0,
            online: data?.approximate_presence_count || 0,
            image: data?.guild.id ? `https://cdn.discordapp.com/icons/${data?.guild.id}/${data?.guild.icon}.png` : null,
            invite: invite || "saturnelol"
        }
    }))
})