"use client";

import MainCard from "@/components/customContiner/MainCard";
import React, { useEffect, useState } from "react";
import TabsSection from "@/components/tabs/TabsSection";
import BodyPrepLive from "./lives/page";
import { tabs } from "./tabsConfig";
import { useSearchParams } from "next/navigation";
import { reports } from "@/components/fakeData/live/reportBodyPrepDetailTest";

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

  const selectedTabName = tabs[safeSelectedTab].name;

  const currentReports =
    reports
      .find((r) => r.report_id === selectedTabName)
      ?.data.map((item) => item.name) || [];

  return (
    <MainCard>
      <TabsSection
        selectedTab={safeSelectedTab}
        reportOptions={{ [safeSelectedTab]: currentReports }}
        setSelectedTab={setSelectedTab}
        tabLabels={tabs.map((tab) => tab.label)}
        onReportChange={handleChange}
      >
        <BodyPrepLive name={tabs[safeSelectedTab].name} />
      </TabsSection>
    </MainCard>
  );
}
