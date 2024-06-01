import {getBot} from "~/api/bot";
import {PrismaClient} from "@prisma/client";
import {Client} from "discord.js";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return {error: "No username provided"}
    const discordClient = getBot() as Client

    // const settings = (await bdd`SELECT username, description, account FROM settings WHERE url = ${url}`)[0]
    const user = await prisma.account.findFirst({
        where: {
            setting: {
                url: getQuery(event).username as string
            }
        },
        select: {
            id: true
        }
    });
    if (!user) return {error: "Invalid username"}
    const member = (await (await discordClient.guilds.fetch("1129015826410901556")).members.fetch(user?.id as string))
    discordClient.destroy()

    return {
        avatar: member.user.displayAvatarURL({extension: "png"}),
        username: member.user.displayName || "Invalid username",
        status: member.presence?.activities[0]?.state || null
    }
})