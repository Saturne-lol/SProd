import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return {error: "No username provided"}
    
    const settings = await prisma.setting.findFirst({
        where: {
            url: getQuery(event).username as string
        },
        select: {
            account_id: true,
            enter_message: true,
        }
    })

    const box = await prisma.discord.count({
        where: {
            account_id: settings?.account_id
        }
    })

    return {
        clickToEnter: settings?.enter_message,
        userID: settings?.account_id,
        nbDcBoxes: box,
    } as GlobalProfile
})