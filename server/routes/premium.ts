// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    return sendRedirect(event, `/api/buy/premium`);
});