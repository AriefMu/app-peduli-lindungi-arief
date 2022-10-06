import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen, 
  SplashScreen, 
  LoginScreen,
  RegisterScreen,
  RegisterSuccessScreen,
  RegisterErrorScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterErrorScreen" component={RegisterErrorScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
