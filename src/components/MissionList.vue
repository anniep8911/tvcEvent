<template>
  <div class="art-wrap">
    <MissionCard
      :keyword="{ '잡코리아 광고를 15초 이상 시청하면 <br>': ['black', 'bold'] }"
      msg="잘나가는 직장인들의 비밀, <br> 잡코리아 광고를 15초 이상 시청하면 <br> 매일 1개의 응모권이 생겨요"
      btnLabel= "광고 시청하고 응모권 받기"
      :num="2"
      size='large'
      :bgcolor="bgcolor"
    />
    <MissionCard
      size='medium'
      bgcolor="green"
      :keyword="{ '원픽을 방문하면': ['black', 'bold'] }"
      msg="원픽을 방문하면 <br> 매일 1개의 응모권이 생겨요"
      btnLabel= "원픽 방문 하기"
      :num="5"
    />
    <MissionCard
      size='medium'
      :keyword="{ '친구에게 챌린지를 공유하면': ['black', 'bold'] }"
      msg="친구에게 챌린지를 공유하면 <br> 매일 1개의 응모권이 생겨요"
      btnLabel= "원픽 방문 하기"
      :num="2"
    />
    <MissionCard
      size='medium'
      bgcolor="pink"
      :keyword="{ '이력서 등록시': ['black', 'bold'] }"
      msg="이력서 등록시<br> 3개의 응모권이 생겨요"
      btnLabel= "이력서 등록"
      :num="1"
    />
    <MissionCard
      size='medium'
      :keyword="{ '서비스, 이벤트 알림을 설정하면': ['black', 'bold'] }"
      msg="서비스, 이벤트 알림을 설정하면 <br> 2개의 응모권이 생겨요"
      btnLabel= "응모권 받기"
      disabled
      :num="2"
    />
  </div>
</template>

<script setup lang="ts">
import MissionCard from './Article/MissionCard.vue';

const props = defineProps<{
  keyword?:Record<string,string[]>
  num : number,
  msg:string
  size:string
  btnLabel:string
  bgcolor?:string
}>()

</script>

<style scoped lang="scss">
  .art-wrap{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    max-width: 1080px;
    margin: 0 auto;
    border: 1px solid #efefef;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    border-radius: 20px;
  }
</style>
