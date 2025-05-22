
<template>
  <article class="money-box">
    <h3 class="label">현재 남은 원픽 럭키머니</h3>
    <h4 class="amount"><span class="num">{{ money.toLocaleString() }}</span><span>원</span></h4>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const money = ref(0)
// const target = 99741921
const props = defineProps({
    target : {
        type:Number
    }
})

onMounted(() => {
  const duration = 1000 // ms
  const frameRate = 60
  const totalFrames = Math.round((duration / 1000) * frameRate)
  let frame = 0

  const counter = setInterval(() => {
    frame++
    const progress = frame / totalFrames
    money.value = Math.floor(props.target * progress)

    if (frame === totalFrames) {
      clearInterval(counter)
      money.value = props.target
    }
  }, 1000 / frameRate)
})
</script>


<style scoped lang="scss">
  @use '../assets/style/_common.scss' as com ;
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
  
  article{
    display: block;
    border: 3px solid #999;
    background-color: rgba(0,0,0,0.7);
    border-radius: 20px;
    padding: 20px 0;
    max-width: 380px;
    h3{
      text-align: center;
      display: block; 
    }
    h4{
      text-align: center;
      font-family: 'Orbitron';
      color: com.$primary;
      display: flex;
      align-items: baseline;
      justify-content: center;
    }
    span{
        font-size: 20px;
        display: block;
        &.num{
          font-size: 38px;
          line-height: 50px;
          font-weight: 700;
          width: 55%;
        }
    }
  }
</style>
