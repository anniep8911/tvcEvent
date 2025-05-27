import Contents from '../components/Contents.vue';
import Count from '../components/Count.vue';
import List from '../components/List.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

const meta: Meta<typeof Contents> = {
  title: 'Page/Content',
  component: Contents,
  tags: ['autodocs'],
};
export default meta;

// ---------- 첫 번째 Story ----------
export const Content1: StoryFn = (args) => ({
  components: { Contents, Count },
  setup() {
    return { args };
  },
  template: `
    <Contents v-bind="args">
      <Count :target="995052" />
    </Contents>
  `,
});

Content1.args = {
  contentTitle: '잡코리아는 지금 1억 챌린지 중',
  contentSubtitle: '총 1억원의 응원금이 쏟아진다! 매일매일 원픽 럭키머니를 뽑아보세요!',
};

// 두번째 스토리!
export const Content2: StoryFn = (args) => ({
  components: { Contents, List },
  setup() {
    const person = [
      { name: '김*영' },
      { name: '박*진' },
      { name: '카이*소' },
      { name: '세레나*메즈' },
      { name: '감자*끼' },
      { name: '도*리' },
      { name: '상*상큼' },
      { name: '파*' },
      { name: '파*이' },
    ];
    return { args, person };
  },
  template: `
    <Contents v-bind="args">
       <List artType="money" icon="cash" :person="person" />
    </Contents>
  `,
});

Content2.args = {
  contentTitle: '100만원 당첨자 릴레이',
};

// 코드 보여주기컨텐츠 2
Content2.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
const person = [
      { name: '김*영' },
      { name: '박*진' },
      { name: '카이*소' },
      { name: '세레나*메즈' },
      { name: '감자*끼' },
      { name: '도*리' },
      { name: '상*상큼' },
      { name: '파*' },
      { name: '파*이' },
    ];
</script>

<Contents contentTitle="100만원 당첨자 릴레이">
  <List artType="money" icon="cash" :person="person" />
</Contents>
      `.trim(),
      language: 'html', // 보여지는 코드 타입 (html or vue)
    },
  },
};



// 세번째 스토리
export const Content3: StoryFn = (args) => ({
  components: { Contents, List },
  setup() {
    const person = [
      {
        "name": "김*영",
        "time": "2분"
      },
      {
        "name": "박*진",
        "time": "2분"
      },
      {
        "name": "카이*소",
        "time": "2분"
      },
      {
        "name": "세레나*메즈",
        "time": "2분"
      },
      {
        "name": "감자*끼",
        "time": "2분"
      },
      {
        "name": "도*리",
        "time": "2분"
      },
      {
        "name": "상*상큼",
        "time": "2분"
      },
      {
        "name": "파*",
        "time": "2분"
      },
      {
        "name": "파*이",
        "time": "2분"
      }
    ];
    return { args, person };
  },
  template: `
    <Contents v-bind="args">
        <List artType="pay" icon="coin" :person="person" />
    </Contents>
  `,
});

Content3.args = {
  contentTitle: '당첨자 릴레이',
};


// 코드 보여주기컨텐츠 2
Content3.parameters = {
  docs: {
    source: {
      code: `
<script lang="ts" setup>
const person = [
      {
        "name": "김*영",
        "time": "2분"
      },
      {
        "name": "박*진",
        "time": "2분"
      },
      {
        "name": "카이*소",
        "time": "2분"
      },
      {
        "name": "세레나*메즈",
        "time": "2분"
      },
      {
        "name": "감자*끼",
        "time": "2분"
      },
      {
        "name": "도*리",
        "time": "2분"
      },
      {
        "name": "상*상큼",
        "time": "2분"
      },
      {
        "name": "파*",
        "time": "2분"
      },
      {
        "name": "파*이",
        "time": "2분"
      }
    ];
</script>

<Contents contentTitle="100만원 당첨자 릴레이">
  <List artType="pay" icon="coin" :person="person" />
</Contents>
      `.trim(),
      language: 'html', // 보여지는 코드 타입 (html or vue)
    },
  },
};


