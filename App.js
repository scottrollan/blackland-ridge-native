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

// import firebase from 'firebase';

// console.log(firebase.app[0]);
// firebase.initializeApp();
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

export default createAppContainer(navigator);
