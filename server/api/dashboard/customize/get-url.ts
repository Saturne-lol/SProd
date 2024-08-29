// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        url: (await event.context.db.setting.findFirst({
            where: {account_id: event.context.user.id},
            select: {url: true}
        }))?.url as string
    };
});