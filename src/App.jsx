import {TimelineComponent} from './components/TimelineComponent';
import SmallDeviceTimelineComponent from './components/SmallDeviceTimelineComponent';
import { useMediaQuery } from 'react-responsive';

const MainComponent = () => {
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  console.log('isSmallDevice:', isSmallDevice); 

  return (
    <div>
      {isSmallDevice ? (
        <SmallDeviceTimelineComponent />
      ) : (
        <TimelineComponent />
      )}
    </div>
  );
};

export default MainComponent;