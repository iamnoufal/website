import timelineData from '@/data/timeline';
import TimelineIcon from '@mui/icons-material/Timeline';
import { 
  useEffect, 
  useState 
} from "react";
import { 
  Box,
  Backdrop, 
  SpeedDial, 
  SpeedDialAction, 
  useScrollTrigger 
} from "@mui/material";

const TimelineSpeedDialComponent = () => {
  const [open, setOpen] = useState(false);
  const [showSD, setShowSD] = useState(false);
  const handleTimelineOpen = () => setOpen(true);
  const handleTimelineClose = (a) => {
    setOpen(false);
    window.scrollTo(0, document.getElementById(a).offsetTop);
  }
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  })
  const handleSDOpen = () => setShowSD(true)
  const handleSDClose = () => setShowSD(false)
  useEffect(() => scrollTrigger ? handleSDOpen() : handleSDClose())
  return (
    <Box>
      {showSD && (<Box sx={{ height: '100vh', transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 0, right: 0, zIndex: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="Timeline Speeddail"
          sx={{ position: 'absolute', bottom: 16, right: 16, color: 'white' }}
          icon={<TimelineIcon />}
          onClose={() => {setOpen(false)}}
          onOpen={handleTimelineOpen}
          open={open}
        >
          {timelineData.map((list) => <SpeedDialAction key={list.name} icon={list.icon} tooltipTitle={list.name} tooltipOpen onClick={() => handleTimelineClose(`${list.param}`)} />)}
        </SpeedDial>
      </Box>)}
    </Box>
  )
}

export default TimelineSpeedDialComponent;