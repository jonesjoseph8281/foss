import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import { Typography } from '@mui/material';
import { events } from './TimelineComponent'; 

const SmallDeviceTimelineComponent = () => {
  return (
    <div style={{ backgroundColor: '#121B44' }} className="py-4 min-h-screen">
      <div className="max-w-sm mx-auto px-4">
        <Typography variant="h4" className="text-center text-[#CED1D3] mb-4 text-lg"> 
          Timeline
        </Typography>
        <Timeline 
          position="right" 
          sx={{
            '& .MuiTimelineItem-root::before': {
              display: 'none', 
            },
            '& .MuiTimelineItem-root': {
              flexDirection: 'row', 
            },
          }}
        >
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator className="flex items-center">
                <TimelineDot style={{ backgroundColor: '#F7A01E', width: '30px', height: '30px' }} /> 
                {index !== events.length - 1 && (
                  <TimelineConnector style={{ backgroundColor: '#F7A01E', height: '40px', width: '2px' }} /> 
                )}
              </TimelineSeparator>
              <TimelineContent className="pt-2">
                <div 
                  style={{ backgroundColor: '#172554' }}
                  className="text-[#121B4A] text-left rounded-3xl p-4 shadow-md mt-2 w-full max-w-sm mx-auto" 
                >
                  <Typography variant="h6" component="span" className="font-bold text-left text-[#F7A01E] ">
                    {event.title}
                  </Typography>
                  <Typography className="text-left text-[#CED1D3] text-xs sm:text-xxs">
                    {event.description}
                  </Typography>
                  <Typography
                    variant="h7"
                    className="text-[#F7A01E] text-sm sm:text-sm pt-2"
                  >
                    {event.time}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default SmallDeviceTimelineComponent;
