import {error, success} from "~/composables/dashboard/notify";

export const url = async (url: string): Promise<boolean> => {
    return await $fetch(`/api/dashboard/customize/set-url`, {
        method: "POST",
        body: JSON.stringify({url}),
        server: true
    }).then(() => {
        success("URL set")
        return true
    }).catch(e => {
        error(e)
        return false
    })
}

export const username = async (username: string): Promise<boolean> => {
    return await $fetch(`/api/dashboard/customize/set-username`, {
        method: "POST",
        body: JSON.stringify({username}),
        server: true
    }).then(() => {
        success("URL set")
        return true
    }).catch(e => {
        error(e)
        return false
    })
}


export const quotes = async (quotes: string[]): Promise<boolean> => {
    return await $fetch(`/api/dashboard/customize/set-quotes`, {
        method: "POST",
        body: JSON.stringify({quotes}),
        server: true
    }).then(() => {
        success("Quotes set")
        return true
    }).catch(e => {
        error(e)
        return false
    })
}

export const bio = async (bio: string): Promise<boolean> => {
    return await $fetch(`/api/dashboard/customize/set-bio`, {
        method: "POST",
        body: JSON.stringify({bio}),
        server: true
    }).then(() => {
        success("Bio set")
        return true
    }).catch(e => {
        error(e)
        return false
    })
}

export const invite = async (i: number, invite: string): Promise<boolean> => {
    return await $fetch(`/api/dashboard/customize/set-discord-server`, {
        method: "POST",
        body: JSON.stringify({index: i, invite}),
        server: true
    }).then(() => {
        success("Invite set")
        return true
    }).catch(e => {
        error(e)
        return false
    })
}


export default {
    url: (urlS: string) => url(urlS),
    username: (usernameS: string) => username(usernameS),
    quotes: (quotesS: string[]) => quotes(quotesS),
    bio: (bioS: string) => bio(bioS),
    invite: (i: number, inviteS: string) => invite(i, inviteS)
}