import { CSSColor, CSSFlexDirection, CSSShadow, CSSSize } from "./Theme";

export type Card = {
    cardHeight?: CSSSize,
    cardWidth?: CSSSize,
    cardBackgroundColor?: CSSColor,
    cardBorderWidth?: CSSSize,
    cardBorderColor?: CSSColor,
    cardBorderRadius?: CSSSize,
    cardBoxShadow?: CSSShadow,
    cardPadding?: CSSSize,
    cardMargin?: CSSSize,
    cardFlexDirection?: CSSFlexDirection,

}