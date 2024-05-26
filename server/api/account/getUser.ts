import axios from "axios"

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

    return {username: resDsc.data.username, id: resDsc.data.id, avatar: resDsc.data.avatar}
})