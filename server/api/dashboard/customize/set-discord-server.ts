// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    let {index, invite} = (await readBody(event)) as { index: number, invite: string };
    if (index < 0 || index > 4) return new Response('Invalid index', {status: 400});
    if (invite === 'delete_invite') {
        await event.context.db.discord.delete({
            where: {
                account_id_index: {
                    account_id: event.context.user.id,
                    index: index
                }
            }
        });

        return new Response('Invite Deleted', {status: 200});
    }

    if (!invite) return new Response('Invite not set', {status: 400});

    if (invite.length > 50) return new Response('Invite too long', {status: 400});
    if (await event.context.db.discord.count({
        where: {
            account_id: event.context.user.id,
            invite
        }
    }) > 0) return new Response('Invite already set', {status: 400});

    await event.context.db.discord.upsert({
        where: {
            account_id_index: {
                account_id: event.context.user.id,
                index: index
            }
        },
        update: {
            invite: invite
        },
        create: {
            account_id: event.context.user.id,
            index: index,
            invite: invite
        }
    });

    return new Response('Invite Set', {status: 200});
});