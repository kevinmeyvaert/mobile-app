import { AppRegistry } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { name as appName } from '../../../config.json';

function bootstrap() {
  AppRegistry.registerComponent(appName, () => HomeScreen);
}

export default bootstrap;
