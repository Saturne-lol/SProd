import stripe from '../../../stripe';
import Stripe from 'stripe';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    const eventS = stripe.webhooks.constructEvent(
        await readRawBody(event) as string,
        getHeader(event, 'stripe-signature') as string,
        process.env.NODE_ENV === 'development' ? 'whsec_f428fa267f000eb5016802d9b52f9c35e9fb42952831a68cb5c38a08be0eee2b' : 'whsec_4iv9wqKD80LW6rkeGoqiipySGVCEP7GE');

    switch (eventS.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = eventS.data.object as Stripe.PaymentIntent;
            const metadata = paymentIntent.metadata;

            const userID = metadata?.userDsc as string;
            if (metadata?.product === 'l') {
                const plan = (await event.context.db.account.findUnique({
                    where: {id: userID},
                    select: {plan: true}
                }));

                if (plan?.plan === 'FREE') {
                    await event.context.db.account.update({
                        where: {id: userID},
                        data: {plan: 'PREMIUM'}
                    });
                    // return sendRedirect(event, '/plan?success=1')
                } else {
                    console.log('Merci de contactez le staff, une erreur est survenue sur votre commande.');
                }
            }
            break;
        case 'customer.subscription.created':
            const subscription = eventS.data.object as Stripe.Subscription;
            const subscriptionMetadata = subscription.metadata;
            const subscriptionUserID = subscriptionMetadata?.userDsc as string;

            return event.context.db.account.update({
                where: {id: subscriptionUserID},
                data: {plan: 'PREMIUM_PLUS'}
            });

        case 'customer.subscription.deleted':
            const subscriptionD = eventS.data.object as Stripe.Subscription;
            const subscriptionMetadataD = subscriptionD.metadata;
            const subscriptionUserIDD = subscriptionMetadataD?.userDsc as string;

            return event.context.db.account.update({
                where: {id: subscriptionUserIDD},
                data: {plan: 'PREMIUM'}
            });
    }
    return {
        statusCode: 200,
        body: 'Success'
    };
});