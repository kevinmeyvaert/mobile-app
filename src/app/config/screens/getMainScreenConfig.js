import { HOME } from '../../screens/home/ids';
import { defaultOptions } from '.';

const getMainScreenConfig = () => ({
  root: {
    stack: {
      children: [
        {
          component: {
            name: HOME,
          },
        },
      ],
      options: defaultOptions,
    },
  },
});

export default getMainScreenConfig;
