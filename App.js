import React, { useState, createContext } from 'react';
import useAuth from './src/hooks/useAuth';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MessageScreen from './src/screens/MessageScreen';
import BusinessScreen from './src/screens/BusinessScreen';
import DirectoryScreen from './src/screens/DirectoryScreen';
import KidsScreen from './src/screens/KidsScreen';
import PetsScreen from './src/screens/PetsScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import PayScreen from './src/screens/PayScreen';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './src/redux/reducers';
// import thunk from 'redux-thunk';

import Constants from 'expo-constants';
import firebase from 'firebase';

// const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}
// Icons: github.com/expo/vector-icons

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Message: MessageScreen,
    Business: BusinessScreen,
    Directory: DirectoryScreen,
    Kids: KidsScreen,
    Pets: PetsScreen,
    Photo: PhotoScreen,
    Pay: PayScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Blackland Ridge',
    },
  }
);

const AppContainer = createAppContainer(navigator);
export const UserContext = createContext();

export default AppContainer = () => {
  // const thisUser = useAuth();

  return (
    <UserContext.Provider value={thisUser}>
      <AppContainer />
    </UserContext.Provider>
  );
};
