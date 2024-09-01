import stripe from '../../../stripe';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const plan = (await event.context.db.account.findUnique({
        where: {id: event.context.user.id},
        select: {plan: true}
    }))?.plan;

    if (plan === "PREMIUM_PLUS") return sendRedirect(event, '/payment/always');
    if (plan === "FREE") return sendRedirect(event, '/');

    const customer = await stripe.customers.list({
        email: event.context.user.id + '@saturne.lol',
        limit: 1
    });

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: ((process.env.NODE_ENV === 'development') ? 'price_1PLWkx05yQwZajCd5I2MmpWA' : 'price_1PtxdG05yQwZajCd08IzJOnn'),
                quantity: 1
            }
        ],
        mode: 'subscription',
        customer: customer.data[0].id,
        success_url: `${getRequestProtocol(event)}://${getHeader(event, 'Host')}/payment/success?type=2'`,
        cancel_url: `${getRequestProtocol(event)}://${getHeader(event, 'Host')}/'`,
        allow_promotion_codes: true,
        subscription_data: {
            metadata: {
                userDsc: event.context.user.id
            }
        }
    }).catch((error) => {
        console.error(error);
    });
    // console.log("create: ",session)
    return sendRedirect(event, session?.url as string);
});