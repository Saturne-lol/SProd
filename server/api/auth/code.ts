import axios from "axios"
import {URLSearchParams} from "url";

const trust = [
    "localhost:3000",
    "saturne.lol"
]
export default defineEventHandler(async (event) => {
    const code = event?.req?.url?.split("?")[1].split("&").find(e => e.startsWith("code=")).split("=")[1] || null
    const redirect_uri = event?.req?.url?.split("?")[1].split("&").find(e => e.startsWith("redirect_uri=")).split("=")[1].replaceAll("%2F", "/") || null

    if (!redirect_uri) return {err: "no redirect_uri provided"}
    if (!trust.find(e => redirect_uri.includes(e))) return {err: "redirect_uri not trusted"}
    if (!code) return {err: "no code provided"}

    const resDs = await axios.post(
        "https://discord.com/api/oauth2/token",
        new URLSearchParams({
            client_id: "1199385328784506931",
            client_secret: "tZhILHVJXRIajcD7LkvoxOJrlNWAxB6l",
            code: code,
            grant_type: "authorization_code",
            redirect_uri: redirect_uri,
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    ).catch(e => {
        return {code: false, err: e.response.data}
    })


    if (!resDs) return {err: "no response from discord"}
    if (resDs?.code === false) return {code: false, err: resDs?.err}
    if (resDs?.status !== 200) return {err: "discord returned status " + resDs?.status}

    return {code: true, token: resDs?.data.access_token}
})