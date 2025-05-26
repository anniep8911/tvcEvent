<template>
  <article :class="[{light:light},artType]">
     <Typography name="ArticleTitleBold" >
       <Icons :iconName="icon" size="medium" />
       <template v-if="artType==='pay'">
         <span class="name"><span class="inner">{{ name }} </span> 님</span>
         <span class="msg">네이버페이 1만원 당첨!</span>
       </template>
       <template v-else>
         <span class="msg">{{rank}} 번째 100만원 원픽,</span>
         <span class="name"> <span class="inner">{{ name }} </span>님</span>
       </template>
     </Typography>
     <span v-if="time" class="time">{{ time }} 전</span>
  </article>
</template>

<script setup lang="ts">
import Icons from '../Icons.vue';
import Typography from '../Typography.vue';

const props = defineProps<{
    icon: string,
    name : string,
    time?: string,
    light?:boolean,
    rank:number,
    artType:string
  }>();
</script>

<style scoped lang="scss">
@use '../../assets/style/common' as com;
article{
    display: flex;
    width: max(100%,350px);
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    line-height: 40px;
    color: #fff;
    padding: 10px 0px;
    h3{
        display: flex;
        column-gap: 5px;
        flex-shrink: 0;
        span{
            display: flex;
            .inner{
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 80px;
            }
        }
    }
    background-color: rgba(0,0,0,0.7);
    border-radius: 40px;
    &.light{
        background-color: com.$primary;
    }
    &.pay{
        justify-content: space-around;
        h3{
            column-gap: 10px;
            .name{
                font-size: 18px;
                font-weight: 400;
            }
        }
    }
}
</style>