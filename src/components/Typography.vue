<template>
  <component :is="tag" :class="name">
    <template v-if="hasSlot">
      <slot />
    </template>
    <template v-else>
      {{ fallbackText }}
    </template>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSlots } from 'vue'

const props = defineProps<{
  name: string
}>()

type TypographyVariant =
  | 'HeaderLogoBold'
  | 'HeaderNavBold'
  | 'HeaderNavRegular'
  | 'ContentTitleBold'
  | 'ContentSubtitleBold'
  | 'ContentDescriptionRegular'
  | 'ArticleTitleBold'
  | 'ArticleSubtitleBold'
  | 'BodyTextRegular'
  | 'BodyTextBold'

const tagMap: Record<TypographyVariant, string> = {
  HeaderLogoBold: 'h1',
  HeaderNavBold: 'h4',
  HeaderNavRegular: 'h4',
  ContentTitleBold: 'h2',
  ContentSubtitleBold: 'h4',
  ContentDescriptionRegular: 'p',
  ArticleTitleBold: 'h3',
  ArticleSubtitleBold: 'h4',
  BodyTextRegular: 'p',
  BodyTextBold: 'p',
}

const fallbackMap: Record<TypographyVariant, string> = {
  HeaderLogoBold: '기본 로고',
  HeaderNavBold: '기본 내비',
  HeaderNavRegular: '기본 내비(보통)',
  ContentTitleBold: '기본 제목',
  ContentSubtitleBold: '기본 부제목',
  ContentDescriptionRegular: '기본 설명',
  ArticleTitleBold: '기본 아티클 제목',
  ArticleSubtitleBold: '기본 아티클 부제',
  BodyTextRegular: '본문 텍스트',
  BodyTextBold: '강조 텍스트',
}

const tag = computed(() => tagMap[props.name as TypographyVariant])
const fallbackText = computed(() => fallbackMap[props.name as TypographyVariant])

const slots = useSlots()
const hasSlot = computed(() => !!slots.default && slots.default().length > 0)
</script>
