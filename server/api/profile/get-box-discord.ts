import bdd from "~/api/bdd";
import axios from "axios";

export default defineEventHandler(async (event) => {
    const url = new URLSearchParams(event.req.url).get("/api/profile/get-box-discord?username")

    const settings = (await bdd`SELECT username, description, account FROM settings WHERE url = ${url}`)[0]
    const discordBox = await bdd`SELECT * FROM discord WHERE account = ${settings?.account}`

    return await Promise.all(discordBox.map(async ({invite}) => {
        const data = await axios.get(`https://discord.com/api/v9/invites/${invite}?with_counts=true`).then(({data}) => data).catch(() => null)
        return {
            name: data?.guild.name || "Invalid invite",
            total: data?.approximate_member_count || 0,
            online: data?.approximate_presence_count || 0,
            image: data?.guild.id ? `https://cdn.discordapp.com/icons/${data?.guild.id}/${data?.guild.icon}.png` : null,
            invite: invite || "saturnelol"
        }
    }))
})