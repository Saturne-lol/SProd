const keyAvailable = ['box', 'box_outline', 'profile_outline', 'icon_color'];

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const {color, key} = (await readBody(event));
    if (!color || !key) return new Response('Missing color or key', {status: 400});
    if (!keyAvailable.includes(key)) return new Response('Invalid key', {status: 400});
    if (!/^#[0-9A-F]{6}$/i.test(color)) return new Response('Invalid color', {status: 400});

    await event.context.db.color.update({
        where: {account_id: event.context.user.id},
        data: {
            [key]: color
        }
    });

    return new Response('Color set', {status: 200});
});