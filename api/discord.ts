import type {H3Event} from "h3";
import axios from "axios";

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

    return typeof resDsc !== "boolean" ? resDsc?.data : false
}