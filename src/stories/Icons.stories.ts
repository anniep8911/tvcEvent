import Icons from '../components/Icons.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const iconClasses = [
  'cash', 'coin', 'emoji1', 'emoji2', 'emoji3', 'emoji4', 'emoji5', 'emoji6'
];

const meta: Meta<typeof Icons> = {
  title: 'Components/Atoms/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: {
    iconName: { control: { type: 'select' }, options: iconClasses },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  },
}

export default meta;

const stories: Record<string, { args: { iconName: string, size: string } }> = {}
iconClasses.forEach((e) => {
  stories[e] = {
    args: {
      iconName: e,
      size: 'medium'
    }
  }
})


export const cash = stories.cash;
export const coin = stories.coin;
export const emoji1 = stories.emoji1;
export const emoji2 = stories.emoji2;
export const emoji3 = stories.emoji3;
export const emoji4 = stories.emoji4;
export const emoji5 = stories.emoji5;
export const emoji6 = stories.emoji6;