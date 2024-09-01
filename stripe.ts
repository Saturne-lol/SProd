import Stripe from 'stripe';

const key = process.env.NODE_ENV === 'development' ? process.env.DEV_STRIPE_SECRET_KEY : process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(key as string);
// noinspection JSUnusedGlobalSymbols
export default stripe;