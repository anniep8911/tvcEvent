<script setup>
import Main from './components/Main.vue'
import GNB from './components/GNB.vue';
import Contents from './components/Contents.vue';
import Count from './components/Count.vue';
import List from './components/List.vue';
import Button from './components/Button.vue';
const keyword = {
  "원픽": [
    "#1370ed",
    "",
    "onepick"
  ]
};

const menu = [
  {
    "title": "1억 챌린지",
    "disabled": false
  },
  {
    "title": "comming soon",
    "disabled": true,
    "toastMsg": "곧 이벤트가 시작됩니다!"
  }
];

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

<template>
  <Main
    backgrond="#f8f8f7"
    image="main1.png"
    :keyword="keyword"
    title="잡코리아는 지금 <br> 원픽으로 <br>잡코리아 중"
  />

  <GNB :menu="menu" />

  <Contents
    contentSubtitle="총 1억원의 응원금이 쏟아진다! 매일매일 원픽 럭키머니를 뽑아보세요!"
    contentTitle="잡코리아는 지금 1억 챌린지 중"
  >
    <Count :target="995052" />
  </Contents>


  <Contents contentTitle="100만원 당첨자 릴레이">
    <List artType="money" icon="cash" :person="person" />
  </Contents>

  <Contents contentTitle="당첨자 릴레이">
     <List artType="pay" icon="coin" :person="person" />
  </Contents>

  <Contents contentTitle="1억 챌린지 미션 참여하고 <br> 응모권 받으세요!">
    <Button
      backgroundColor="dkblue"
      btnType="sharp"
      icon="coin"
      label="로그인하고 원픽 럭키머니뽑기"
      size="large"
    />
  </Contents>

</template>


<style scoped lang="scss">
  body{
    background-color: #333;
  }
</style>
