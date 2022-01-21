import { CSSBase } from "../CSSUtils";

export type AppThemeBasics = {
    id?: string
    name?: string
    color: {
        primary?: CSSColor
        secondary?: CSSColor
        tertiary?: CSSColor
        background?: CSSColor
        disabled?: CSSColor
        text?: CSSColor
    },
    importantButton?: CSSBase
}