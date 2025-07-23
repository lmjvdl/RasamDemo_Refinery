"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/layout/bodyPrep");
  }, [router]);

  return <LoadingScreen />;
}