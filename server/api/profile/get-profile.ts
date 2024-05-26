import bdd from "~/api/bdd";
import badgesData from "~/api/badgesData";
import createBot from "~/api/bot";
import {da} from "cronstrue/dist/i18n/locales/da";
import axios from "axios";

export default defineEventHandler(async (event) => {
    const url = new URLSearchParams(event.req.url).get("/api/profile/get-profile?username")

    const settings = (await bdd`SELECT username, description, account, avatar FROM settings WHERE url = ${url}`)[0]
    const quote = (await bdd`SELECT text FROM quotes WHERE account = ${settings?.account}`)

    return {
        username: settings?.username || "Invalid username",
        bio: settings?.description || "No bio",
        avatar: `https://cdn.saturne.lol/${settings.avatar ? settings.account : "default"}.png`,
        quotes: quote.map(({text}) => text).sort(() => Math.random() - 0.5),
    }
})