import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return {error: "No username provided"}
    
    const settings = await prisma.setting.findFirst({
        where: {
            url: getQuery(event).username as string
        },
        select: {
            username: true,
            bio: true,
            avatar: true,
            account: true,
        }
    })
    const quote = await prisma.quotes.findMany({
        where: {
            account: settings?.account
        },
        select: {
            text: true
        }
    })

    return {
        username: settings?.username || "Invalid username",
        bio: settings?.bio || "No bio",
        avatar: settings?.account.id,
        quotes: quote.map(({text}) => text).sort(() => Math.random() - 0.5) || []
    }
})