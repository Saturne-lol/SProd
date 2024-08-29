// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const username = (await readBody(event)).username;
    if (!username) return new Response('No Username provided', {status: 400});

    if (await event.context.db.setting.count({where: {username: username}}) !== 0) return new Response('Username already set', {status: 400});
    await event.context.db.setting.update({
        where: {account_id: event.context.user.id},
        data: {username: username}
    });

    return new Response('Username set', {status: 200});
});