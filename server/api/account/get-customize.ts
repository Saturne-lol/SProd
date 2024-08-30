// noinspection Annotator

import {checkToken} from '~/api/discord';
import {PlanEnum, PrismaClient} from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event);
    if (!user) return false;
    const settings = await prisma.setting.findFirst({
        where: {
            account_id: user.id
        },
        select: {
            url: true,
            username: true,
            bio: true,
            enter_message: true,
            views: true
        }
    });
    const account = await prisma.account.findFirst({
        where: {
            id: user.id
        },
        select: {
            plan: true
        }
    });
    const discord = (await prisma.discord.findMany({
        where: {
            account_id: user.id
        },
        select: {
            index: true,
            invite: true
        }
    })).map((d: any) => {
        return {index: d.index, invite: d.invite};
    }) as { index: number, invite: string }[];

    let plan: number = 0;
    if (account?.plan === PlanEnum.FREE) plan = 0;
    if (account?.plan === PlanEnum.PREMIUM) plan = 1;
    if (account?.plan === PlanEnum.PREMIUM_PLUS) plan = 2;

    const member = await axios.get('https://bot.saturne.lol/member/' + user.id).then((res) => {
        if (res.status === 200) return res.data;
        return false;
    }).catch(() => false);

    const quotes = await prisma.quotes.findMany({
        where: {
            account_id: user.id
        },
        select: {
            text: true
        }
    });

    const color = await prisma.color.findUnique({
        where: {
            account_id: user.id
        }
    }) as any;

    return {
        url: settings?.url,
        username: settings?.username,
        bio: settings?.bio,
        plan,
        discord,
        linked: member ? `${member.displayName} (${member.id})` : false,
        enter: settings?.enter_message || 'Click to enter...',
        views: settings?.views || 0,
        quotes: quotes.map((q: any) => q.text) || [],
        colors: Object.keys(color).map((key) => color[key]).slice(1)
    };
});