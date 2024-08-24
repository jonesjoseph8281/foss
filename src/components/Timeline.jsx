import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot, 
  TimelineOppositeContent 
} from '@mui/lab';
import { Typography } from '@mui/material';

const EventTimeline = () => {
  const events = [
    {
      time: '10:00 AM',
      title: 'Opening Ceremony',
      description: 'Welcome and introduction to the conference.',
    },
    {
      time: '11:00 AM',
      title: 'Keynote Speech',
      description: 'Presentation by a top industry expert on major trends.',
    },
    {
      time: '01:00 PM',
      title: 'Tech Session 1',
      description: 'Detailed look at an important technology or topic.',
    },
    {
      time: '02:00 PM',
      title: 'Networking Lunch',
      description: 'Lunch break to connect and network with other attendees.',
    },
    {
      time: '03:00 PM',
      title: 'Panel Discussion',
      description: 'Discussion with experts on a relevant topic, including a Q&A.',
    },
    {
      time: '04:00 PM',
      title: 'Tech Session 2',
      description: 'Another in-depth session on a different key topic.',
    },
    {
      time: '05:00 PM',
      title: 'Product Demonstrations',
      description: 'Showcase of the latest technologies and products.',
    },
    {
      time: '06:00 PM',
      title: 'Closing Remarks',
      description: 'Summary of the day and thanks to attendees and speakers.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#121B44' }} className="py-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <Typography variant="h3" className="text-center text-[#CED1D3] mb-10 text-2xl md:text-3xl">
          Timeline
        </Typography>
        <Timeline position="alternate">
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography
                  variant="h5"
                  className="text-[#CED1D3] font-bold text-xl sm:text-2xl md:text-3xl pt-8"
                >
                  {event.time}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator className="flex items-center">
                <TimelineDot style={{ backgroundColor: '#F7A01E', width: '75px', height: '75px' }} />
                {index !== events.length - 1 && (
                  <TimelineConnector style={{ backgroundColor: '#F7A01E', height: '80px', width: '7px' }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <div 
                  style={{ 
                    backgroundColor: '#172554'
                  }} 
                  className="text-[#121B4A] text-left rounded-3xl sm:rounded-xl md:rounded-3xl p-4 shadow-md mt-2 w-full max-w-md mx-auto"
                >
                  <Typography variant="h6" component="span" className="font-bold text-left text-[#F7A01E]  sm:pl-0">
                    {event.title}
                  </Typography>
                  <Typography className="text-left pl-4 sm:pl-0 text-[#CED1D3]">{event.description}</Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default EventTimeline;
