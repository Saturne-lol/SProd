import axios from 'axios';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'GET') return new Response('Method not allowed', {status: 405});
    const {extension} = getQuery(event);

    const url = await axios.get(`https://cdn.saturne.lol/upload?type=profile&fileName=${event.context.user.id}.${extension}&plan=0`,
        {
            headers: {
                "Authorization": `i0yb@zge9$ZI9n`
            }
        })
        .then(res => res.data.link).catch(e => {
            console.error(e);
            return null;
        });

    if (!url) return new Response('Failed to get upload link for profile image', {status: 400});
    return new Response(url, {status: 200});
});