<template>
  <article :class="size">
    <div class="image"></div>
    <div class="texts">
      <Typography name="ArticleTitleRegular" v-html="highlightedHtml"/>
      <Button :backgroundColor="bgcolor" :disabled="disabled" :label="btnLabel" @click="setClick" />
    </div>
    <div class="coins">
      <Icons iconName="coin" size="medium" />
      X {{ num }}
    </div>
  </article>
  <Toast :active="toast" msg="원픽 챌린지에 참여하셨습니다!" />
</template>

<script setup lang="ts">
import Icons from '../Icons.vue';
import Typography from '../Typography.vue';
import Button from '../Button.vue';
import Toast from '../Toast.vue';
import {useHighlightedHtml} from '../../assets/js/_common'
import { ref } from 'vue';

const props = defineProps<{
    msg: string
    num: number
    size:string
    bgcolor?:string
    disabled?:boolean
    btnLabel:string
    keyword?:Record<string,string[]>
  }>();

  const toast = ref(false);
  const num = ref(props.num);
  const disabled = ref(props.disabled);

  const highlightedHtml = useHighlightedHtml(props.msg, props.keyword ?? {});

  const setClick=()=>{

      if(!props.disabled){
        toast.value = true
        num.value -= 1;     
        if(!num.value){
            disabled.value=true
        }
        setTimeout(() => {
          toast.value = false
      }, 1000)
    }
  }

</script>

<style scoped lang="scss">
@use '../../assets/style/common' as com;
article{
  width: 50%;
  text-align: center;
  padding: 6rem 2.2rem 4rem;
  position: relative;
  @include com.mob{
    width: 100%;
  }
  &:nth-of-type(1)~article{
    border-top: 1px dotted #ccc;
  }
  &.large{
    width: 100%;
  }
  button{
    margin-top: 20px;
    width: 100%;
  }
  .coins{
    position: absolute;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    top: 2rem;
    right: 2.2rem;
    font-size: 2rem;
  }
}
</style>