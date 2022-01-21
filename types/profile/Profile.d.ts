import { CSSBase, CSSColor, CSSShadow, CSSSize } from "../CSSUtils"
import { Theme } from "./Theme"

export type ConnectionServices = "spotify" | "soundcloud"
export type SocialNetworks = "facebook" | "whastapp" | "twitter" | "instagram" | "youtube" | "linkedin" | "tiktok" | "github" | "gitlab" | "pinterest" | "twitch" | "reddit" | "venmo"

export interface Profile {
    title: string
    description?: string
    image: string
    cover?: string
    socialNetworks: { id: SocialNetworks, url: string }[]
    links: { title: string, description?: string, url: string, image?: string }[]
    connections: { service: ConnectionServices, id: string }[],
    themeId: string
    location?: string
    theme?: Theme
}

export interface ProfileImageCSS extends CSSBase {
    margin?: {
        top?: CSSSize
    }
}