import axios from "axios";
import bdd from "~/api/bdd";
import {settings} from "ts-mixer";

export default defineEventHandler(async (event) => {
    const token = event.req.headers?.cookie?.split("token=")[1]
    if (!token) {
        return sendRedirect(event, '/auth/login')
    }

    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch(() => {
        return sendRedirect(event, '/auth/login')
    })

    const social = await bdd`SELECT id_discord FROM accounts WHERE id_discord = ${resDsc.data.id}`

    return social.length > 0
})