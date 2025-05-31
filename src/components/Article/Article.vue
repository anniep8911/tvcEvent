<template>
  <article :class="[{light:light},artType]">
     <Typography name="ArticleTitleBold" >
       <template v-if="artType==='pay'">
        <span class="name-wrap">
          <span class="name"><Icons :iconName="icon" size="medium" /> <span class="inner">{{ name }} </span> 님</span>
          <span class="msg">네이버페이 1만원 당첨!</span>
        </span>
         <span v-if="time" class="time">{{ time }} 전</span>
       </template>
       <template v-else>
         <span class="msg"><Icons :iconName="icon" size="medium" />{{rank}} 번째 100만원 원픽,</span>
         <span class="name"> <span class="inner">{{ name }} </span>님</span>
       </template>
     </Typography>
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
  background-color: #2b2f37;
  color: #fff;
  padding: 1rem 0;
  width: 100%;
  border-radius: 4rem;
  &.light{
    background-color: #297fff;
  }
  &.pay{
    padding: 1rem 10rem;
    @include com.mob{
      padding: 1rem 2rem;

    }
    h3{
      justify-content: space-between;
      .time{
        font-size: 1.5rem;
      }
      .name-wrap{
        column-gap: 1rem;
        display: flex;
      }
    }
  }
  h3{
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    span{
      display: flex;
      align-items: center;
    &.name{
          width: 15rem;
          @include com.mob{
            width: 10rem;
          }
        }
        .inner{
          display: block;
          width: 6rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      i{
        margin-right: 1rem;
      }
    }
  }
}
</style>