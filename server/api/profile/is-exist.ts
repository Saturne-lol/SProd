import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getQuery(event)?.username) return {code: false}
    const user = await prisma.setting.findFirst({
        where: {url: getQuery(event)?.username as string},
        select: {account: {select: {blacklisted: true}}}
    })
    
    if (!user) return {code: "ne"}
    if (user.account.blacklisted) return {code: "bl"}
    return {code: true}
})