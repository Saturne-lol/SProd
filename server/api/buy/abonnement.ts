import stripe from '../../../stripe';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if ((await event.context.db.account.findUnique({
        where: {id: event.context.user.id},
        select: {plan: true}
    }))?.plan !== 'PREMIUM') return sendRedirect(event, '/payment/always?try=1');

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
                price: ((process.env.NODE_ENV === 'development') ? 'price_1PLWkx05yQwZajCd5I2MmpWA' : 'price_1PtYB205yQwZajCdmwZoCGaZ'),
                quantity: 1
            }
        ],
        mode: 'subscription',
        customer_email: event.context.user.id + '@saturne.lol',
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