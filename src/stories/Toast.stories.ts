import Toast from '../components/Toast.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof Toast> = {
  title: 'components/Toast',
  component: Toast,
  tags: ['autodocs'],
}

export default meta;

export const MainFirst = {
  args: {
    msg: '원픽 챌린지에 참여하셨습니다!',
    active: true
  }
}
