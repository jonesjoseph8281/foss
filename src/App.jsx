import React from 'react';
import TimelineComponent from './components/TimelineComponent';
import SmallDeviceTimelineComponent from './components/SmallDeviceTimelineComponent';
import { useMediaQuery } from 'react-responsive';

const MainComponent = () => {
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  console.log('isSmallDevice:', isSmallDevice); 

  return (
    <div>
      <h1>hi</h1>
      {isSmallDevice ? (
        <SmallDeviceTimelineComponent />
      ) : (
        <TimelineComponent />
      )}
    </div>
  );
};

export default MainComponent;
