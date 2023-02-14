import { createTheme } from '@mui/material/styles';

export const shades = {
    primary: {
        100: "#fff2f5",
        200: "#ffe6ea",
        300: "#ffd9e0",
        400: "#ffcdd5",
        500: "#ffc0cb",
        600: "#cc9aa2",
        700: "#99737a",
        800: "#664d51",
        900: "#332629"
    }, 
    secondary: {
        100: "#f7ccd2",
        200: "#ef99a4",
        300: "#e66677",
        400: "#de3349",
        500: "#d6001c",
        600: "#ab0016",
        700: "#800011",
        800: "#56000b",
        900: "#2b0006"
    },
    neutral: {
        100: "#f5f5f5",
        200: "#ecebeb",
        300: "#e2e1e1",
        400: "#d9d7d7",
        500: "#cfcdcd",
        600: "#a6a4a4",
        700: "#7c7b7b",
        800: "#535252",
        900: "#292929"
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.primary[700]
        },
        secondary: {
            main: shades.secondary[600]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[200]
        }
    },

    typography: {
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Lato", "Helvetica"].join(","),
            fontSize: 48, 
        },
        h2: {
            fontFamily: ["Lato", "Helvetica"].join(","),
            fontSize: 38, 
        },
        h3: {
            fontFamily: ["Lato", "Helvetica"].join(","),
            fontSize: 20, 
        },
        h4: {
            fontFamily: ["Lato", "Helvetica"].join(","),
            fontSize: 14, 
        },
    },
});