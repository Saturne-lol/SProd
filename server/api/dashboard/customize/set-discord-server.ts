import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    let {index, invite} = (await readBody(event)) as {index: number, invite: string}

    if (index < 0 || index > 4) return new Response("Invalid index", {status: 400})

    if (invite === "delete_invite")  {
        await prisma.discord.delete({
            where: {
                account_id_index: {
                    account_id: user.id,
                    index: index
                }
            }
        })

        return new Response("Invite Deleted", {status: 200})
    }


    if (!invite) return new Response("Invite not set", {status: 400})
    invite = invite.toLowerCase() as string

    if (invite.length > 50) return new Response("Invite too long", {status: 400})
    if (await prisma.discord.count({where: {account_id: user.id, invite}}) > 0) return new Response("Invite already set", {status: 400})


    await prisma.discord.upsert({
        where: {
            account_id_index: {
                account_id: user.id,
                index: index
            }
        },
        update: {
            invite: invite
        },
        create: {
            account_id: user.id,
            index: index,
            invite: invite
        }
    })

    
    return new Response("Invite Set", {status: 200})
})