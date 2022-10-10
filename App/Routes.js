import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen, 
  SplashScreen,
  LoginScreen,
  ImmunizationScreen,
  EhacScreen,
  CovidTestScreen
  // RegisterScreen,
  // RegisterSuccessScreen,
  // RegisterErrorScreen
} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/> 
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="ImmunizationScreen" component={ImmunizationScreen} options={{headerShown: false}} />
      <Stack.Screen name="EhacScreen" component={EhacScreen} options={{headerShown: false}} />
      <Stack.Screen name="CovidTestScreen" component={CovidTestScreen} options={{headerShown: false}} />
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} options={{headerShown: false}} />
      <Stack.Screen name="RegisterErrorScreen" component={RegisterErrorScreen} options={{headerShown: false}} /> */} 
    </Stack.Navigator>
  );
};
