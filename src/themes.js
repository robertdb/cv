import React from "react";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
    main: "#ff8946",
    darkMain: "#ce682f",
    gradient: "rgba(125, 93, 65, .7)"
};
export const DefaultThemeProvider = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

const blueTheme = {
    main: "#11497A",
    darkMain: "#0c3151",
    gradient: "rgba(17, 73, 122, 0.7)"
};
export const BlueThemeProvider = ({ children }) => (
    <ThemeProvider theme={blueTheme}>{children}</ThemeProvider>
);