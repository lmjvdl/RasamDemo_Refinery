import { Typography } from "@mui/material";

export default function WelcomeUserPanel({factoryName}: {factoryName?: string}) {
  return (
    <Typography
      component="span"
      sx={{
        flexGrow: 1,
        textAlign: "center",
      }}
    >
      به پنل مانیتورینگ{" "}
      <Typography
        sx={{
          color: "var(--mui-palette-primary-main)",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        {factoryName}
      </Typography>{" "}
      خوش آمدید
    </Typography>
  );
}
