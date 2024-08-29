// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        bio: (await event.context.db.setting.findFirst({
            where: {account_id: event.context.user.id},
            select: {bio: true}
        }))?.bio as string
    };
});