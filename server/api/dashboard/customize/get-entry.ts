// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        entry: (await event.context.db.setting.findFirst({
            where: {account_id: event.context.user.id},
            select: {enter_message: true}
        }))?.enter_message as string
    };
});