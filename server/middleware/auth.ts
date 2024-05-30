import {checkToken} from "~/api/discord";

export default defineEventHandler(async (event) => {
    if (getRequestURL(event).toString().includes('dashboard')) {
        const user = await checkToken(event)
        if (!user) return sendRedirect(event, "/auth/login")
    }
})