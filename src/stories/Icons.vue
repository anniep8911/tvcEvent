<template>
  <i :class="class" :size="size"></i>
</template>

<script>
import './icons.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'Icon',
  props: {
    class: {
      type: String
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
};
</script>
