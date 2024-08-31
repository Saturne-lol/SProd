// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        username: event.context.user?.global_name,
        avatar: event.context.user?.id,
        plan: (await event.context.db.account.findUnique({
            where: {
                id: event.context.user.id
            },
            select: {
                plan: true
            }
        }))?.plan || "FREE"
    };
});