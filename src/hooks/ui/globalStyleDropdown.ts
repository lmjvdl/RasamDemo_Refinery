import { Theme } from "@mui/material/styles";

export const ITEM_HEIGHT = 48;

export const ITEM_PADDING_TOP = 8;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function getStyles(name: string, optionName: string[], theme: Theme) {
    return {
        fontWeight: optionName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
}
