import {PlanEnum} from '@prisma/client';
import axios from 'axios';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'GET') return new Response('Method not allowed', {status: 405});
    const {extension} = getQuery(event);

    const plan = (await event.context.db.account.findFirst({
        where: {
            id: event.context.user.id
        },
        select: {
            plan: true
        }
    }))?.plan;

    if (extension === '.mp4' && plan !== PlanEnum.PREMIUM && plan !== PlanEnum.PREMIUM_PLUS) return new Response('Only premium users can set video backgrounds', {status: 403});

    const planFomratter = {
        [PlanEnum.FREE]: 0,
        [PlanEnum.PREMIUM]: 1,
        [PlanEnum.PREMIUM_PLUS]: 2
    };

    const url = await axios.get(`https://cdn.saturne.lol/upload?type=background&fileName=${event.context.user.id}.${extension}&plan=${planFomratter[plan as PlanEnum]}`,
        {
            headers: {
                'Authorization': `i0yb@zge9$ZI9n`
            }
        })
        .then(res => res.data.link).catch(e => {
            console.error(e);
            return null;
        });

    if (!url) return new Response('Failed to get upload link for background image', {status: 400});
    return new Response(url, {status: 200});
});