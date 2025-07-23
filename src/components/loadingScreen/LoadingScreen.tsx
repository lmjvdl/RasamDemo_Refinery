"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <CircularProgress size={150} thickness={2.5} />
      <Typography variant="h4" sx={{ mt: 2, color: "text.secondary" }}>
        لطفاً منتظر بمانید...
      </Typography>
    </Box>
  );
}
