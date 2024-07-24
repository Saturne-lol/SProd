export const vues = async (mode: "daily" | "monthly" | "yearly"): Promise<{ labels: string[]; data: number[] }> => {
    return ((await $fetch(`/api/dashboard/stats/get-vues`, {
        query: {mode},
    })) as { vues: {labels: string[], data: number[]} }).vues
}

export default {
    vues: (mode: "daily" | "monthly" | "yearly") => vues(mode),
}