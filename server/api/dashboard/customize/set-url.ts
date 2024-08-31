// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    let url = (await readBody(event)).url;
    if (!url) return new Response('No URL provided', {status: 400});
    url = url.toLowerCase();
    if (!/^[a-z0-9]+$/i.test(url)) return new Response('Invalid URL', {status: 400});

    if (await event.context.db.setting.count({where: {url: url}}) !== 0) return new Response('URL already set', {status: 400});
    await event.context.db.setting.update({
        where: {account_id: event.context.user.id},
        data: {url: url}
    });

    return new Response('URL set', {status: 200});
});