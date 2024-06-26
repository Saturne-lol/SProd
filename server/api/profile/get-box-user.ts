import {PrismaClient} from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return {error: "No username provided"}

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
    const member = await axios.get("https://bot.saturne.lol/member/" + user.id).then((res) => {
        return res.data
    }).catch(() => false)

    return {
        avatar: member.avatar || "https://cdn.saturne.lol/file/profile/nooo.png",
        username: member.displayName || "Invalid username",
        presence: member.presence || "offline",
        status: member?.activity?.text
            ? (member?.activity?.emoji
                ? (member.activity.emoji.includes("https")
                    ? member.activity.text
                    : member.activity.emoji + " " + member.activity.text)
                : member.activity.text)
            : "",
        emoji: member?.activity?.emoji?.includes("https") ? member.activity.emoji : null,
    }
})