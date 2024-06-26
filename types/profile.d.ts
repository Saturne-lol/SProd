type discordBox = []

type Profile = {
    username: string,
    bio: string,
    userID: string,
    /**
     * @deprecated This should be replaced with userID
     */
    avatar: string,
    quotes: Array<string>
}

type Badge = {
    name: string,
    image: string
}

type GlobalProfile = {
    clickToEnter: string,
    userID: string,
    nbDcBoxes: number,
}

type DiscordProfile = {
    username: string,
    avatar: string,
    presence: string,
    status: string,
    emoji?: string
}

type ServerProfile = {
    name: string,
    total: number,
    online: number,
    image: string | null,
    invite: string,
}