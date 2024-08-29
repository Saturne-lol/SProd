// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        username: (await event.context.db.setting.findFirst({
            where: {account_id: event.context.user.id},
            select: {username: true}
        }))?.username as string
    };
});