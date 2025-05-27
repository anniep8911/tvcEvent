<template>
  <div class="content-wrap">
    <div class="content">
      <header>
        <Typography name="ContentTitleBold" v-html="contentTitle"></Typography>
        <Typography name="ContentSubtitleBold" v-if="contentSubtitle" v-html="contentSubtitle"></Typography>
      </header>
      <section>
        <slot />
        
      </section> 
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from './Typography.vue';


// 1. Props
const props = defineProps<{
  contentTitle: string,
  contentSubtitle: string,
  article?: string,
}>()


</script>

<style scoped lang="scss">
.content-wrap{
  background-color: #000;
  padding-top: 80px;
  .content{
    width: 80%;
    max-width: 1080px;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    section{
      margin-top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      
    }
  }
}
</style>
