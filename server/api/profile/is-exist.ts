import bdd from "~/api/bdd";

export default defineEventHandler(async (event) => {
    const url = new URLSearchParams(event.req.url)
    if ((await bdd`SELECT * FROM settings WHERE url = ${url.get("/api/profile/is-exist?username")}`).length === 0) return {code: false}
    return {code: true}
})