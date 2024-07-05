export function success(descriptions: string) {
    useToast().add({
        title: "Success",
        description: descriptions,
        color: "green",
        icon: "i-material-symbols-check", //@TODO fix icon
    })
}

export function error(e: any) {
    useToast().add({
        title: e.response.statusText,
        description: e.response._data,
        color: "red",
        icon: "mdi:alert-circle", //@TODO fix icon
    })
}