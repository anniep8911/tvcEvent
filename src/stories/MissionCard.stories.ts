import MissionCard from '../components/MissionCard.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof MissionCard> = {
  title: 'Components/Article/MussionCard',
  component: MissionCard,
  tags: ['autodocs'],
}

export default meta;


export const large = {
  args: {
    msg: `잘나가는 직장인들의 비밀, '잡코리아'광고를 15초 이상 시청하면 매일 1개의 응모권이 생겨요!`,
    num: 2,
  },
};

export const medium = {
  args: {
    msg: `원픽을 방문하면 매일 1개의 응모권이 생겨요`,
    num: 5,
  },
};