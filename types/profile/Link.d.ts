import { CSSBase, CSSBorder, CSSColor, CSSShadow, CSSSize } from "./Theme"

export interface Link extends CSSBase {
    icon?: LinkIcon
    color?: CSSColor
    background?: {
        color?: CSSColor
    }
}

interface LinkIcon extends CSSBase { }