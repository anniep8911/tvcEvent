<template>
  <article>
    <Icons :class="icon" size="medium" />
    <h3 class="name">
      <span class="msg">{{ msg }}</span>
      <span class="name">{{ name }} 님</span>
      <span v-if="time" class="time">{{ time }} 전</span>
    </h3>
  </article>
</template>

<script>
import '../assets/style/article.scss';
import Icons from './Icons.vue';

export default {
  name: 'article',

  components: { Icons },

  props: {
    icon: {
      type: String,
    },
    name: {
      type: String
    },
    msg: {
      type: String
    },
    time: {
      type: String
    },
    light: {
      type: Boolean
    }
  },

  // emits: ['login', 'logout', 'createAccount'],

};
</script>
