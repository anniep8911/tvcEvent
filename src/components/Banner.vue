<template>
  <div class="banner" :style="[{background : backgrond},{color : color}]" :class="edge">
    <article>
      <div class="texts">
       <h4>{{ subtitle }}</h4>
       <template v-if="keyword">
         <h3 v-html="highlightedHtml"></h3>
       </template>
       <template v-esle>
         <h3> {{ title }}</h3>
       </template>
      </div>
     <div :class="['image',char]"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import {useHighlightedHtml} from '../assets/js/_common'

const props = defineProps<{
    title:string,
    subtitle:string,
    char:string,
    backgrond?:string,
    color?:string,
    edge:string,
    keyword?:Record<string, string[]>,
  }>();

  const highlightedHtml = useHighlightedHtml(props.title, props.keyword ?? {})

</script>

<style scoped lang="scss">
@use '../assets/style/_common.scss' as com;
.banner{
  width: calc(100% / 3);
  &.left{
    width: max(calc(((100vw - 80%) / 2 ) + 100% / 3),calc(((100vw - 1080px) / 2 ) + 100% / 3));
    direction: rtl;
    article{
      direction: ltr;
    }
  }
  &.right{
    width: max(calc(((100vw - 80%) / 2 ) + 100% / 3),calc(((100vw - 1080px) / 2 ) + 100% / 3));
  }
  article{
    max-width: max(300px, 33.33%);
    padding: 20px 30px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-shadow: 1px 1px 1px #333;
    h3{
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
    }
    h4{
      font-size: 15px;
      line-height: 20px;
    }
    .image{
      width: 30%;
      height: 50px;
      @include com.imgInit('contain');
      @for $i from 1 through 3{
        &.char#{$i}{
          background-image: url('../assets/images/char#{$i}.png');
        }
      }
    }
  
  }
}
</style>