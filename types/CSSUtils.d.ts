export type CSSColor = string
export type CSSSize = string
export type CSSShadow = string
export type CSSFlexDirection = "row" | "column"
export type CSSBorder = {
    width?: CSSSize
    color?: CSSColor
    radius?: CSSSize
}
export type CSSBackground = {
    color?: CSSColor
    image?: string
}
export type CSSFont = {
    size?: CSSSize
    weight?: string
    family?: string
}

export type CSSBase = {
    left?: CSSSize
    right?: CSSSize
    top?: CSSSize
    bottom?: CSSSize
    border?: CSSBorder,
    background?: CSSBackground,
    padding?: CSSSize | { top: CSSSize, right: CSSSize, bottom: CSSSize, left: CSSSize },
    margin?: CSSSize
    font?: CSSFont
    display?: "flex" | "inline-flex" | "inline" | "none" | "grid" | "inline-grid"
    flexDirection?: "row" | "column"
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    overflow?: "visible" | "hidden" | "scroll" | "auto"
    boxShadow?: CSSShadow
    color?: CSSColor
    width?: CSSSize
    height?: CSSSize
    minWidth?: CSSSize
    maxWidth?: CSSSize
    minHeight?: CSSSize
    maxHeight?: CSSSize
    textAlign?: "left" | "right" | "center" | "justify"
    gap?: CSSSize
    backgroundImage?: string
    position?: "relative" | "absolute" | "fixed"
    outline?: CSSBorder
}