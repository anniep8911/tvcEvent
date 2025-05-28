<template>
  <div class="art-wrap" 
      :class="{
          'top': scrollPosition === 'top',
          'middle': scrollPosition === 'middle',
          'bottom': scrollPosition === 'bottom'
        }">
    <div class="art-group"  ref="scrollBox" @scroll="handleScroll" >
      <Article
        v-for="(item, index) in person"
        :key="index"
        :name="item.name"
        :icon="icon"
        :artType = "artType"
        :rank="person.length - index"
        :light="person.length - index === person.length"
        :time="artType === 'pay' ? item.time : undefined"
      />
    </div>
  </div> 
</template>

<script setup lang="ts">
import Article from './Article/Article.vue';

const props = defineProps<{
  person: Array<{ name: string, time?:string}>,
  icon:string,
  artType:string,
}>()


import { ref } from 'vue'

const scrollBox = ref<HTMLElement | null>(null)
const scrollPosition = ref('top')

const handleScroll = () => {
  const el = scrollBox.value
  if (!el) return

  const isTop = el.scrollTop === 0
  const isBottom = el.scrollTop + el.clientHeight >= el.scrollHeight

  if (isTop) {
    scrollPosition.value = 'top'
  }
  
  if(!isTop && !isBottom){
    scrollPosition.value = 'middle'
  }
  
  if (isBottom) {
    scrollPosition.value = 'bottom'
  }
}

</script>

<style scoped lang="scss">
@use '../assets/style/common' as com;
.art-wrap{
  width: 100%;
  height: 250px;
  max-height: 250px;
  overflow: hidden;
  position: relative;
  background-color: #000;
  .art-group{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar-track {
      background: transparent; // 배경 없애기
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.4); // 스크롤바 색
      border-radius: 6px; // ✅ 둥글게
    }
  }

  &::after{
    content: '';
    display: block;
    width: calc(100% - 15px);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient( rgba(0,0,0,0.6) 10%,transparent 25%);
    pointer-events: none;
    transition: opacity 0.5s;
  }
  &::before{
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 10%, transparent 25%);
    pointer-events: none; 
    transition: opacity 0.5s;
  }

  &.top{
    &::after{
      opacity: 0;
    }
  }
  &.bottom{
    &::before{
      opacity: 0;
    }
  }

}
</style>
