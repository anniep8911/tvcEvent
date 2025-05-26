import Main from '../components/Main.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  tags: ['autodocs'],
}

export default meta;

export const MainFirst = {
  args: {
    title: '잡코리아는 지금 <br> <Icons iconName="onepick" size="medium" />원픽으로 <br> 잡코리아 중',
    image: 'main1.png',
    backgrond: '#f8f8f7'
  }
}
