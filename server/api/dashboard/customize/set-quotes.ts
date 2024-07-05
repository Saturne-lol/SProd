import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const quotes = (await readBody(event)).quotes
    if (!quotes) return new Response("No Quotes provided", {status: 400})
    if (!Array.isArray(quotes)) return new Response("Quotes must be an array", {status: 400})
    if (quotes.length === 0) return new Response("Quotes cannot be empty", {status: 400})
    if (quotes.length > 3) return new Response("Quotes cannot be more than 3", {status: 400})

    await prisma.quotes.deleteMany({where: {account_id: user.id}})
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