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
        time: '10:00 AM, August 25th',
        title: 'Opening Ceremony',
        description: 'Welcome and introduction to the conference.',
      },
      {
        time: '11:00 AM, August 25th',
        title: 'Keynote Speech',
        description: 'Presentation by a top industry expert on major trends.',
      },
      {
        time: '01:00 PM, August 25th',
        title: 'Technical Session 1',
        description: 'Detailed look at an important technology or topic.',
      },
      {
        time: '02:00 PM, August 25th',
        title: 'Networking Lunch',
        description: 'Lunch break to connect and network with other attendees.',
      },
      {
        time: '03:00 PM, August 25th',
        title: 'Panel Discussion',
        description: 'Discussion with experts on a relevant topic,including a Q&A.',
      },
      {
        time: '04:00 PM, August 25th',
        title: 'Technical Session 2',
        description: 'Another in-depth session on a different key topic.',
      },
      {
        time: '05:00 PM, August 25th',
        title: 'Product Demonstrations',
        description: 'Showcase of the latest technologies and products.',
      },
      {
        time: '06:00 PM, August 25th',
        title: 'Closing Remarks',
        description: 'Summary of the day and thanks to attendees and speakers.',
      },
    
  ];
  return (
    <div className="max-w-4xl mx-auto my-10 p-4">
      <Typography variant="h2" className="text-center mb-8 text-blue-950">
        Timeline
      </Typography>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary" className="text-gray-500">
                {event.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot 
                style={{ width: '2rem', height: '2rem', backgroundColor: 'darkblue', color: 'white' }} 
              />
              {index !== events.length - 1 && <TimelineConnector className="timeline-connector" />}
            </TimelineSeparator>
            <TimelineContent className="bg-white border border-gray-300 rounded-3xl p-4 shadow-md mt-10">
              <Typography variant="h6" component="span" className="text-lg font-semibold text-blue-950">
                {event.title}
              </Typography>
              <Typography className="text-gray-700">{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default EventTimeline;

  

