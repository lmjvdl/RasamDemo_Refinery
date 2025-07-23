export type DrawerItem = {
  text: string;
  icon: string;
  to: string;
  requiredPermissions?: number[];
  onClick?: () => void;
};

export const staticDrawerItems: Record<string, DrawerItem> = {
  "چینش": {
    text: "چینش",
    icon: "Layout",
    to: "/layout",
  },
  "گزارشات": {
    text: "گزارشات",
    icon: "Reports",
    to: "/reports",
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
