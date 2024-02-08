import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './src/screens/Home';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './src/screens/Gallery';
import AttractionsDetails from './src/screens/AttractionsDetails';
const Stack = createStackNavigator();
const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};
const App = () => {
  return;
  <NavigationContainer theme={appTheme}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AttractionsDetails" component={AttractionsDetails} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default App;
