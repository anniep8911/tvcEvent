// .storybook/myTheme.ts

import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    brandTitle: '박정아 스토리북',
    brandUrl: 'https://anniep8911.github.io/',
    brandImage: '/logo.png', // public 폴더에 있는 로고
    colorPrimary: '#A7D5C5', // 메인 컬러
    colorSecondary: '#4cb177', // 액센트 컬러
});
