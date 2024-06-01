import axios from "axios";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return []

    const discordBox = await prisma.discord.findMany({
        where: {
            account: {
                setting: {
                    url: getQuery(event).username as string
                }
            }
        }
    })

    return await Promise.all(discordBox.map(async ({invite}) => {
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