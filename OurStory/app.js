import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

hiddenNavigatorStyleDefinition = {
  //drawUnderNavBar: true,
  //navBarTranslucent: true
  navBarHidden: true,
};

navigatorStyleDefinition = {
  //drawUnderNavBar: true,
  //navBarTranslucent: true
  navBarBackgroundColor: '#19202b',
};

viewerNavigatorStyleDefinition = {
  navBarTextColor: '#4ECDC4',
  navBarBackgroundColor: '#19202b',
  navBarButtonColor: '#4ECDC4',
};

// start the app
console.log("LOOGGING NAVIGATION RESULTS")
console.log(Navigation);
Navigation.startTabBasedApp({
  tabs: [
    {
      //label: 'Home',
      screen: 'ourstory.HomeScreen', // this is a registered name for a screen
      icon: require('./assets/icons/Home.png'),
      selectedIcon: require('./assets/icons/Home_Active.png'), // iOS only
      title: 'Home',
      navigatorStyle: hiddenNavigatorStyleDefinition},
    {
      //label: 'Record',
      screen: 'ourstory.RecordVideo',
      icon: require('./assets/icons/Record_Bottom.png'),
      selectedIcon: require('./assets/icons/Record_Bottom_Active.png'), // iOS only
      title: 'Record',
      navigatorStyle: navigatorStyleDefinition,
    },
    {
      //label: 'Map',
      screen: 'ourstory.MapStanford',
      icon: require('./assets/icons/Map.png'),
      selectedIcon: require('./assets/icons/Map_Active.png'), // iOS only
      title: 'Map',
      navigatorStyle: hiddenNavigatorStyleDefinition,
    },
  ],

  tabsStyle: {
    tabBarBackgroundColor: '#293240',
    tabBarButtonColor: '#e1fbfc',
    tabBarSelectedButtonColor: '#4ecec5'
  },


});
