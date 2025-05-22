<template>
  <i :class="iconName" :size="size"></i>
</template>

<script setup lang="ts">
import '../assets/style/icons.scss';


const props = defineProps<{
  iconName : string;
  size:string;
}>()
</script>
