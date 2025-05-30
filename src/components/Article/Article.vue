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
    width: max(100%,35rem);
    justify-content: center;
    align-items: center;
    column-gap: 5rem;
    line-height: 4rem;
    color: #fff;
    padding: 1rem 0px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 4rem;
    @include com.mob{
      column-gap: 1rem;
      padding: 1rem 0.5rem;
    }
    h3{
        display: flex;
        column-gap: 8rem;
        flex-shrink: 0;
        width: 80%;
        @include com.mob{
          column-gap: 1rem;
        }
        span{
            display: flex;
            .inner{
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 8rem;
            }
        }
    }

    &.light{
        background-color: com.$primary;
    }
    &.pay{
        justify-content: space-around;
        .time{
          font-size: 1.6rem;
        }
        h3{
            column-gap: 1rem;
            .name{
                font-size: 1.8rem;
                font-weight: 400;
                width: 20%;
            }
        }
    }
}
</style>