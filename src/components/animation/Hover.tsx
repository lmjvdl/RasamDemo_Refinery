"use client";

import { useTheme } from "@mui/material";
import React from "react";

const HoverCursor = () => {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const theme = useTheme();

  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        opacity: 0.6,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s ease",
        zIndex: 3000,
        animation: "pulse 1.2s infinite",
      }}
    />
  );
};

export default HoverCursor;
