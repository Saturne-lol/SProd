import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const url = new URLSearchParams(event.req.url)
    if (!getQuery(event)?.username) return {code: false}
    if (!await prisma.setting.findFirst({where: {url: getQuery(event)?.username as string}})) return {code: false}
    return {code: true}
})