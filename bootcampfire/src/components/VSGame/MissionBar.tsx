import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF603D",
    },
  },
});

interface MissionBarData {
  num: number;
  img: string;
}

interface myBootCampRank {
  algoCnt: string;
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            color="primary"
            {...props}
            sx={{ height: "30px", borderRadius: 10 }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function MissionBar(props: myBootCampRank) {
  const initialMissionData: MissionBarData = {
    num: 0,
    img: "step0_campfire.png",
  };
  const [progress, setProgress] =
    React.useState<MissionBarData>(initialMissionData);

  React.useEffect(() => {

    setProgress(() => {
      if (parseInt(props.algoCnt) >= 50) {
        return {
          num: 100,
          img: "step4_campfire.png",
        };
      } else if (parseInt(props.algoCnt) >= 35) {
        return {
          num: parseInt(props.algoCnt) * 2,
          img: "step3_campfire.png",
        };
      } else if (parseInt(props.algoCnt) >= 17) {
        return {
          num: parseInt(props.algoCnt) * 2,
          img: "step2_campfire.png",
        };
      } else if (parseInt(props.algoCnt) > 0) {
        return {
          num: parseInt(props.algoCnt) * 2,
          img: "step1_campfire.png",
        };
      } else {
        return {
          num: 0,
          img: "step0_campfire.png",
        };
      }
    });

  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <img src={progress.img} alt="" />
      <LinearProgressWithLabel value={progress.num} />
    </Box>
  );
}
