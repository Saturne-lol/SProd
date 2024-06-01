import {PrismaClient} from "@prisma/client";
import {checkToken} from "~/api/discord";

const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    if (event.method !== "POST") return new Response("Method not allowed", {status: 405});
    const body = await readBody<{ username: string }>(event);

    const username = body?.username;
    if (!username) return new Response("Username not found in request body", {status: 400});

    const ip = event.req.headers['x-real-ip'] || event.req.headers['x-forwarded-for'] || event.req.connection.remoteAddress;
    if (!ip) return new Response("IP not found", {status: 400});

    const profile = await prisma.setting.findFirst({where: {url: username}, select: {account_id: true}});
    if (!profile) return new Response("User not found", {status: 404});
    if (await prisma.view.count({
        where: {
            ip: ip as string,
            profile_id: profile.account_id
        }
    }) > 0) return new Response("Already viewed", {status: 400});

    const user = await checkToken(event)
    const view = await prisma.view.create({
        data: {
            ip: ip as string,
            profile_id: profile.account_id as string,
            ...(user ? {account_id: user.id} : {})
        }
    })
    return new Response("OK", {status: 200});
});