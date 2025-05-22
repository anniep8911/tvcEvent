<template>
  <article :class="[{light:light},artType]">
    <h3>
      <Icons :class="icon" size="medium" />
      <template v-if="artType==='pay'">
        <span class="name"><span class="inner">{{ name }} </span> 님</span>
        <span class="msg">네이버페이 1만원 당첨!</span>
      </template>
      <template v-else>
        <span class="msg">{{rank}} 번째 100만원 원픽,</span>
        <span class="name"> <span class="inner">{{ name }} </span>님</span>
      </template>
    </h3>
    <span v-if="time" class="time">{{ time }} 전</span>
  </article>
</template>

<script setup>
import '../assets/style/article.scss';
import Icons from './Icons.vue';


const props = defineProps({
  icon: {
      type: String,
    },
    name: {
      type: String
    },
    time: {
      type: String
    },
    light: {
      type: Boolean
    },
    rank:{
      type: Number
    },
    artType:{
      type:String
    }
});
</script>
