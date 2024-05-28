import axios from "axios"
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getCookie(event, 'token')) {
        return sendRedirect(event, '/auth/login')
    }

    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${getCookie(event, 'token')}`
        }
    }).catch(() => {
        return sendRedirect(event, '/auth/login')
    })

    if (!await prisma.account.findUnique({
        where: {
            id: resDsc?.data.id
        }
    })) {
        await prisma.account.create({
            data: {
                id: resDsc?.data.id as string,
            }
        })
    }
    return {username: resDsc?.data.username, id: resDsc?.data.id, avatar: resDsc?.data.avatar}
})