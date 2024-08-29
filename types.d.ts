import { PrismaClient } from '@prisma/client';
import { UserDiscord } from './api/discord';

// noinspection JSUnusedGlobalSymbols
declare module 'h3' {
    interface H3EventContext {
        db: PrismaClient;
        user: UserDiscord;
    }
}