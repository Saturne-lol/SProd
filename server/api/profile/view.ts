import bdd from "~/api/bdd";
import axios from "axios";

export default defineEventHandler(async (event) => {
    if (event.req.method !== "POST") return new Response("Method not allowed", { status: 405 });

    // Use `readBody` to parse the request body
    const body = await readBody<{ username: string }>(event);

    const username = body?.username;
    if (!username) return new Response("Username not found in request body", { status: 400 });

    const ip = event.req.headers['x-real-ip'] || event.req.headers['x-forwarded-for'] || event.req.connection.remoteAddress;

    const result = await bdd`SELECT account FROM settings WHERE url=${username}`;
    const id = result[0]?.account;
    if (!id) return new Response("User not found", { status: 404 });

    const token = event.req.headers?.cookie?.split("token=")[1];
    if (!token) return new Response("Unauthorized", { status: 401 });

    axios.get("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(async resDsc => {
            if (id === resDsc.data.id) return new Response("You can't view your own profile", { status: 400 });

            return await bdd`insert into views (profile, logged, ip) values (${id}, ${resDsc.data.id}, ${ip}) ON CONFLICT (profile, logged) DO UPDATE SET ip = ${ip}, date = now()`
                .then(() => new Response("Success", {status: 200}))
                .catch(err => console.log(err));
        })
        .catch(err => {
            return new Response("Error fetching Discord user", { status: 500 });
        });
});