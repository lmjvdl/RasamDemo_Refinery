"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ReactNode } from "react";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const RtlProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
export default RtlProvider;
