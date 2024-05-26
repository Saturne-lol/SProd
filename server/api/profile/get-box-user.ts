import bdd from "~/api/bdd";
import createBot from "~/api/bot";

export default defineEventHandler(async (event) => {
    const url = new URLSearchParams(event.req.url).get("/api/profile/get-box-user?username")
    const discordClient = await createBot()

    const settings = (await bdd`SELECT username, description, account FROM settings WHERE url = ${url}`)[0]
    const userDiscord = await discordClient.users.fetch(settings.account)
    await discordClient.destroy()

    return {
        avatar: userDiscord.avatarURL(),
        username: userDiscord.displayName,
        status: (await (await discordClient.guilds.fetch("1129015826410901556")).members.fetch(settings.account)).presence?.activities[0].state || null
    }
})