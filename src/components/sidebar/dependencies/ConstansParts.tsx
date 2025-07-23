export type DrawerItem = {
  text: string;
  icon: string;
  to: string;
  requiredPermissions?: number[];
  onClick?: () => void;
};

export const staticDrawerItems: Record<string, DrawerItem> = {
  "چینش تهیه بدنه": {
    text: "چینش تهیه بدنه",
    icon: "LayoutBodyPrep",
    to: "/layout/bodyPrep",
  },
  "تهیه بدنه": {
    text: "تهیه بدنه",
    icon: "BodyPrep",
    to: "/bodyPrep",
  },
};

export const staticFooterItems: Record<string, DrawerItem> = {
  خروج: {
    text: "خروج",
    icon: "Logout",
    to: "/login",
    onClick: () => {},
  },
};
