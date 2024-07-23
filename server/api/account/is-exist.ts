// noinspection Annotator

import axios from "axios";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getCookie(event, "token")) {
        return sendRedirect(event, '/login')
    }

    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${getCookie(event, "token")}`
        }
    }).catch(() => {
        return sendRedirect(event, '/login')
    })


    return !!(await prisma.account.findUnique({
        where: {
            id: resDsc?.data.id
        }
    })) || false
})