type ProfileData = {
    global: GlobalProfile,
    profile: Profile,
    discord: Discord
    colors: Colors
}


type GlobalProfile = {
    enterMessage: string,
    views: number,
    userID: string,
}

type Profile = {
    username: string,
    bio: string,
    quotes: Array<string>
    badges: Array<Badge>
}

type Discord = {
    servers: Array<ServerProfile>
    profile: DiscordProfile
}

type Badge = {
    name: string,
    image: string
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

interface Colors {
    [key: string]: string;
}