// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const bio = (await readBody(event)).bio
    if (!bio) return new Response("No Bio provided", {status: 400})

    if (await event.context.db.setting.count({where: {bio: bio}}) !== 0) return new Response("Bio already set", {status: 400})
    await event.context.db.setting.update({
        where: {account_id: event.context.user.id},
        data: {bio: bio}
    })
    
    return new Response("Bio set", {status: 200})
})