import { useMemo } from "react";
import {
  staticDrawerItems,
  staticFooterItems,
} from "./dependencies/ConstansParts";

export const UseItemInfoUserPanel = () => {
  
  const drawerItemInfoForUserPanel = useMemo(() => {
    const filteredStaticItems = Object.entries(staticDrawerItems)
      .reduce((acc, [key, item]) => {
        acc[key] = item;
        return acc;
      }, {} as typeof staticDrawerItems);

    return {
      ...filteredStaticItems,
    };
  }, []);

  const footerItemInfoForUserPanel = useMemo(() => {
    return Object.entries(staticFooterItems)
      .reduce((acc, [key, item]) => {
        acc[key] = {
          ...item,
        };
        return acc;
      }, {} as typeof staticFooterItems);
  }, []);

  return { drawerItemInfoForUserPanel, footerItemInfoForUserPanel };
};
