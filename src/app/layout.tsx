
"use client";

import React, { useState } from "react";
import Providers from "@/providers/Providers";
import "../styles/globals.css";
import { vazir } from "../../public/fonts/Fonts";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box, Stack } from "@mui/material";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const drawerWidth = 240;
  const collapsedWidth = 47;
  const [desktopOpen, setDesktopOpen] = useState(true);

  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} font-sans`}>
      <head>
        <title>RasamIoT</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Factory data monitoring and reporting" />
        <meta
          name="keywords"
          content="Rasam, Factory, Menhaj, Monitoring, Reporting, IoT, Yazd, رسام, منهاج, یزد, کارخانه کاشی یزد, مانیتورینگ کارخانه کاشی, اینترنت اشیا"
        />
        <meta name="author" content="Rasam company" />
        <meta charSet="UTF-8" />
        <meta
          name="copyright"
          content="© همه حقوق برای شرکت رسام محفوظ است rasamiot.com"
        />
      </head>
      <body>
        <Providers>
          <Stack direction="row" width="100%" height="100%" bgcolor="background.default" overflow="auto">
            <Sidebar
              desktopOpen={desktopOpen}
              setDesktopOpen={setDesktopOpen}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
              drawerWidth={drawerWidth}
              collapsedWidth={collapsedWidth}
            />

            <Stack width="100%" height="100%" component="main">
              <Header
                drawerWidth={drawerWidth}
                collapsedWidth={collapsedWidth}
                desktopOpen={desktopOpen}
                factoryName="رسام"
              />

              <Box component="main" width="100%" height="calc(100% - 64px)" sx={{ flexGrow: 1, p: 2, mt: "64px" }}>
                {children}
              </Box>
            </Stack>
          </Stack>
        </Providers>
      </body>
    </html>
  );
}
