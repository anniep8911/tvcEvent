<template>
  <article :class="size">
    <div class="image"></div>
    <div class="texts">
      <Typography name="ArticleTitleRegular" v-html="highlightedHtml"/>
      <Button :backgroundColor="bgcolor" :disabled="disabled" label="원픽 챌린지 참여" />
    </div>
    <div class="coins">
      <Icons iconName="coin" size="medium" />
      X {{ num }}
    </div>
  </article>
</template>

<script setup lang="ts">
import Icons from './Icons.vue';
import Typography from './Typography.vue';
import Button from './Button.vue';
import {useHighlightedHtml} from '../assets/js/_common'

const props = defineProps<{
    msg: string,
    num: number,
    size:string,
    bgcolor:string,
    disabled:boolean,
    keyword?:Record<string,string[]>
  }>();


  const highlightedHtml = useHighlightedHtml(props.msg, props.keyword ?? {});

</script>

<style scoped lang="scss">
@use '../assets/style/common' as com;
article{
  width: 50%;
  text-align: center;
  padding: 40px 0;
  position: relative;
  &.large{
    width: 100%;
  }
  button{
    margin-top: 20px;
  }
  .coins{
    position: absolute;
    display: flex;
    align-items: center;
    column-gap: 5px;
    top: 0px;
    right: 20px;
  }
}
</style>