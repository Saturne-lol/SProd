export default defineEventHandler((event) => {
    if (getRequestURL(event).toString().split("/")[3].split("/")[0] === 'dashboard') {
        const token = event.req.headers?.cookie?.split("token=")[1]

        if (!token) {
            return sendRedirect(event, '/auth/login')
        } else {
            return
        }
    }
})