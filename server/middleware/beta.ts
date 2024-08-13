import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    if (getRequestURL(event).toString().includes('update-') ||
        getRequestURL(event).toString().includes('dashboard/customize/set-')
    ) {
        const user = await checkToken(event)
        if (!user) return sendRedirect(event, "/login")
        const beta = await prisma.account.findFirst({where: {id: user?.id}, select: {beta: true}})
        if (!beta?.beta) return new Response("You are not a beta tester", {status: 403})
    }
})