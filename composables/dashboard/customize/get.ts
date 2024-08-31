export const username = async (): Promise<string> => {
    return ((await useFetch(`/api/dashboard/customize/get-username`, {
        server: true
    })).data.value as { username: string }).username
}

export const url = async (): Promise<string> => {
    return ((await useFetch(`/api/dashboard/customize/get-url`, {
        server: true
    })).data.value as { url: string }).url
}

export const quotes = async (): Promise<string[]> => {
    return ((await useFetch(`/api/dashboard/customize/get-quotes`, {
        server: true
    })).data.value as { quotes: string[] }).quotes
}

export const bio = async (): Promise<string> => {
    return ((await useFetch(`/api/dashboard/customize/get-bio`, {
        server: true
    })).data.value as { bio: string }).bio
}

export const invite = async  (i: number): Promise<string> => {
    return ((await useFetch(`/api/dashboard/customize/get-discord-server`, {
        query: {index: i},
        server: true
    })).data.value as { invite: string }).invite
}

export const entry = async  (): Promise<string> => {
    return ((await useFetch(`/api/dashboard/customize/get-entry`, {
        server: true
    })).data.value as { entry: string }).entry
}

export default {
    username: () => username(),
    url: () => url(),
    quotes: () => quotes(),
    bio: () => bio(),
    invite: (i: number) => invite(i),
    entry: () => entry()
}