import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeView from './Views/welcomeView';
import SearchView from './Views/searchView';
import DetailsView from './Views/deatilsView';



const Stack = createNativeStackNavigator();

const App = ()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeView" component={WelcomeView} options={{headerShown:false}} />
        <Stack.Screen name="SearchView" component={SearchView} options={{headerShown:false}} />
        <Stack.Screen name="DetailsView" component={DetailsView} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
