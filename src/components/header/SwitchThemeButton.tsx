"use client";
import { Box, Container, useColorScheme } from "@mui/material";
import { IconMoon, IconSun } from "@tabler/icons-react";
import React from "react";

export default function SwitchThemeButton() {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Container>
        <Box
          onClick={toggleTheme}
          sx={{
            width: 62,
            height: 33,
            borderRadius: "67px",
            display: "flex",
            alignItems: "center",
            padding: "1px",
            cursor: "pointer",
            backgroundColor: mode === "dark" ? "#333" : "#ddd",
            transition: "all 1s ease-in",
          }}
        >
          <Box
            sx={{
              width: 31,
              height: 31,
              borderRadius: "67px",
              backgroundColor: "var(--mui-palette-primary-main)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 1s ease-in",
              transform: mode === "dark" ? "translateX(30px)" : "translateX(0)",
            }}
          >
            {mode === "dark" ? <IconMoon size={16} /> : <IconSun size={16} />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
