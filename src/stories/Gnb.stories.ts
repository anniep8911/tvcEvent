import GNB from '../components/GNB.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof GNB> = {
  title: 'Page/GNB',
  component: GNB,
  tags: ['autodocs'],
}

export default meta;

export const gnb = {
  args: {
    menu: [{
      title: '1억 챌린지',
      disabled: false
    }, {
      title: 'comming soon',
      disabled: true,
      toastMsg: '곧 이벤트가 시작됩니다!'
    }],
  }
}
