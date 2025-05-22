import MyButton from '../components/Button.vue';

export default {
  title: 'Compoenets/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'large']},
    btnType: { control: { type: 'select' }, options: ['normal', 'sns', 'sharp']},
    backgroundColor: { control:{ type: 'select' }, options: ['primary', 'green', 'pink','gradient','dkblue']}
    
    , disabled: Boolean
  },

};

export const primary= {
  args: {
    label: '원픽 챌린지 참여',
    disabled:false,
  },
};
export const green= {
  args: {
    label: '원픽 챌린지 참여',
    disabled:false,
    backgroundColor:'green'
  },
};
export const pink= {
  args: {
    label: '원픽 챌린지 참여',
    disabled:false,
    backgroundColor:'pink'
  },
};
export const gradient= {
  args: {
    label: '원픽 챌린지 참여',
    disabled:false,
    backgroundColor:'gradient'
  },
};
export const login= {
  args: {
    label: '로그인하고 원픽 럭키머니뽑기',
    size:'large',
    btnType:'sharp',
    disabled:false,
    icon : 'coin',
    backgroundColor:'dkblue'
  },
};