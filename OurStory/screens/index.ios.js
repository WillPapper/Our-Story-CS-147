import {Navigation} from 'react-native-navigation';

import ListViewHome from './ListViewHome';
import ListViewReaction from './ListViewReaction';
import MapStanford from './MapStanford';
import HomeScreen from './HomeScreen';
import ReactionScreen from './ReactionScreen';
import RecordVideo from './RecordVideo';
import RecordVideoReaction from './RecordReaction';
import ViewVideo from './ViewVideo';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('ourstory.ListViewHome', () => ListViewHome);
  Navigation.registerComponent('ourstory.ListViewReaction', () => ListViewReaction);
  Navigation.registerComponent('ourstory.MapStanford', () => MapStanford);
  Navigation.registerComponent('ourstory.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ourstory.ReactionScreen', () => ReactionScreen);
  Navigation.registerComponent('ourstory.RecordVideo', () => RecordVideo);
  Navigation.registerComponent('ourstory.RecordVideoReaction', () => RecordVideoReaction);
  Navigation.registerComponent('ourstory.ViewVideo', () => ViewVideo);
}
