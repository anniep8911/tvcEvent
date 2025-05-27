<script setup>
import Main from './components/Main.vue'
const keyword = {
  "원픽": [
    "#1370ed",
    "",
    "onepick"
  ]
};
</script>

<template>
  <Main
    backgrond="#f8f8f7"
    image="main1.png"
    :keyword="keyword"
    title="잡코리아는 지금 <br> 원픽으로 <br>잡코리아 중"
  />
</template>

<style scoped lang="scss">

</style>
