import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
          'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
          'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
          // 'Roboto-SemiBold': require('../../assets/fonts/Roboto-SemiBold.ttf'),
          'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
          'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 2000);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
