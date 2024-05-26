import bdd from "~/api/bdd";
import badgesData from "~/api/badgesData";

export default defineEventHandler(async (event) => {
    const username = new URLSearchParams(event.req.url).get("/api/profile/get-badges?username")
    if (!username) return []

    const settings = (await bdd`SELECT username, description, account FROM settings WHERE url = ${username}`)[0]
    const plan = (await bdd`SELECT plan FROM accounts WHERE id_discord = ${settings.account}`)[0].plan
    const badgesRes = await bdd`SELECT badgeid FROM badges WHERE account = ${settings?.account}`


    if (plan === 2) badgesRes.push({badgeid: "premium2"})
    if (plan === 1) badgesRes.push({badgeid: "premium1"})

    badgesRes.push({badgeid: "member"})

    return badgesRes.map(({badgeid}) => badgeid)
        .map(badgeid => badgesData.find(badge => badge.id === badgeid))
        .filter(badge => badge !== undefined)
        .map(badge => ({image: badge!.image, name: badge!.name, index: badgesData.indexOf(badge!)}))
        .sort((a, b) => a.index - b.index)
})