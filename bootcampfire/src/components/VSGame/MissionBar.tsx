import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF603D',
    },
  },
});

interface MissionBarData {
  num: number;
  img: string;
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" color="primary" {...props} sx={{ height: '30px', borderRadius: 10 }} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function MissionBar() {
  const initialMissionData: MissionBarData = {
    num: 0,
    img: 'step0_campfire.png',
  };
  const [progress, setProgress] = React.useState<MissionBarData>(initialMissionData);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress: MissionBarData) => {
        if (prevProgress.num >= 100) {
          return {
            num: 0,
            img: 'step0_campfire.png',
          };
        }
        else if (prevProgress.num >= 80) {
          return {
            num: prevProgress.num + 10,
            img: 'step4_campfire.png',
          };
        } else if (prevProgress.num >= 60) {
          return {
            num: prevProgress.num + 10,
            img: 'step3_campfire.png',
          };
        } else if (prevProgress.num >= 40) {
          return {
            num: prevProgress.num + 10,
            img: 'step2_campfire.png',
          };
        } else if (prevProgress.num >= 20) {
          return {
            num: prevProgress.num + 10,
            img: 'step1_campfire.png',
          };
        } else {
          return {
            num: prevProgress.num + 10,
            img: 'step0_campfire.png',
          };
        }
      });
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <img src={progress.img} alt="" />
      <LinearProgressWithLabel value={progress.num} />
    </Box>
  );
}
