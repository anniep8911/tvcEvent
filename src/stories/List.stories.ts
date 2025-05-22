import List from '../components/List.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof List>

export const moneyList: Story = {
  args: {
    artType: 'money',
    icon: 'cash',
    person: [
      {
        name: '김*영',
      },
      {
        name: '박*진',
      },
      {
        name: '카이*소',
      },
      {
        name: '세레나*메즈',
      },
      {
        name: '감자*끼',
      },
      {
        name: '도*리',
      },
      {
        name: '상*상큼',
      },
      {
        name: '파*',
      },
      {
        name: '파*이',
      },
    ]
  }
}
export const payList: Story = {
  args: {
    artType: 'pay',
    icon: 'coin',
    person: [
      {
        name: '김*영',
        time: '2분'
      },
      {
        name: '박*진',
        time: '2분'
      },
      {
        name: '카이*소',
        time: '2분'
      },
      {
        name: '세레나*메즈',
        time: '2분'
      },
      {
        name: '감자*끼',
        time: '2분'
      },
      {
        name: '도*리',
        time: '2분'
      },
      {
        name: '상*상큼',
        time: '2분'
      },
      {
        name: '파*',
        time: '2분'
      },
      {
        name: '파*이',
        time: '2분'
      },
    ]
  }
}