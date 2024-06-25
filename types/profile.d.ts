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