import axios from "axios"
import {URLSearchParams} from "url";

const trust = [
    "localhost:3000",
    "saturne.lol"
]
export default defineEventHandler(async (event) => {
    if (!getQuery(event).code) return sendRedirect(event, "/auth/login")
    if (!getQuery(event).redirect_uri) return {err: "no redirect_uri provided"}
    if (!trust.find(e => (getQuery(event).redirect_uri as string).includes(e))) return {err: "redirect_uri not trusted"}

    const resDs = await axios.post(
        "https://discord.com/api/oauth2/token",
        new URLSearchParams({
            client_id: "1199385328784506931",
            client_secret: "tZhILHVJXRIajcD7LkvoxOJrlNWAxB6l",
            code: getQuery(event).code as string,
            grant_type: "authorization_code",
            redirect_uri: getQuery(event).redirect_uri as string,
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    ).catch(() => {
        return sendRedirect(event, "/auth/login")
    })

    if (!resDs) return {err: "no response from discord"}

    return {code: true, token: resDs?.data.access_token}
})