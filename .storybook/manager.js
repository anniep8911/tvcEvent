// .storybook/manager.ts

import { addons } from '@storybook/manager-api';
import myTheme from './myTheme';

addons.setConfig({
  theme: myTheme,
});
