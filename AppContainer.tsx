import * as React from 'react';
import Timeline from './src/Timeline';


const AppContainer = (props) => {
  return (
    <Timeline 
      title="Arsenal Football Club"
      timelineData={[
        { 
          year: 2002, 
          image: 'https://images.performgroup.com/di/library/goal_uk/de/bb/arsenal-double-2002_1nfe49xrc5rud1mjstb03kfhs4.jpg?t=-384227286&w=940',
          description: 'Arsenal complete the domestic double. Wenger at the height of his powers.'
        },
        { 
          year: 2010, 
          image: 'http://arsenalfcblog.com/wp-content/uploads/2010/12/Arsenal+v+FK+Partizan+UEFA+Champions+League+54ijrR1dpv2l.jpg',
          description: 'Arsenal challenge but fail to win silverware, typical of the immediate post-Emirates era'
        },
        { 
          year: 2015, 
          image: 'https://soccersouls.com/wp-content/uploads/2015/08/24.jpg',
          description: 'Second consecutive FA Cup brings renewed hope'
        },
        { 
          year: 2018, 
          image: 'https://2.bp.blogspot.com/-yQQvb8e0Qxg/WwPgNTs8QXI/AAAAAAABiWU/mSRafMy3TSEkYnd29p5JpeLW4LT1H0EIgCLcBGAs/s738/arsenal-18-19-home-kit-1.jpg',
          description: 'After several years of decline, Wenger steps down as boss.'
        }
      ]}
    />
  )
}

export default AppContainer;
