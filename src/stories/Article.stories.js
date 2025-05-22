import Article from '../components/Article.vue';

export default {
  title: 'Compoenets/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['cash', 'pay'] },
    light: Boolean
  },
};

export const primary= {
  args: {
    name: '김*영',
    msg: `번째 100만원 원픽,`,
    rank: 1,
    icon : 'cash',
    light:false,
    // time:'2분',
  },
};
