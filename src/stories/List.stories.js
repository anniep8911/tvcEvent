import Article from '../components/Article.vue';

export default {
  title: 'Compoenets/List',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['cash', 'pay'] },
    light: Boolean
  },
};

export const money= {
  args: {
    name: '김*영',
    rank: 1,
    icon : 'cash',
    light:false,
  },
};
export const pay= {
  args: {
    name: '김*영',
    rank: 1,
    icon : 'emoji1',
    light:false,
    time:'2분',
  },
};
export const HightLight= {
  args: {
    name: '김*영',
    rank: 1,
    icon : 'emoji1',
    light:true,
    time:'2분',
  },
};
