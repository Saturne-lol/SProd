import axios from 'axios';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    let startAt = Date.now();
    const data = await event.context.db.setting.findFirst({
        where: {account_id: event.context.user.id},
        select: {
            bio: true,
            url: true,
            username: true,
            enter_message: true,
            views: true,
            account: {select: {quotes: true, discord: true, plan: true, color: true}}
        }
    });

    const member = await axios.get((process.env.NODE_ENV === 'development' ? 'https://bot.saturne.lol/member/' : 'http://localhost:3001/member/') + event.context.user.id).then((res) => {
        if (res.status === 200) return res.data;
        return false;
    }).catch(() => false);

    return {
        username: data?.username,
        bio: data?.bio,
        url: data?.url,
        quotes: data?.account.quotes.map(q => q.text),
        entry: data?.enter_message,
        linked: member ? `${member.displayName} (${member.id})` : 'false',
        discord: data?.account.discord.map(d => {
            return {index: d.index, invite: d.invite};
        }),
        plan: data?.account.plan || 'FREE',
        view: data?.views || false,
        color: {
            box: data?.account.color?.box || '#000000',
            box_outline: data?.account.color?.box_outline || '#ffffff',
            profile_outline: data?.account.color?.profile_outline || '#ffffff',
            icon_color: data?.account.color?.icon_color || '#ffffff',
        },
        colorEffect: {

        }
    };
});