import Article from '../components/Article.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof Article> = {
  title: 'Components/Article/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    artType: { control: { type: 'select' }, options: ['cash', 'pay'] },
    light: Boolean
  },
}

export default meta;


export const money = {
  args: {
    name: '김*영',
    rank: 1,
    icon: 'cash',
    light: false,
    artType: "money",
  },
};
export const pay = {
  args: {
    name: '김*영',
    rank: 1,
    icon: 'emoji1',
    light: false,
    time: '2분',
    artType: "pay",
  },
};
export const Highlight = {
  args: {
    name: '김*영',
    rank: 1,
    icon: 'emoji1',
    light: true,
    time: '2분',
    artType: "pay",
  },
};
