import baseStyled, { ThemedStyledInterface } from "styled-components";
import { AppThemeBasics } from "../types/app/AppTheme";

export const styled = baseStyled as ThemedStyledInterface<AppThemeBasics>;
