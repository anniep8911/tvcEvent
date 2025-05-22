import Count from '../components/Count.vue';
import type { Meta } from '@storybook/vue3';



const meta: Meta<typeof Count> = {
  title: 'Components/Count',
  component: Count,
  tags: ['autodocs'],
  argTypes: {
    target: Number
  },
}

export default meta

export const money = {
  args: {
    target: 995052
  },
};

