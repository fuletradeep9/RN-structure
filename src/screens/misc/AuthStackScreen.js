import React, { FC, useEffect } from 'react';

import { AuthStackC } from '@app/constants/navigation';
import Splash from '@app/components/view/Splash';

const AuthStackScreen = (props) => {
  useEffect(() => {
    console.log("AuthStack splash called");
    setTimeout(() => {
      props.navigation.replace(AuthStackC.LOGIN_AUTH_SCREEN)
    }, 3000)
  }, []);

  return <Splash />;
};

export default AuthStackScreen;
