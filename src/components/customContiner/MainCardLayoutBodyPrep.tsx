import { MainCardType } from "@/interfaces/ui/mainCard/MainCard";
import { Box } from "@mui/material";
import React from "react";

const MainCardLayoutBodyPrep: React.FC<MainCardType> = ({ children }) => {
  const baseWidth = 1000;
  const baseHeight = 1700;

  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scaleX = windowSize.width / baseWidth;
  const scaleY = windowSize.height / baseHeight;
  const scale = Math.max(1, Math.min(scaleX, scaleY));

  return (
    <Box
      sx={{
        overflow: "auto",
        position: "relative",
        direction: "rtl",
      }}
      >
      <Box
        sx={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          position: "relative",
          direction: "ltr",
          minWidth: `${baseWidth}px`,
          minHeight: `${baseHeight}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainCardLayoutBodyPrep;