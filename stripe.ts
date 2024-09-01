import Stripe from 'stripe';

const key = process.env.NODE_ENV === 'development' ? 'sk_test_51PLVZS05yQwZajCdqYZcMZL1UmJxdmy3lEHckp7R6fPKkmeL8xipsrj4PN2a5zQNMfSwPrDoqfhizI4agzl2RspV00GTvYZiD7' : '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';
const stripe = new Stripe(key as string);
// noinspection JSUnusedGlobalSymbols
export default stripe;