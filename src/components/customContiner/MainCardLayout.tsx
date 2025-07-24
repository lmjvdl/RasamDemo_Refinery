"use client"

import React from "react";
import { MainCardType } from "@/interfaces/ui/mainCard/MainCard";
import { Box } from "@mui/material";
import MainCard from "./MainCard";

const MainCardLayout: React.FC<MainCardType> = ({ children }) => {
  return (
    <MainCard>
      <Box
        sx={{
          overflow: "auto",
          position: "relative",
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          p: 2
        }}
      >
        <Box
          sx={{
            position: "relative",
            direction: "ltr",
          }}
        >
          {children}
        </Box>
      </Box>
    </MainCard>
  );
};

export default MainCardLayout;