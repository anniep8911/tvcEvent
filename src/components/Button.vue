<template>
  <button
    :class="classes"
    @click="onClick"
    :style="style"
    :type="btnType"
    :disabled="disabled"
  >
    <Icons v-if="icon" :class="icon" size="large" />
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
import Icons from './Icons.vue'
import '../assets/style/button.scss'

// 1. Props
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    validator: (value) => ['small', 'large'].includes(value),
  },
  btnType: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  icon: {
    type: String,
  },
})

// 3. Classes
const classes = computed(() => ({
  button: true,
  [`button--${props.size || 'small'}`]: true,
  [`button--${props.btnType || 'normal'}`]: true,
  [`button--${props.backgroundColor || 'primary'}`]: true,
}))

</script>
