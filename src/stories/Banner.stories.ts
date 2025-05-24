import Banner from '../components/Banner.vue';
import type { Meta } from '@storybook/vue3';


const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    char: { control: { type: 'select' }, options: ['char1', 'char2', 'char3'] },
    edge: { control: { type: 'select' }, options: ['left', 'middle', 'right'] },
    backgrond: { control: { type: 'color' } }
  },
}

export default meta

export const basic = {
  args: {
    title: '원픽 바로가기',
    subtitle: '커리어 pick하는',
    char: 'char1',
    keyword: { "원픽": ["blue", "bold"] },
    backgrond: 'linear-gradient(-90deg, #fff, skyblue)'
  },
};
export const left = {
  args: {
    title: '원픽 바로가기',
    subtitle: '커리어 pick하는',
    char: 'char1',
    edge: 'left',
    keyword: { "원픽": ["blue", "bold"] },
    backgrond: 'linear-gradient(-90deg, #fff, skyblue)'
  },
};
export const right = {
  args: {
    title: '원픽 바로가기',
    subtitle: '커리어 pick하는',
    char: 'char1',
    edge: 'right',
    keyword: { "원픽": ["blue", "bold"] },
    backgrond: 'linear-gradient(-90deg, #fff, skyblue)'
  },
};
