"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";
import MainCardLayoutBodyPrep from "@/components/customContiner/MainCardLayout";
import Image from "next/image"

export default function Layout() {

  return (
    <MainCardLayoutBodyPrep>
        <Image src="/assets/layout/layout.png" alt="layout" width={1000} height={1000} style={{borderRadius: "40px"}}/>
    </MainCardLayoutBodyPrep>
  );
}