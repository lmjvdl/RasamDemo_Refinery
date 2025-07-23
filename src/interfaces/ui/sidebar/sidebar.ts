export interface DrawerContentProps {
    drawerItemInfoByKey: Record<string, { text: string; icon: string; to: string; }>;
    footerItemInfoByKey: Record<string, { text: string; icon: string; to: string; onClick?: () => void }>;
    isCollapsed: boolean;
}

export interface SidebarDrawerProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    variant: "temporary" | "permanent";
    drawerWidth: number;
}

interface SidebarItemInfo {
    text: string;
    icon: string;
    to: string;
    onClick?: () => void;
}

export interface SidebarItemListProps {
    items: Record<string, SidebarItemInfo>;
    sx?: object;
    isCollapsed: boolean;
}
  