export default defineEventHandler(async (event) => {
    const tokenCookie = getCookie(event, 'token')
    const host = getHeader(event, 'host') || ''
    const prefix = host.includes('localhost') ? 'http' : 'https'

    if (tokenCookie) return sendRedirect(event, '/dashboard/customize')
    else return sendRedirect(event, `https://discord.com/oauth2/authorize?client_id=1199385328784506931&response_type=code&redirect_uri=${prefix}://${host}/auth/callback&scope=identify`)
})