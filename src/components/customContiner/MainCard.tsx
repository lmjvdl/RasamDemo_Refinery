import { MainCardType } from "@/interfaces/ui/mainCard/MainCard";
import { Box, Stack } from "@mui/material";
import React from "react";

const MainCard: React.FC<MainCardType> = ({ children, sx }) => {
  return (
    <Stack
      sx={{
        borderRadius: "10px",
        bgcolor: "background.defaultChannel",
        flexGrow: 2,
        height: "100%",
        overflow: "auto",
        direction: "rtl",
        ...sx,
      }}
    >
      <Box sx={{ direction: "ltr" }}>
        {children}
      </Box>
    </Stack>
  );
};

export default MainCard;
