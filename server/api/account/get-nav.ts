import {checkToken} from "~/api/discord";

export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return false
    return {username: user?.global_name, avatar: `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png`}
})