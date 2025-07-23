import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  useTheme,
} from "@mui/material";
import OnOff from "./dependenciesLiveCards/OnOff";
import { MultiSensorLiveSchema } from "@/interfaces/lives/multiSensor";

interface Props {
  container: MultiSensorLiveSchema;
}

export default function MultiSensorLiveCard({ container }: Props) {
  const theme = useTheme();
  const safeData = container.data || {};

  return (
    <Box
      sx={{
        padding: 1,
        boxSizing: "border-box",
        margin: 1,
      }}
    >
      <Card
        sx={{
          boxShadow: 3,
          height: "100%",
          backgroundColor:
            container.online === "on"
              ? theme.palette.background.default
              : theme.palette.background.disable,
        }}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h6">{container.device_code}</Typography>
            <OnOff on={container.online} />
          </Box>

          <Box mt={2} display="flex" flexDirection="column" gap={2}>
            <Divider />
            <Typography>
              جریان دستگاه:{" "}
              {safeData.current === undefined
                ? "نامشخص"
                : `${safeData.current} A`}
            </Typography>
            <Typography>
              دمای دستگاه:{" "}
              {safeData.temperature === undefined
                ? "نامشخص"
                : `${safeData.temperature} °C`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
