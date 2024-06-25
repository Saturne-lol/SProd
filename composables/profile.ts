import type {Ref} from "vue";

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