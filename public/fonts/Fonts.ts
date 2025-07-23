import localFont from "next/font/local";

export const vazir = localFont({
    // 300 to 700 , bold
    src: [
      {
        path: "./Vazir/Vazir-FD-WOL.woff",
        weight: "500",
      },
      {
        path: "./Vazir/Vazir-Light-FD-WOL.woff",
        weight: "400",
      },
  
      {
        path: "./Vazir/Vazir-Thin-FD-WOL.woff",
        weight: "300",
      },
  
      {
        path: "./Vazir/Vazir-Medium-FD-WOL.woff",
        weight: "600",
      },
      {
        path: "./Vazir/Vazir-Bold-FD-WOL.woff",
        weight: "700",
      },
    ],
    variable: "--font-vazir",
  });