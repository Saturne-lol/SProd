import {checkToken} from "~/api/discord";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') return false

    const user = await checkToken(event)
    if (!user) return new Response("Unauthorized", {status: 401})

    const quotes = (await readBody(event))
    if (!quotes) return false
    // if (getBlUrl().includes(quotes)) return false

    await prisma.quotes.deleteMany({
        where: {
            account_id: user.id
        }
    })
    
    if (quotes.length > 3) return new Response("Too many quotes", {status: 400})
    const analyzed = [] as string[]
    for (const quote of quotes) {
        if (analyzed.includes(quote)) return new Response("Duplicate", {status: 400})
        analyzed.push(quote)
    }

    await prisma.quotes.createMany({
        data: quotes.map((quote: string) => {
            console.log(quote)
            return {
                account_id: user.id,
                text: quote
            }
        })
    })
    return true
})