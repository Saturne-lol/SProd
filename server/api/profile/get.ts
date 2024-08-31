import {PlanEnum} from '@prisma/client';
import axios from 'axios';
import badgesData from '~/api/badgesData';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return {error: 'No username provided'};

    const views = await event.context.db.view.count({
        where: {
            profile_id: (await event.context.db.setting.findFirst({
                where: {
                    url: getQuery(event).username as string
                },
                select: {
                    account_id: true
                }
            }))?.account_id
        }
    }) as number;

    return event.context.db.account.findFirst({
        where: {
            setting: {url: getQuery(event).username as string}
        },
        select: {
            id: true,
            plan: true,
            beta: true,
            setting: {
                select: {
                    url: true,
                    bio: true,
                    username: true,
                    enter_message: true,
                    view: true
                }
            },
            quotes: {
                select: {
                    text: true
                }
            },
            discord: {
                orderBy: {
                    index: 'asc'
                },
                select: {
                    invite: true,
                    index: true
                }
            },
            badges: {
                select: {
                    badge: true
                }
            },
            color: true
            // _count: {
            //     select: {
            //         view: {
            //             where: {
            //                 setting: {url: getQuery(event).username as string}
            //             }
            //         }
            //     }
            // }
        }
    }).then(async (profile) => {
        if (profile?.plan === PlanEnum.PREMIUM) profile?.badges.push({badge: 'premium1'});
        if (profile?.plan === PlanEnum.PREMIUM_PLUS) profile?.badges.push({badge: 'premium2'});
        if (profile?.beta) profile?.badges.push({badge: 'beta'});
        profile?.badges.push({badge: 'member'});

        const member = await axios.get('https://bot.saturne.lol/member/' + profile?.id).then((res) => {
            return res.data;
        }).catch(() => false);
        return {
            global: {
                userID: profile?.id || 0,
                enterMessage: profile?.setting?.enter_message || '',
                views: profile?.setting?.view ? /*profile._count.view*/views : -1
            },
            profile: {
                username: profile?.setting?.username || '',
                bio: profile?.setting?.bio || '',
                quotes: profile?.quotes.map((quote) => quote.text) || [],
                badges: profile?.badges.sort((a, b) => badgesData.findIndex(badge => badge.id === a.badge) - badgesData.findIndex(badge => badge.id === b.badge)).map(({badge}) => ({
                    name: badgesData.find(b => b.id === badge)?.name,
                    image: badge + '.png'
                })).filter(badges => badges.image !== undefined && badges.name !== undefined) || []
            },
            discord: {
                servers: await Promise.all(profile?.discord.slice(0, profile?.plan === PlanEnum.FREE ? 1 : (profile?.plan === PlanEnum.PREMIUM ? 3 : 5)).map(async (server) => {
                    const data = await axios.get(`https://discord.com/api/v9/invites/${server.invite}?with_counts=true`).then(({data}) => data).catch(() => null);
                    return {
                        name: data?.guild.name || 'Invalid invite',
                        total: data?.approximate_member_count || 0,
                        online: data?.approximate_presence_count || 0,
                        image: data?.guild.id ? `https://cdn.discordapp.com/icons/${data?.guild.id}/${data?.guild.icon}.png` : null,
                        invite: server.invite || 'saturnelol'
                    };
                }) || [] as any),
                profile: {
                    avatar: member.avatar || 'https://cdn.saturne.lol/file/profile/nooo.png',
                    username: member.displayName || 'Invalid username',
                    presence: member.presence || 'offline',
                    status: member?.activity?.text
                        ? (member?.activity?.emoji
                            ? (member.activity.emoji.includes('https')
                                ? member.activity.text
                                : member.activity.emoji + ' ' + member.activity.text)
                            : member.activity.text)
                        : '',
                    emoji: member?.activity?.emoji?.includes('https') ? member.activity.emoji : null
                }
            },
            colors: {
                box: `background-color: ${hexToRgb(profile?.color?.box || '#FFFFFF', 0.08)}`,
                box_outline: `border: 1px solid ${hexToRgb(profile?.color?.box_outline || '#FFFFFF', 0.4)}`,
                profile_outline: `border: 2px solid ${hexToRgb(profile?.color?.profile_outline || '#FFFFFF', 0.5)}`,
                icon_color: '',
                display_name: '',
                quotes: '',
                description: '',
                box_glows: ''
            }
        } as ProfileData;
    });
});

function hexToRgb(hex: string, opac: number = 1): string {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return `rgba(${(bigint >> 16) & 255},${(bigint >> 8) & 255},${bigint & 255},${opac})`;
}