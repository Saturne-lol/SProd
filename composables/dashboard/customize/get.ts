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

export default {
    username: () => username(),
    url: () => url(),
    quotes: () => quotes(),
    bio: () => bio()
}