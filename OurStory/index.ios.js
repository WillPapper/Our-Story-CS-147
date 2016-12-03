import { Navigation } from 'react-native-navigation';

import { Home } from './home.ios.js';
import { Map } from './map/MapStanford.js';

// this is where you register all of your app's screens
export function registerScreens() {
  Navigation.registerComponent('OurStory.Home', () => FirstTabScreen);
  Navigation.registerComponent('OurStory.MapStanford', () => MapStanford );
}

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'OurStory.Home', // this is a registered name for a screen
      icon: require('./assets/icons/Home.png'),
      selectedIcon: require('./assets/icons/Home_Active.png'), // iOS only
      title: 'Home'
    },
    {
      label: 'Map',
      screen: 'OurStory.MapStanford',
      icon: require('./assets/icons/Map.png'),
      selectedIcon: require('./assets/icons/Map_Active.png'), // iOS only
      title: 'Map'
    }
  ]
});
