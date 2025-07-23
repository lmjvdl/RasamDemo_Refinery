import { recognizeState } from "@/utils/formatters/statesLiveCard";
import { Button, Typography } from "@mui/material";

const OnOff = ({ on }: { on: string }) => {
  const state = on === "on" ? "on" : on === "off" ? "off" : "unknown";
  return (
    <Button
      component={Typography}
      color={
        state === "on" ? "primary" : state === "off" ? "error" : "warning"
      }
      disableFocusRipple
      disableTouchRipple
      disableRipple
      disableElevation
      variant="outlined"
    >
      {recognizeState(on)}
    </Button>
  );
};

export default OnOff;
