export const getProfile = async (username: string): Promise<Profile> => {
    return (await useFetch('/api/profile/get-profile', {
        query: {username},
        server: true
    })).data.value as Profile
}

export const getBadges = async (username: string): Promise<Badge[]> => {
    return (await useFetch('/api/profile/get-badges', {
        query: {username},
        server: true
    })).data.value as Badge[]
}

export const getGlobal = async (username: string): Promise<GlobalProfile> => {
    return (await useFetch('/api/profile/get-global', {
        query: {username},
        server: true,
    })).data.value as GlobalProfile
}

export const getViews = async (username: string): Promise<number> => {
    return ((await useFetch('/api/profile/get-views', {
        query: {username},
        server: true,
    })).data.value as {views: number}).views
}

export const getDiscordProfile = async (username: string): Promise<DiscordProfile> => {
   return (await useFetch(`/api/profile/get-box-user`, {
        query: {username},
        server: true
    })).data.value as DiscordProfile
}

export const getDiscordServers = async (username: string): Promise<ServerProfile[]> => {
    return (await useFetch(`/api/profile/get-box-discord`, {
        query: {username},
        server: true
    })).data.value as ServerProfile[]
}