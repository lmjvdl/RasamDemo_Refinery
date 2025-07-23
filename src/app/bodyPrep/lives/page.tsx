"use client";

import React, { useEffect, useState } from "react";
import MainCard from "@/components/customContiner/MainCard";
import { demoData } from "@/components/fakeData/layout/fakeData";
import { BodyPrepLiveProps } from "@/interfaces/layout/general/productLinePart";
import LiveCardManager from "@/components/liveCards/LiveCardManager";
import { Box } from "@mui/material";
import startRandomGenerator from "@/utils/homeless/randomGenerator";
import { LiveValues } from "@/interfaces/lives/liveConfig";


export default function BodyPrepLive({ name }: BodyPrepLiveProps) {
  const filteredDevices = demoData.devices.filter((device) => device.type === name);
  const [liveValues, setLiveValues] = useState<LiveValues>({});

  useEffect(() => {
    const stops: (() => void)[] = [];
  
    filteredDevices.forEach((device) => {
      if (device.status === "blue") {
        const deviceId = device.id;
  
        const stopCurrent = startRandomGenerator(30, 50, "A", (val) => {
          setLiveValues((prev) => ({
            ...prev,
            [deviceId]: {
              ...(prev[deviceId] || {}),
              current: parseFloat(val),
            },
          }));
        });
  
        const stopTemp = startRandomGenerator(20, 80, "°C", (val) => {
          setLiveValues((prev) => ({
            ...prev,
            [deviceId]: {
              ...(prev[deviceId] || {}),
              temperature: parseFloat(val),
            },
          }));
        });
  
        stops.push(stopCurrent, stopTemp);
      }
    });
  
    return () => {
      stops.forEach((stop) => stop());
    };
  }, [filteredDevices]);
  

  return (
    <MainCard>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          }}
        >
          {filteredDevices.map((device, index) => {
            const liveData = liveValues[device.id];

            return (
              <LiveCardManager
                key={device.id}
                type={"multiSensor" as const}
                data={{
                  container: {
                    device: index + 1,
                    device_code: device.name || "unknown",
                    product_line_part: 1,
                    time: Date.now(),
                    online:
                      device.status === "blue"
                        ? "on"
                        : device.status === "grey"
                        ? "unknown"
                        : "off",
                    data: {
                      current:
                        device.status === "blue"
                          ? liveData?.current ?? parseFloat(device.current || "0")
                          : device.status === "red"
                          ? 0
                          : undefined,
                      temperature:
                        device.status === "blue"
                          ? liveData?.temperature ?? parseFloat(device.temprature || "0")
                          : device.status === "red"
                          ? 0
                          : undefined,
                    },
                  },
                }}
                
              />
            );
          })}
        </Box>
      </Box>
    </MainCard>
  );
}
