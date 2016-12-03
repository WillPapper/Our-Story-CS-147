import {Navigation} from 'react-native-navigation';

import ListViewHome from './ListViewHome';
import MapStanford from './MapStanford';
import HomeScreen from './HomeScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('ourstory.ListViewHome', () => ListViewHome);
  Navigation.registerComponent('ourstory.MapStanford', () => MapStanford);
  Navigation.registerComponent('ourstory.HomeScreen', () => HomeScreen);
}
