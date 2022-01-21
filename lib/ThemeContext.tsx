import { createContext, useState } from "react";
import baseStyled, { ThemedStyledInterface } from "styled-components";
import { AppThemeBasics } from "../types/app/AppTheme";
import { Theme } from "../types/profile/Theme";

export const janusTheme: AppThemeBasics = {
  id: "default",
  name: "Solo Like2",
  color: {
    primary: "#4361EE",
    secondary: "#EAEAED",
    tertiary: "#565656",
    background: "#F5F5F5",
    disabled: "#C5C5C6",
  },
};
export const defaultTheme: Theme = {
  id: "default",
  name: "Solo Like2",
  primary: "#F5F4F7",
  secondary: "#FBC334",
  tertiary: "#4cc9f0",
  color: "#565656",
  pinDrop: { color: "#C0C5C6" },
  borderWidth: "1px",
  padding: "10px",
  background: {
    color: "#05F4F7",
  },
  backdrop: {},
  link: {
    icon: {},
  },
  profileImage: {
    width: "100px",
    height: "100px",
    margin: {
      top: "-5rem",
    },
    border: {
      radius: "50%",
      width: "5px",
      color: "white",
    },
    background: {
      color: "white",
    },
    boxShadow: "0px 0px 8px white, 0px 0px 64px #F5F4F7",
  },
  socialButton: {
    border: {
      radius: "100%",
    },
    background: {
      color: "white",
    },
  },
};

type ThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  appTheme: AppThemeBasics;
  setAppTheme: (theme: AppThemeBasics) => void;
};
export const ThemeContext = createContext<ThemeContext>({
  theme: defaultTheme,
  setTheme: () => {},
  appTheme: janusTheme,
  setAppTheme: () => {},
});

export const styled = baseStyled as ThemedStyledInterface<Theme>;
