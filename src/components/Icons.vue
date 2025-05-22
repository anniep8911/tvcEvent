<template>
  <i :class="clName" :size="size"></i>
</template>

<script setup>
import '../assets/style/icons.scss';

const props = defineProps({
  clName: {
    type: String
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },

});
</script>
