import stripe from '../../../stripe';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if ((await event.context.db.account.findUnique({
        where: {id: event.context.user.id},
        select: {plan: true}
    }))?.plan !== 'FREE') return sendRedirect(event, '/payment/always?try=1');

    const customer = await stripe.customers.list({
        email: event.context.user.id + '@saturne.lol',
        limit: 1
    });
    if (customer?.data.length === 0) {
        await stripe.customers.create({
            email: event.context.user.id + '@saturne.lol',
            name: event.context.user.global_name
        });
    }
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: ((process.env.NODE_ENV === 'development') ? 'price_1PLWlb05yQwZajCdObT47pW2' : 'price_1PtYB205yQwZajCdmwZoCGaZ'),
                quantity: 1
            }
        ],
        mode: 'payment',
        customer_email: event.context.user.id + '@saturne.lol',
        success_url: `${getRequestProtocol(event)}://${getHeader(event, 'Host')}/payment/success?type=1'`,
        cancel_url: `${getRequestProtocol(event)}://${getHeader(event, 'Host')}/'`,
        allow_promotion_codes: true,
        payment_intent_data: {
            metadata: {
                userDsc: event.context.user.id,
                product: 'l'
            }
        }
    }).catch((error) => {
        console.error(error);
    });
    return sendRedirect(event, session?.url as string);
});