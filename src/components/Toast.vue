<template>
  <h5 :class="active? 'active':''">{{ msg }}</h5>
</template>

<script setup lang="ts">
import '../assets/style/icons.scss';

const props = defineProps<{
  msg:string,
  active?: boolean
}>();

</script>

<style scoped lang="scss">
@use '../assets/style/common' as com;
 h5{
  background-color: rgba(0,0,0,0.7);
  color: #FFF;
  text-align: center;
  position: fixed;
  margin: auto !important;
  bottom: 0px;
  left: 0;
  right: 0;
  top: 0;
  width: 50%;
  line-height: 40px;
  height: 40px;
  border-radius: 10px;
  opacity: 0;
  z-index: -1;
  font-size: 1.6rem;
  transition: opacity 0.5s;
  &.active{
    opacity: 1;
    z-index: 3;
  }

  @include com.mob{
    width: 100%;
  }
 }
</style>