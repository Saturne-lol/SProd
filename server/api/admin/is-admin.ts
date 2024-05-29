import axios from "axios";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!getCookie(event, "token")) {
        return sendRedirect(event, '/auth/login')
    }

    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${getCookie(event, "token")}`
        }
    }).catch(() => {
        return sendRedirect(event, '/auth/login')
    })
    
})