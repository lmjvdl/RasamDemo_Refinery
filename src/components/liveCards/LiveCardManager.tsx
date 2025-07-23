"use client";

import React from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import { LiveManager } from "@/interfaces/lives/manager";
import MultiSensorLiveCard from "./MultiSensor";
import { MultiSensorLiveSchema } from "@/interfaces/lives/multiSensor";

export default function LiveCardManager(manager: LiveManager) {
  if (!manager?.type || !manager?.data) {
    return <LoadingScreen />;
  }

  switch (manager.type) {
    case "multiSensor":
      return (
        <MultiSensorLiveCard
          container={manager.data.container as unknown as MultiSensorLiveSchema}
        />
      );

    default:
      return null;
  }
}
