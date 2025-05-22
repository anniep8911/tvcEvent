<template>
  <button type="button" :class="classes" @click="onClick" :style="style" :type="btnType" :disabled="disabled">{{ label
  }}</button>
</template>

<script>
import '../assets/style/button.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'button',
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1;
      },
    },
    btnType: {
      type: String
    },
    backgroundColor: {
      type: String,
    },
    disabled: {
      type: Boolean
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    return {
      classes: computed(() => ({
        'button': true,
        [`button--${props.size || 'small'}`]: true,
        [`button--${props.btnType || 'normal'}`]: true,

      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    };
  },
};
</script>
