import { Platform, I18nManager } from 'react-native';
import { OptionsModalPresentationStyle } from 'react-native-navigation';

export const defaultOptions = {
  ...Platform.select({
    ios: {
      modalPresentationStyle:
        parseInt(Platform.Version, 10) > 12
          ? OptionsModalPresentationStyle.pageSheet
          : OptionsModalPresentationStyle.fullScreen,
    },
  }),
  statusBar: {
    style: Platform.OS === 'android' ? 'light' : 'dark',
  },
  topBar: {
    noBorder: false,
    elevation: 1,
    title: {
      fontSize: 16,
      alignment: 'center',
    },
    backButton: {
      testID: 'back',
    },
    animate: true,
  },
  layout: {
    orientation: ['portrait'],
    ...Platform.select({
      android: {
        direction: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
    }),
  },
};
