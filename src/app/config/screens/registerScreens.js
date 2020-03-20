import { Navigation } from 'react-native-navigation';

export const registerScreen = screen => {
  Navigation.registerComponent(screen.id, () => screen.component);
};

export const registerScreenWithStore = (screen, store, provider) => {
  Navigation.registerComponentWithRedux(screen.id, () => screen.component, provider, store);
};

export const registerScreenSet = (screenSet, store, provider) => {
  Object.keys(screenSet).map(key =>
    screenSet[key].id
      ? registerScreenWithStore(screenSet[key], store, provider)
      : registerScreenSet(screenSet[key], store, provider),
  );
};
