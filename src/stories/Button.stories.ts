import MyButton from '../components/Button.vue';
import type { Meta } from '@storybook/vue3';


const meta: Meta<typeof MyButton> = {
  title: 'Components/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'large'] },
    btnType: { control: { type: 'select' }, options: ['normal', 'sns', 'sharp'] },
    backgroundColor: { control: { type: 'select' }, options: ['primary', 'green', 'pink', 'gradient', 'dkblue'] },
    disabled: Boolean
  },
}

export default meta

export const primary = {
  args: {
    label: '원픽 챌린지 참여',
    disabled: false,
  },
};
export const green = {
  args: {
    label: '원픽 챌린지 참여',
    backgroundColor: 'green'
  },
};
export const pink = {
  args: {
    label: '원픽 챌린지 참여',
    backgroundColor: 'pink'
  },
};
export const gradient = {
  args: {
    label: '원픽 챌린지 참여',
    backgroundColor: 'gradient'
  },
};
export const login = {
  args: {
    label: '로그인하고 원픽 럭키머니뽑기',
    size: 'large',
    btnType: 'sharp',
    icon: 'coin',
    backgroundColor: 'dkblue'
  },
};
export const disabled = {
  args: {
    label: '로그인하고 원픽 럭키머니뽑기',
    size: 'large',
    btnType: 'sharp',
    icon: 'coin',
    backgroundColor: 'dkblue'
  },
};