import axios from "axios"
import bdd from "~/api/bdd";

export default defineEventHandler(async (event) => {
    const token = event.req.headers?.cookie?.split("token=")[1]
    if (!token) {
        return sendRedirect(event, '/auth/login')
    }

    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const isExist = await bdd`SELECT * FROM accounts WHERE id_discord = ${resDsc.data.id}`
    if (isExist.length > 0) return sendRedirect(event, '/auth/login')
    await bdd`INSERT INTO accounts (id_discord) VALUES (${resDsc.data.id})`

    return {username: resDsc.data.username, id: resDsc.data.id, avatar: resDsc.data.avatar}
})