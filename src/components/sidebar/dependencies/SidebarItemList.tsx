import { List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import CircleIcon from '@mui/icons-material/Circle';
import { iconMap } from "@/utils/icons/IconsMenu";
import { useColorScheme } from "@mui/material/styles";
import { SidebarItemListProps } from "@/interfaces/ui/sidebar/sidebar";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SidebarItemList = ({ items, sx, isCollapsed = false }: SidebarItemListProps) => {
  const mode = useColorScheme();
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    const findSelectedItem = () => {
      const sortedItems = Object.entries(items)
        .map(([text, { to }]) => ({ text, to, length: to.length }))
        .sort((a, b) => b.length - a.length);

      const matchedItem = sortedItems.find(item => 
        pathname.startsWith(item.to) || 
        pathname === item.to ||
        pathname === `${item.to}/`
      );

      return matchedItem?.text || ("چینش");
    };

    setSelectedItem(findSelectedItem());
  }, [pathname, items]);

  return (
    <List sx={{ 
      ...sx,
      padding: isCollapsed ? "8px 4px" : "8px",
    }}>
      {Object.entries(items).map(([text, { icon, to }], index) => {
        const IconComponent = iconMap[icon] || CircleIcon;

        const isSelected = selectedItem === text;

        return (
          <SidebarItem
            key={index}
            selected={isSelected}
            text={isCollapsed ? "" : text}
            link={to}
            sx={isCollapsed ? { 
              justifyContent: "center",
              "& .MuiListItemText-root": {
                display: "none",
              },
              "& .MuiListItemIcon-root": {
                minWidth: "auto",
                marginRight: 0,
              },
            } : {}}
            icon={
              <IconComponent
                stroke={
                  isSelected 
                    ? "#fff"
                    : mode.colorScheme === "dark" 
                      ? "#fff" 
                      : "#292D32"
                }
              />
            }
          />
        );
      })}
    </List>
  );
};


export default SidebarItemList;