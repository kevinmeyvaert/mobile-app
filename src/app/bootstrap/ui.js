import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreenSet, defaultOptions } from '../config/screens/registerScreens';
import getMainScreenConfig from '../config/screens/getMainScreenConfig';
import Screens from '../screens';

export const setupNavigation = () => {
  Navigation.setDefaultOptions(defaultOptions);
};

export const registerScreens = store => {
  registerScreenSet(Screens, store, Provider);
};

export const showMainScreen = () => {
  Navigation.setRoot(getMainScreenConfig());
};
