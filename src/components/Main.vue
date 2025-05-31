<template>
  <div class="main-wrap" :style="[{background : backgrond}]">
    <main>
      <Typography name="MainTitleText" v-html="highlightedHtml" :class="`${image}`"/>
      <img :src="imgSrc" alt="메인이미지">
    </main>
  </div>
</template>

<script setup lang="ts">
import Typography from './Typography.vue'
import { computed ,watch } from 'vue'
import {useHighlightedHtml, useIsMobile} from '../assets/js/_common'
import '../assets/style/icons.scss';

const props = defineProps<{
  title:string,
  image:string,
  backgrond:string,
  icon?:string,
  keyword?:Record<string,string[]>
}>();

const imgSrc = new URL(`../assets/images/${props.image}`, import.meta.url).href;
const highlightedHtml = useHighlightedHtml(props.title, props.keyword ?? {});

// 예시 keyword 분기 처리


window.addEventListener('resize',()=>{
  const isMobile = useIsMobile()
  console.log(isMobile);
})

</script>

<style scoped lang="scss">
@use '../assets/style/common' as com;
  main{
    display: flex;
    justify-content: flex-end;
    position: relative;
    background-color: #f8f7f8;
    h2{
      position: absolute;
      margin: auto;
      top: 0; bottom: 0;
      left: 5rem;
      height: fit-content;
      color: #333;
    }
    img{
      display: block;
      width: 80%;
    }
      @include com.mob{
      display: block;
      h2{
        position: relative;
        padding: 2rem;
        left: 0;
        z-index: 2;
        border: 3rem solid #136fee; 
      }
      img{
        width: 100%;
      }
    }
  }
</style>