<template>
  <button
    :class="classes"
    :disabled="disabled"
  >
    <Icons v-if="icon" :iconName="icon" size="large" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icons from './Icons.vue'
import '../assets/style/button.scss'

// 1. Props
const props = defineProps<{
  label: string,
  size: string,
  btnType:string,
  backgroundColor: string,
  disabled:boolean,
  icon?:string
}>()

// 3. Classes
const classes = computed(() => ({
  button: true,
  [`button--${props.size || 'small'}`]: true,
  [`button--${props.btnType || 'normal'}`]: true,
  [`button--${props.backgroundColor || 'primary'}`]: true,
}))

</script>
