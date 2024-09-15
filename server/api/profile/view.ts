import {checkToken} from '~/api/discord';
import axios from 'axios';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response('Method not allowed', {status: 405});
    const body = await readBody<{ username: string }>(event);

    const username = body?.username;
    if (!username) return new Response('Username not found in request body', {status: 400});


    const ip = getHeader(event, "x-real-ip") ||  getRequestIP(event) || event.req.connection.remoteAddress;
    if (!ip) return new Response('IP not found', {status: 400});

    if (ip === '127.0.0.1') return new Response('Localhost not allowed', {status: 403});
    if (ip === '::1') return new Response('Localhost not allowed', {status: 403});

    // const res = await axios.get(`https://ip-api.com/json/${ip}?fields=proxy,hosting`).catch(() => null);
    // if (!res) return new Response('Failed to check IP', {status: 500});
    // if (res.data.proxy) return new Response('Proxy not allowed', {status: 403});
    // if (res.data.hosting) return new Response('Hosting not allowed', {status: 403});

    const profile = await event.context.db.setting.findFirst({where: {url: username}, select: {account_id: true}});
    if (!profile) return new Response('User not found', {status: 404});
    if (await event.context.db.view.count({
        where: {
            ip: ip as string,
            profile_id: profile.account_id
        }
    }) > 0) return new Response('Already viewed', {status: 200});


    const user = await checkToken(event);

    if (user) {
        if (await event.context.db.view.count({
            where: {
                account_id: user.id,
                profile_id: profile.account_id
            }
        }) > 0) return new Response('Already viewed', {status: 200});
    }

    await event.context.db.view.create({
        data: {
            ip: ip as string,
            profile_id: profile.account_id as string,
            ...(user ? {account_id: user.id} : {})
        }
    });
    return new Response('OK', {status: 200});
});