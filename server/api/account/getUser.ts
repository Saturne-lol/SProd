import axios from "axios"

export default defineEventHandler(async (event) => {
    if (!getCookie(event, 'token')) return sendRedirect(event, '/auth/login')
    
    const resDsc = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${getCookie(event, 'token')}`
        }
    }).catch(() => {
        return sendRedirect(event, '/auth/login')
    })

    return {username: resDsc?.data.username, id: resDsc?.data.id, avatar: resDsc?.data.avatar}
})