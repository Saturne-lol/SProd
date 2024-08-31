import {checkToken} from "~/api/discord";

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (getRequestURL(event).toString().includes('dashboard')) {
        const user = await checkToken(event)
        if (!user) {
            setCookie(event, 'token', '', {expires: new Date(0), path: '/'})
            if (event.method === 'GET') return sendRedirect(event, "/login")
            return new Response("Unauthorized", {status: 401})
        }
        event.context.user = user
    }
})