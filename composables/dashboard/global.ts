import type {PlanEnum} from "@prisma/client";

export const getPlan = async (): Promise<PlanEnum> => {
    return ((await useFetch(`/api/dashboard/global/get-plan`, {
        server: true
    })).data.value as { plan: PlanEnum }).plan
}

export default {
    getPlan: () => getPlan()
}