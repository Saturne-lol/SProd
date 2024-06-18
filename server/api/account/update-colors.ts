// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response("Method not allowed", {status: 405})

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const colors = (await readBody(event))
    if (!colors || !Array.isArray(colors) || colors.length < 4) {
        return new Response("Invalid colors data", { status: 400 });
    }


    await prisma.color.update({
        where: {
            account_id: user.id
        },
        data: {
            box: colors[0],
            box_outline: colors[1],
            profile_outline: colors[2],
            icon_color: colors[3],
        }
    })
    return new Response("Colors updated", {status: 200})
})