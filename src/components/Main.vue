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
import {useHighlightedHtml} from '../assets/js/_common'
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

</script>

<style scoped lang="scss">
  main{
    width: 80%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    position: relative;
    h2{
      position: absolute;
      margin: auto;
      top: 0; bottom: 0;
      height: fit-content;
      color: #333;
      left: 0;
    }
    img{
      display: block;
      width: 80%;
    }
  }
</style>