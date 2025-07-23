"use client";
import { faIR } from "@mui/material/locale";
import { ColorSystemOptions, createTheme } from "@mui/material/styles";

const lightObject: ColorSystemOptions = {
  palette: {
    primary: {
      main: "#0FBDA2",
    },
    secondary: {
      main: "#E7F8F9",        
    },
    background: {
      default: "#F7F7F7",
      defaultChannel: "#FFFFFF",
      disable: "#EDEDED",
      enable: "#B8E1DC",  
      paperChannel: "#FFFFFF"       
    },
    table: {
      oddColumn: "#fff",
      evenColumn: "#F2F2F2",
      header: "#0FBDA2",
    },
    text: {
      primary: "#333333",
      secondary: "#A7C4C2",
    },                                                   
  },
};
const darkObject: ColorSystemOptions = {
  palette: {
    primary: {
      main: "#0FBDA2",
    },
    secondary: {
      main: "#F7F7F7",
    },

    background: {
      default: "#2E2E2E",
      defaultChannel: "#333333",
      disable: "#3A3A3A",
      enable: "#0B8E7A",
      paper: "#333333",
      paperChannel: "#9AA0A8"  
    }, 
    table: {
      header: "#0FBDA2",
      oddColumn: "#4C4C4C",
      evenColumn: "#646464",
    },
    text: {
      primary: "#fff",
      secondary: "#F7F7F7"
    },
  },
};

const theme = createTheme(
  {
    cssVariables: {
      colorSchemeSelector: "class",
    },

    direction: "rtl",
    colorSchemes: {
      light: lightObject,
      dark: darkObject,
    },
    shape: { borderRadius: 8 },
    typography: {
      fontFamily: "vazir",
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {
            variants: [
              {
                props: { variant: "contained" },
                style: {
                  color: "var(--mui-palette-common-white)",
                },
              },
            ],
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            "&:not(.Mui-focused)": {
              flexWrap: "nowrap",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorDefault: "#fff",
        },
        defaultProps: {
          color: "default",
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
        styleOverrides: {
          root: ({ theme }) => {
            return {
              "& fieldset": {
                borderWidth: "1px",
                borderColor: theme.palette.background,
                color: theme.palette.background,
              },
            };
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => {
            return {
              "&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
              '& .MuiOutlinedInput-input:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.default} inset`,
                WebkitTextFillColor: theme.palette.text,
                caretColor: theme.palette.text.primary,
                borderRadius: theme.shape.borderRadius,
              },
            };
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& input:-webkit-autofill': {
              WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.default} inset`,
              WebkitTextFillColor: theme.palette.text.primary,
              caretColor: theme.palette.text.primary,
              borderRadius: theme.shape.borderRadius,
            },
            '& input:-webkit-autofill:focus': {
              WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.default} inset`,
            },
            "& .Mui-active ": {
              borderWidth: "2px",
            },
          }),
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: ({ theme }) => {
            return {
              "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.action.hover,
              },
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            };
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => {
            return {
              backgroundColor: theme.palette.table.header,
              th: {
                color: theme.palette.common.white,
                fontWeight: "bold",
                ...theme.applyStyles("dark", {
                  color: theme.palette.common.black,
                }),
              },
            };
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 5,
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          size: "small"
        },
        styleOverrides: {
          root: ({ theme }) => {
            return {
              "& fieldset": {
                borderWidth: "2px",
                borderColor: theme.palette.divider,
              },
            };
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          size: "small"
        },
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            '&.Mui-focused': {
              color: theme.palette.background,
            },
          }),
        },
      },      
    },
  },
  faIR
);

export default theme;
