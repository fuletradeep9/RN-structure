import React, { useEffect } from 'react';

import Splash from '@app/components/view/Splash';
import { AppStackC } from '@app/constants/navigation';

const AppStackScreen = (props) => {
  useEffect(() => {
    console.log("AppStack splash called");
    setTimeout(() => {
      props.navigation.replace(AppStackC.HOME_SCREEN)
    }, 3000)
  }, []);

  return <Splash />;
};

export default AppStackScreen;
