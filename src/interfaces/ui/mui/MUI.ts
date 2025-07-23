export type tableCustomPalleteOption = {
    header?: string;
    oddColumn?: string;
    evenColumn?: string;
  };
declare module "@mui/material/styles" {
  interface Palette {
    table: tableCustomPalleteOption;
  }

  interface PaletteOptions {
    table: tableCustomPalleteOption;
  }
  interface TypeBackground {
    disable?: string;
    enable?: string;
  }
}