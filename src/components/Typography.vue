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
  | 'ArticleTitleRegular'
  | 'ArticleSubtitleBold'
  | 'ArticleSubtitleRegular'
  | 'BodyTextRegular'
  | 'BodyTextBold'
  | 'MainTitleText'

const tagMap: Record<TypographyVariant, string> = {
  HeaderLogoBold: 'h1',
  HeaderNavBold: 'h4',
  HeaderNavRegular: 'h4',
  ContentTitleBold: 'h2',
  ContentSubtitleBold: 'h4',
  ContentDescriptionRegular: 'p',
  ArticleTitleBold: 'h3',
  ArticleTitleRegular: 'h3',
  ArticleSubtitleBold: 'h4',
  ArticleSubtitleRegular: 'h4',
  BodyTextRegular: 'p',
  BodyTextBold: 'p',
  MainTitleText:'h2',
  
}

const fallbackMap: Record<TypographyVariant, string> = {
  HeaderLogoBold: '기본 로고',
  HeaderNavBold: '기본 내비',
  HeaderNavRegular: '기본 내비(보통)',
  ContentTitleBold: '기본 제목',
  ContentSubtitleBold: '기본 부제목',
  ContentDescriptionRegular: '기본 설명',
  ArticleTitleBold: '기본 아티클 제목 (굵게)',
  ArticleTitleRegular: '기본 아티클 제목 ',
  ArticleSubtitleBold: '기본 아티클 부제목 (굵게)',
  ArticleSubtitleRegular: '기본 아티클 부제목',
  BodyTextRegular: '본문 텍스트',
  BodyTextBold: '강조 텍스트',
  MainTitleText:'메인타이틀'
}

const tag = computed(() => tagMap[props.name as TypographyVariant])
const fallbackText = computed(() => fallbackMap[props.name as TypographyVariant])

const slots = useSlots()
const hasSlot = computed(() => !!slots.default && slots.default().length > 0)
</script>


<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');


// 공통 폰트 패밀리
$font-family-default: 'Pretendard', sans-serif;
$font-family-special: 'Orbitron', sans-serif;
$font-family-main:  'Black Han Sans', sans-serif;



// 타이포그래피
.HeaderLogoBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 4.4rem;
  line-height: 6.4rem;
  letter-spacing: -0.1rem;
}

.HeaderNavBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.05rem;
}

.HeaderNavRegular {
  font-family: $font-family-default;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.05rem;
}

.ContentTitleBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.8rem;
  letter-spacing: -0.1rem;
}

.ContentSubtitleBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;
  letter-spacing: -0.05rem;
}

.ContentDescriptionRegular {
  font-family: $font-family-default;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.04rem;
}

.ArticleTitleBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 4rem;
  letter-spacing: -0.05rem;
}

.ArticleTitleRegular {
  font-family: $font-family-default;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 4rem;
  letter-spacing: -0.05rem;
}

.ArticleSubtitleBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.04rem;
}

.ArticleSubtitleRegular {
  font-family: $font-family-default;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.04rem;
}

.BodyTextRegular {
  font-family: $font-family-default;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: -0.03rem;
}

.BodyTextBold {
  font-family: $font-family-default;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: -0.03rem;
}

.IconTextRegular {
  font-family: $font-family-default;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.03rem;
}

.MainTitleText{
  font-size: 5rem;
  line-height: 6rem;
  font-family: $font-family-main;
  font-weight: 500;
}

</style>