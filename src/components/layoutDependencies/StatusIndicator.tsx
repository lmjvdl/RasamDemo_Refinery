import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { StatusLightsProps } from "@/interfaces/layout/layout/layoutBodyPrep";

const StatusLights: React.FC<StatusLightsProps> = ({
  orientation,
  position,
  status,
  iconSize,
  // startTime,
  iconWidth = iconSize * 20,
  iconHeight = iconSize * 20,
}) => {
  const [blink, setBlink] = useState(true);
  // const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // const parseStartTime = (time?: string) => {
  //   if (!time) return { hours: 0, minutes: 0, seconds: 0 };
  //   const [hours, minutes, seconds] = time.split(":").map(Number);
  //   return {
  //     hours: isNaN(hours) ? 0 : hours,
  //     minutes: isNaN(minutes) ? 0 : minutes,
  //     seconds: isNaN(seconds) ? 0 : seconds,
  //   };
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   if (status !== "grey" && status !== "red") {
  //     setTimer({ hours: 0, minutes: 0, seconds: 0 });
  //     return;
  //   }

  //   setTimer(parseStartTime(startTime));

  //   const interval = setInterval(() => {
  //     setTimer((prev) => {
  //       let { hours, minutes, seconds } = prev;
  //       seconds++;
  //       if (seconds >= 60) {
  //         seconds = 0;
  //         minutes++;
  //       }
  //       if (minutes >= 60) {
  //         minutes = 0;
  //         hours++;
  //       }
  //       return { hours, minutes, seconds };
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [status, startTime]);

  const lightSize = iconSize * 2;
  const margin = iconSize * 0.5;

  const getLightStyle = (lightStatus: string) => ({
    width: lightSize,
    height: lightSize,
    borderRadius: "50%",
    border: `1px solid ${
      lightStatus === "blue"
        ? "#2196F3"
        : lightStatus === "red"
        ? "#F44336"
        : "#9E9E9E"
    }`,
    backgroundColor:
      status === lightStatus && blink
        ? lightStatus === "blue"
          ? "#2196F3"
          : lightStatus === "red"
          ? "#F44336"
          : "#9E9E9E"
        : "transparent",
    transition: "background-color 0.5s",
  });

  const containerStyle = {
    display: "flex",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    gap: 1,
    position: "absolute" as const,
    zIndex: 10,
    ...(position === "top" && orientation === "vertical" && {
      top: -lightSize * 2 - margin * 6,
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      bottom: "auto",
    }),
    ...(position === "top" && orientation === "horizontal" && {
      top: -lightSize - margin * 1.5,
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      bottom: "auto",
    }),
    ...(position === "bottom" && orientation === "vertical" && {
      top: lightSize * 2 + margin * 2,
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      bottom: "auto",
    }),
    ...(position === "bottom" && orientation === "horizontal" && {
      top: lightSize + margin * 1.5,
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      bottom: "auto",
    }),
    ...(position === "bottom" && orientation !== "vertical" && orientation !== "horizontal" && {
      top: lightSize + margin,
      left: "50%",
      transform: "translateX(-50%)",
    }),
    ...(position === "left" && orientation === "vertical" && {
      left: -lightSize - margin * 2,
      top: "50%",
      transform: "translateY(38%)",
      right: "auto",
      bottom: "auto",
    }),
    ...(position === "left" && orientation !== "vertical" && {
      left: -lightSize - margin,
      top: "50%",
      transform: "translateY(-50%)",
    }),
    ...(position === "right" && orientation === "horizontal" && {
      right: -lightSize - margin * 2,
      top: "50%",
      transform: "translateY(-50%)",
      left: "auto",
      bottom: "auto",
    }),
    ...(position === "right" && orientation !== "horizontal" && {
      right: -lightSize - margin,
      top: "50%",
      transform: "translateY(38%)",
    }),
    ...(position === "both" && {
      top: -lightSize - margin,
      left: -lightSize - margin,
      transform: "none",
    }),
    ...(position === "center" && {
      top: iconHeight / 2,
      left: iconWidth / 2,
      transform: "translate(-50%, -50%)",
    }),
  };

  // const formattedTimer = `${timer.hours.toString().padStart(2, "0")}:${timer.minutes
  //   .toString()
  //   .padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`;

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={containerStyle}>
        <Box sx={getLightStyle("blue")} />
        <Box sx={getLightStyle("red")} />
        <Box sx={getLightStyle("grey")} />
      </Box>
    </Box>
  );
};

export default StatusLights;