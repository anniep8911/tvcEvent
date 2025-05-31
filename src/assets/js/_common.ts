import { computed, ComputedRef } from 'vue'
import { useWindowSize } from '@vueuse/core'

/**
 * 문자열 안의 키워드에 색상 강조 스타일을 입힌 HTML 문자열을 반환하는 computed ref
 * @param title 원본 문자열
 * @param keyword { [word]: color } 형태의 키워드-색상 매핑 객체
 * @returns ComputedRef<string> (하이라이트된 HTML)
 */


export function useHighlightedHtml(
    title: string,
    keyword: Record<string, string[]>
): ComputedRef<string> {
    return computed(() => {
        if (!keyword) return title

        let result = title

        const sortedKeywords = Object.keys(keyword).sort((a, b) => b.length - a.length)

        sortedKeywords.forEach((word) => {
            const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

            const [color, fontWeight, icon] = keyword[word]
            const span = `<span style="color: ${color}; font-weight: ${fontWeight};">${icon !== undefined ? `<i class="${icon}"></i>` : ''}${word}</span>`

            result = result.replace(new RegExp(`(${escaped})`, 'g'), span)
        })

        return result
    })
}

// 수정예정
export function useIsMobile(breakpoint = 768) {
    const { width } = useWindowSize()
    // console.log('실행확인')
    const isMobile = computed(() => width.value <= breakpoint)
    return { isMobile }
}