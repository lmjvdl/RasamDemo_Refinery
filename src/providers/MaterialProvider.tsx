import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import RtlProvider from "./RtlProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "@/styles/theme";

const MaterialProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider options={{ key: "css" }} >
      <RtlProvider>
        <ThemeProvider theme={theme}  disableTransitionOnChange>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </RtlProvider>
    </AppRouterCacheProvider>
  );
};

export default MaterialProvider;
