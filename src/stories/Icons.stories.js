import Icons from '../components/Icons.vue';
const iconClasses = [
  'cash', 'coin', 'emoji1', 'emoji2', 'emoji3', 'emoji4', 'emoji5', 'emoji6'
];

const stories={};
iconClasses.forEach((e)=>{
  stories[e] = {
    args: {
      class : e,
      size: 'medium'
    }
  }
})

export default {
  title: 'Compoenets/Atoms/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: {
    class: { control: { type: 'select' }, options: iconClasses },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  },
};

export const cash = stories.cash;
export const coin = stories.coin;
export const emoji1 = stories.emoji1;
export const emoji2 = stories.emoji2;
export const emoji3 = stories.emoji3;
export const emoji4 = stories.emoji4;
export const emoji5 = stories.emoji5;
export const emoji6 = stories.emoji6;