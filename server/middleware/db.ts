import prisma from '~/prisma';

// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    event.context.db = prisma
})