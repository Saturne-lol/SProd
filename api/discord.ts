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
        deleteCookie(event, 'token')
        return false
    })

    if (typeof resDsc !== "boolean" && resDsc?.status !== 200) return false
    if (!resDsc) return false

    if (typeof resDsc !== "boolean" && resDsc?.data?.id) {
        if (!await prisma.account.findFirst({where: {id: resDsc.data.id}})) {
            await prisma.account.create({
                data: {
                    id: resDsc.data.id,
                    username: resDsc.data.global_name,
                }
            })
            await prisma.setting.create({
                data: {
                    account_id: resDsc.data.id
                }
            })
            await prisma.color.create({
                data: {
                    account_id: resDsc.data.id
                }
            })
        }
    }

    if (typeof resDsc !== "boolean") {
        const headers = getHeaders(event)
        const lastIp = headers['x-real-ip'] || headers['x-forwarded-for'] || headers['x-real-ip']
        lastSee(resDsc.data.id as string, lastIp)
    }

    return typeof resDsc !== "boolean" ? resDsc?.data : false
}

async function lastSee(account_id: string, ip: string | string[] | undefined) {
    const lastIp = ip instanceof Array ? ip[0] : ip
    return prisma.account.update({
        where: {
            id: account_id,
        },
        data: {
            ...lastIp ? {last_ip: lastIp} : {},
            last_login: new Date(),
        }
    })
}