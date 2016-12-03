import { Navigation } from 'react-native-navigation';

import { HomeScreen } from './HomeScreen.js';
import { MapStanford } from './map/MapStanford.js';

// this is where you register all of your app's screens
export function registerScreens() {
  Navigation.registerComponent('OurStory.Home', () => HomeScreen);
  Navigation.registerComponent('OurStory.MapStanford', () => MapStanford );
  console.log("Navigation components registered")
}

registerScreens();

static navigatorStyleDefinition = {
  drawUnderNavBar: true,
  navBarTranslucent: true
};

// start the app
console.log("LOOGGING NAVIGATION RESULTS")
console.log(Navigation);
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'OurStory.Home', // this is a registered name for a screen
      icon: require('./assets/icons/Home.png'),
      selectedIcon: require('./assets/icons/Home_Active.png'), // iOS only
      title: 'Home',
      navigatorStyle: navigatorStyleDefinition},
    {
      label: 'Map',
      screen: 'OurStory.MapStanford',
      icon: require('./assets/icons/Map.png'),
      selectedIcon: require('./assets/icons/Map_Active.png'), // iOS only
      title: 'Map',
      navigatorStyle: navigatorStyleDefinition,
    }
  ]
});
