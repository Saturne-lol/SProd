import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return {error: "No username provided"}
    
    const id = (await prisma.setting.findFirst({
        where: {
            url: getQuery(event).username as string
        },
        select: {
            account_id: true
        }
    }))?.account_id

    const view = await prisma.view.count({
        where: {
            profile_id: id
        }
    })

    return {view}
})