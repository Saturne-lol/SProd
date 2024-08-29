import {error, success} from '~/composables/dashboard/notify';

const request = async (url: string, body: any): Promise<boolean> => {
    return await $fetch('/api/dashboard/customize/set-' + url, {
        method: 'POST',
        server: true,
        body: JSON.stringify(body)
    }).then((r) => {
        success(r as unknown as string);
        return true;
    }).catch(e => {
        error(e);
        return false;
    });
};

export default {
    url: async (url: string) => await request(`url`, {url}),
    username: async (username: string) => await request(`username`, {username}),
    quotes: async (quotes: string[]) => await request(`quotes`, {quotes}),
    bio: async (bio: string) => await request(`bio`, {bio}),
    invite: async (i: number, invite: string) => await request(`discord-server`, {index: i, invite}),
    entry: async (entry: string) => await request(`entry`, {entry})
};