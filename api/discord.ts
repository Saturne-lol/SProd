import type {H3Event} from "h3";
import axios from "axios";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export async function checkToken(event: H3Event): Promise<{
    id: string,
    username: string
    global_name: string,
    avatar: string
} | false> {
    if (!getCookie(event, 'token')) return false

    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${getCookie(event, 'token')}`
        }
    }).catch(() => {
        return false
    })

    if (typeof resDsc !== "boolean" && resDsc?.status !== 200) return false
    if (!resDsc) return false

    if (typeof resDsc !== "boolean" && resDsc?.data?.id) {
        if (!await prisma.account.findFirst({where: {id: resDsc.data.id}})) {
            await prisma.account.create({
                data: {
                    id: resDsc.data.id,
                }
            })
            await prisma.setting.create({
                data: {
                    account_id: resDsc.data.id
                }
            })
        }
    }

    return typeof resDsc !== "boolean" ? resDsc?.data : false
}