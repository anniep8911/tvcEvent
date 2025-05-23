<template>
  <component :is="tag" :class="className">
    <slot />
        {{ msg }}
  </component>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tag: string,
  className: string,
  msg?:string,
}>()
</script>

<style lang="scss" scoped>
@use '../assets/style/common' as *;

.headerLogoBold { @include headerLogoBold; }
.headerNavBold { @include headerNavBold; }
.headerNavRegular { @include headerNavRegular; }
.contentTitleBold { @include contentTitleBold; }
.contentSubtitleBold { @include contentSubtitleBold; }
.contentDescriptionRegular { @include contentDescriptionRegular; }
.articleTitleBold { @include articleTitleBold; }
.articleSubtitleBold { @include articleSubtitleBold; }
.bodyTextRegular { @include bodyTextRegular; }
.bodyTextBold { @include bodyTextBold; }
.iconTextRegular { @include iconTextRegular; }
</style>