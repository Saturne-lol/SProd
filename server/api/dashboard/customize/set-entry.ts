// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    let entry = (await readBody(event))?.entry;
    if (!entry) return new Response('No Entry message provided', {status: 400});

    await event.context.db.setting.update({
        where: {account_id: event.context.user.id},
        data: {enter_message: entry}
    });

    return new Response('Entry message set', {status: 200});
});