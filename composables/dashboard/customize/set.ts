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
    url: async (url: string) => {
        return await request(`url`, {url});
    },
    username: async (username: string) => {
        return await request(`username`, {username});
    },
    quotes: async (quotes: string[]) => {
        return await request(`quotes`, {quotes});
    },
    bio: async (bio: string) => {
        return await request(`bio`, {bio});
    },
    invite: async (i: number, invite: string) => {
        return await request(`discord-server`, {index: i, invite});
    },
    entry: async (entry: string) => {
        return await request(`entry`, {entry});
    },
    view: async (view: boolean) => {
        return await request(`view`, {view});
    },
    color: async (color: string, key:string) => {
        return await request(`color`, {color, key});
    }
};