// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        quotes: (await event.context.db.quotes.findMany({
            where: {account_id: event.context.user.id},
            select: {text: true}
        })).map(q => q.text)
    };
});