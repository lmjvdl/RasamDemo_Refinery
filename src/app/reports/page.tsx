"use client";

import MainCard from "@/components/customContiner/MainCard";
import React, { useEffect, useState } from "react";
import TabsSection from "@/components/tabs/TabsSection";
import { tabs } from "../../utils/fakeConfigs/tabsConfig";
import { useSearchParams } from "next/navigation";

export default function BodyPrepPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const deviceParam = searchParams.get("device");

    if (deviceParam) {
      const tabIndex = tabs.findIndex((tab) => tab.name === deviceParam);
      if (tabIndex !== -1) {
        setSelectedTab(tabIndex);
      }
    }
  }, [searchParams]);

  const handleChange = (input: string) => {
    console.log(input);
  };

  const safeSelectedTab = Math.min(selectedTab, tabs.length - 1);

  return (
    <MainCard>
      <TabsSection
        selectedTab={safeSelectedTab}
        setSelectedTab={setSelectedTab}
        tabLabels={tabs.map((tab) => tab.label)}
        onReportChange={handleChange}
      >
        report page
      </TabsSection>
    </MainCard>
  );
}
