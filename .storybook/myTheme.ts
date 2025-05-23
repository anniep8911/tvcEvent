// .storybook/myTheme.ts

import { create } from '@storybook/theming/create';
const isDev = process.env.NODE_ENV === 'development';

export default create({
    base: 'light',
    brandTitle: '박정아 스토리북',
    brandUrl: './',
    brandImage: isDev ? '/logo.png' : 'https://github.com/anniep8911/tvcEvent/blob/main/public/logo.png',
    colorPrimary: '#A7D5C5', // 메인 컬러
    colorSecondary: '#4cb177', // 액센트 컬러
});
