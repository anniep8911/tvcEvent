<template>
  <div class="banner" :style="[{background : backgrond},{color : color}]" :class="edge">
    <article>
      <div class="texts">
        <Typography name="ArticleSubtitleRegular" > {{ subtitle }}</Typography>
       <template v-if="keyword">
        <Typography name="ArticleTitleBold" v-html="highlightedHtml"/>
      </template>
      <template v-else>
         <Typography name="ArticleTitleBold"> {{ title }} </Typography>
       </template>
      </div>
     <div :class="['image',char]"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import {useHighlightedHtml} from '../assets/js/_common'
import Typography from './Typography.vue'

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
  width: calc(100% / 3 + 4rem);
  @include com.mob{
    width: 100%;
  }

  &.left{
    width: max(calc(((100vw - 80%) / 2 ) + 100% / 3),calc(((100vw - 1080px) / 2 ) + 100% / 3));
    direction: rtl;
    @include com.mob{
      width: 100%;
    }
    article{
      direction: ltr;
    }
  }
  &.right{
    width: max(calc(((100vw - 80%) / 2 ) + 100% / 3),calc(((100vw - 1080px) / 2 ) + 100% / 3));
    @include com.mob{
      width: 100%;
    }
  }
  
  article{
    max-width: max(300px, 33.33%);
    padding: 0.5rem 2rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-shadow: 1px 1px 1px #333;
    .image{
      width: 31.4%;
      height: 10rem;
      @include com.imgInit('contain');
      @for $i from 1 through 3{
        &.char#{$i}{
          background-image: url('../assets/images/char#{$i}.png');
        }
      }
    }
  
  @include com.mob{
   max-width: none;
  }
  }
}
</style>