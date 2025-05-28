
<template>
  <article class="money-box">
    <h3 class="label">현재 남은 원픽 럭키머니</h3>
    <h4 class="amount"><span class="num">{{ money.toLocaleString() }}</span><span>원</span></h4>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const money = ref(0)

const props = defineProps<{
  target:number
}>()

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
    display: flex;
    flex-wrap: wrap;
    border: 3px solid #999;
    background-color: rgba(0,0,0,0.8);
    border-radius: 2rem;
    padding: 2rem 0;
    max-width: 380px;
    width: 100%;
    justify-content: center;
    h3{
      width: 100%;
      text-align: center;
      display: block; 
      color: #fff;
      font-size: 1.6rem;
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
        font-size: 2.2rem;
        display: block;
        &.num{
          font-size: 4rem;
          line-height: 5rem;
          font-weight: 700;
          width: 94.7%;
        }
    }
  }
</style>
