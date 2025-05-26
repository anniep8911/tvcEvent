<template>
  <div class="main-wrap" :style="[{background : backgrond}]">
    <main>
      <Typography name="MainTitleText" v-html="title" :class="`${image}`"></Typography>
      <img :src="imgSrc" alt="메인이미지">
    </main>
  </div>
</template>

<script setup lang="ts">
import Typography from './Typography.vue'


const props = defineProps<{
  title:string,
  image:string,
  backgrond:string
}>();

const imgSrc = new URL(`../assets/images/${props.image}`, import.meta.url).href;

</script>

<style scoped lang="scss">
  main{
    width: 80%;
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