// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const quotes = (await readBody(event)).quotes;
    if (!quotes) return new Response('No Quotes provided', {status: 400});
    if (!Array.isArray(quotes)) return new Response('Quotes must be an array', {status: 400});
    if (quotes.length === 0) return new Response('Quotes cannot be empty', {status: 400});
    if (quotes.length > 3) return new Response('Quotes cannot be more than 3', {status: 400});
    if (quotes.some((quote: string) => quote.length > 20)) return new Response('Quotes cannot be more than 20 characters', {status: 400});

    await event.context.db.quotes.deleteMany({where: {account_id: event.context.user.id}});
    await event.context.db.quotes.createMany({
        data: quotes.map((quote: string) => {
            return {
                account_id: event.context.user.id,
                text: quote
            };
        })
    });

    return new Response('Quotes updated', {status: 200});
});