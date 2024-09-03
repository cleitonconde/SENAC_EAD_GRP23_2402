import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import GameListScreen from './screens/GameListScreen.js';
import GameDetailScreen from './screens/GameDetailScreen.js';
import SellGameScreen from './screens/SellGameScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';

// Definindo os tipos das rotas do Stack Navigator
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  GameList: undefined;
  GameDetail: undefined;
  SellGame: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameList" component={GameListScreen} />
        <Stack.Screen name="GameDetail" component={GameDetailScreen} />
        <Stack.Screen name="SellGame" component={SellGameScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
