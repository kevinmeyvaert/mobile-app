import { Navigation } from 'react-native-navigation';

import configureStore from 'co-epi-core';
import { registerScreens, setupNavigation, showMainScreen } from './ui';

const store = configureStore();

function setupMainUI() {
  registerScreens(store);
}

function bootstrap() {
  Navigation.events().registerAppLaunchedListener(async () => {
    setupNavigation();
    setupMainUI();
    showMainScreen();
  });
}

export default bootstrap;
