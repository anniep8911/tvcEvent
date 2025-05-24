<template>
  <article>
    <div class="image"></div>
    <div class="texts">
      <Typography name="ArticleTitleRegular">
        {{ msg }}
      </Typography>
       <Button backgroundColor="green" :disabled="false" label="원픽 챌린지 참여" />
       <span class="coins">
         <Icons iconName="coin" size="medium" />
         X {{ num }}
       </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import Icons from './Icons.vue';
import Typography from './Typography.vue';
import Button from './Button.vue';

const props = defineProps<{
    msg: string,
    num: number,
  }>();
</script>

<style scoped lang="scss">
@use '../assets/style/common' as com;
article{
}
</style>