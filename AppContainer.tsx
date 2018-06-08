import * as React from 'react';
import Timeline from './src/Timeline';


const AppContainer = (props) => {
  return (
    <Timeline 
      timespan={[1990, 2018]}
    />
  )
}

export default AppContainer;
