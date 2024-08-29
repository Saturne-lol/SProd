// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const index = getQuery(event)?.index as string;
    if (!index || !/^\d+$/.test(index)) return new Response('Invalid index', {status: 400});

    return {
        invite: (await event.context.db.discord.findFirst({
            where: {account_id: event.context.user.id, index: parseInt(index, 10)},
            select: {invite: true}
        }))?.invite ?? '' as string
    };
});