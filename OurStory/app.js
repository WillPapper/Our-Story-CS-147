import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

navigatorStyleDefinition = {
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
      screen: 'ourstory.HomeScreen', // this is a registered name for a screen
      icon: require('./assets/icons/Home.png'),
      selectedIcon: require('./assets/icons/Home_Active.png'), // iOS only
      title: 'Home',
      navigatorStyle: navigatorStyleDefinition},
    {
      label: 'Map',
      screen: 'ourstory.MapStanford',
      icon: require('./assets/icons/Map.png'),
      selectedIcon: require('./assets/icons/Map_Active.png'), // iOS only
      title: 'Map',
      navigatorStyle: navigatorStyleDefinition,
    },
    {
      label: 'Record',
      screen: 'ourstory.Record',
      icon: require('./assets/icons/Map.png'),
      selectedIcon: require('./assets/icons/Map_Active.png'), // iOS only
      title: 'Record',
      navigatorStyle: navigatorStyleDefinition,
    },
  ]
});
