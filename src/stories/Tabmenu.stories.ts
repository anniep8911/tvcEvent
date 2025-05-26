import Tabmenu from '../components/TabMenu.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof Tabmenu> = {
  title: 'Components/TabMenu',
  component: Tabmenu,
  tags: ['autodocs'],
}

export default meta;

export const tab = {
  args: {
    menu: '1억 챌린지',
  }
}
export const tabDisabled = {
  args: {
    menu: 'Comming soon',
    disabled: true
  }
}