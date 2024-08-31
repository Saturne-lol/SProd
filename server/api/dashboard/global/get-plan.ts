import {PlanEnum} from '@prisma/client';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return {
        plan: (await event.context.db.account.findFirst({
            where: {id: event.context.user.id},
            select: {plan: true}
        }))?.plan as PlanEnum
    };
});