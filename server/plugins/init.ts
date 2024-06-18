import {createBot} from "~/api/bot";

export default defineNitroPlugin((nitroApp) => {
    createBot();
})