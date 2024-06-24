// noinspection Annotator

import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return new Response("Method not allowed", {status: 405})

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const quotes = (await readBody(event))
    if (!quotes) return new Response("No quotes", {status: 400})

    await prisma.quotes.deleteMany({
        where: {
            account_id: user.id
        }
    })
    
    if (quotes.length > 3) return new Response("Too many quotes", {status: 400})
    const analyzed = [] as string[]
    for (const quote of quotes) {
        if (quote.length > 20) return new Response("Quote too long", {status: 400})
        if (analyzed.includes(quote)) return new Response("Duplicate", {status: 400})
        analyzed.push(quote)
    }

    await prisma.quotes.createMany({
        data: quotes.map((quote: string) => {
            return {
                account_id: user.id,
                text: quote
            }
        })
    })
    return new Response("Quotes updated", {status: 200})
})