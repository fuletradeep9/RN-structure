//
// note:
// 	key: UPPERCASE with undescore (_) for separation. add _STACK for stack and _SCREEN for screen
// 	value: PascalCase. add Stack for stack and Screen for screen
//

//
// used to declare stacks in navigation/index.ts
//
export const NavigationStackC = {
  AUTH_STACK: 'AuthStack',
  APP_STACK: 'AppStack',
};

//
// used to declare stacks in navigation/AppStack.ts
//
export const AppStackC = {
  APP_STACK_SCREEN: 'AppStackScreen',
  HOME_SCREEN: 'HomeScreen',
  FOOD_INSIGHT: 'FoodInsight'
};

export const AuthStackC = {
  AUTH_STACK_SCREEN: 'AuthStackScreen',
  LOGIN_AUTH_SCREEN: 'LoginScreen',
};
