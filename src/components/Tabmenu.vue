<template>
  <Typography name='HeaderNavBold'  :class="{'tab-disabled':disabled}">{{ menu }}</Typography>
</template>

<script setup lang="ts">
import Typography from './Typography.vue';
import '../assets/style/button.scss'

// 1. Props
const props = defineProps<{
  menu: string,
  disabled:boolean,
}>()

</script>

<style scoped lang="scss">
  h4{
    background-color: #000;
    color: #fff;
    text-align: center;
    width: 50%;
    text-transform: capitalize;
    padding: 20px 0px;
    cursor: pointer;
    &.tab-disabled{
      color: #ccc;
      background-color: #666;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
</style>
