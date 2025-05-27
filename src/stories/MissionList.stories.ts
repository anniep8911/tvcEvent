import MissionList from '../components/MissionList.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof MissionList> = {
  title: 'Components/MissionList',
  component: MissionList,
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof MissionList>

export const payList: Story = {
  args: {

  }
}