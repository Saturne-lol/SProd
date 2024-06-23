// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";
import {MessageBuilder, Webhook} from 'discord-webhook-node'
import {writeFileSync} from "fs";

const prisma = new PrismaClient()
const hook = new Webhook("https://discord.com/api/webhooks/1254524740689985738/NqQcJ2UPbM0NglZJX4LhTyvyTvjQIiHzOPi-jEi7n6yJ4M-92aujkR4ACJIIdDQh964X")

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response("Method not allowed", {status: 405})
    const user = await checkToken(event)
    if (!user) return false

    const blacklisted: boolean | undefined = (await prisma.account.findFirst({
        where: {
            id: user.id,
        },
        select: {
            blacklisted: true
        }
    }))?.blacklisted

    if (blacklisted) return new Response("You are blacklisted", {status: 403})

    const files = await readMultipartFormData(event) as { [key: string]: any }

    const title = files.find((file: any) => file.name === 'title')?.data.toString() || ''
    const description = files.find((file: any) => file.name === 'description')?.data.toString() || ''
    const screenshotBuffer = files.find((file: any) => file.name === 'screen')?.data || null

    writeFileSync('screenshot.png', screenshotBuffer)

    const embed = new MessageBuilder()
        .setAuthor(user.username)
        .setDescription(`**Title:** ${title} \n\n **Description:** ${description}`)

    await hook.send(embed)
    await hook.sendFile("screenshot.png")
    return new Response("Success", {status: 200})
})