import MyButton from '../components/Button.vue';

export default {
  title: 'Compoenets/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'large']},
    btnType: { control: { type: 'select' }, options: ['normal', 'sns', 'sharp']},
    backgroundColor: { control: 'color' }, disabled: Boolean
  },

};

export const primary= {
  args: {
    label: '원픽 챌린지 참여',
    disabled:false,
  },
};