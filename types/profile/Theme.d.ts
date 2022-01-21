import { Card } from "./Card"
import { Link, LinkIcon } from "./Link"
import { ProfileImageCSS } from "./Profile"
import { SocialButton } from "./SocialButton"
import { CSSBase, CSSColor, CSSShadow, CSSSize } from "../CSSUtils"

export type ThemeBasics = {
    id?: string
    name?: string

    primary?: CSSColor
    secondary?: CSSColor
    tertiary?: CSSColor
    color?: CSSColor

    link?: Link
    socialButton?: SocialButton
    profileImage?: ProfileImageCSS
    profileDescription?: CSSBase
    profileTitle?: CSSBase
    card?: CSSBase
    backdrop?: CSSBase

    pinDrop?: CSSBase
    borderWidth?: CSSSize
    borderRadius?: CSSSize
    padding?: CSSSize
    margin?: CSSSize
    fontSize?: CSSSize
    fontFamily?: string
    fontWeight?: string
    fontStyle?: string
    linkPadding?: CSSSize
    linkWidth?: CSSSize
}

export interface Theme extends ThemeBasics, Link, LinkIcon, Card, ProfileImageCSS, SocialButton { }

export type ThemeProps = {
    theme: Theme
}



