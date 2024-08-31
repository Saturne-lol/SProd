// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const view = (await readBody(event)).view;
    if (view === undefined) return new Response('Invalid view state', {status: 400});

    await event.context.db.setting.update({
        where: {account_id: event.context.user.id},
        data: {views: view}
    });

    return new Response('View state updated', {status: 200});
});