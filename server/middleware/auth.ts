import {checkToken} from "~/api/discord";

export default defineEventHandler(async (event) => {
    if (getRequestURL(event).toString().includes('dashboard')) {
        const user = await checkToken(event)
        if (!user) {
            setCookie(event, 'token', '', {expires: new Date(0), path: '/'})
            return sendRedirect(event, "/login")
        }
    }
})