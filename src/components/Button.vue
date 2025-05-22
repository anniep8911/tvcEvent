<template>
  <button type="button" :class="classes" @click="onClick" :style="style" :type="btnType" :disabled="disabled">
    <Icons v-if="icon" :class="icon" size="large" />
    {{ label }}
  </button>
</template>

<script>
import '../assets/style/button.scss';
import { computed } from 'vue';
import Icons from './Icons.vue';

export default {
  name: 'button',
  components: { Icons },
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
    },
    icon:{
      type:String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    return {
      classes: computed(() => ({
        'button': true,
        [`button--${props.size || 'small'}`]: true,
        [`button--${props.btnType || 'normal'}`]: true,
        [`button--${props.backgroundColor || 'primary'}`]:true,
      })),
    };
  },
};
</script>
