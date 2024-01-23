import { AuthStackC } from "@app/constants/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackScreen from "@app/screens/misc/AuthStackScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={AuthStackC.AUTH_STACK_SCREEN}>
      <Stack.Screen
        name={AuthStackC.AUTH_STACK_SCREEN}
        component={AuthStackScreen}
        options={() => ({
          title: AuthStackC.AUTH_STACK_SCREEN,
          headerShown: false,
        })}
      />

      {/* <Stack.Screen
        name={AuthStackC.LOGIN_AUTH_SCREEN}
        component={AuthLoginScreen}
        options={() => ({
          title: AuthStackC.LOGIN_AUTH_SCREEN,
          headerShown: false,
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
