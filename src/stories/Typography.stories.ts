import Typography from '../components/Typography.vue'
import type { Meta } from '@storybook/vue3'

const variants = [
    'headerLogoBold',
    'headerNavBold',
    'headerNavRegular',
    'contentTitleBold',
    'contentSubtitleBold',
    'contentDescriptionRegular',
    'articleTitleBold',
    'articleSubtitleBold',
    'bodyTextRegular',
    'bodyTextBold',
    // 'iconTextRegular'
]

const stories: Record<string, any> = {}
variants.forEach((name) => {
    stories[name] = {
        args: {
            tag: resolveTag(name),
            className: name,
            msg: '여기안에 내용이 들어갑니다.'
        },
    }
})

function resolveTag(name: string): string {
    if (name.includes('Logo')) return 'h1'
    if (name.includes('Nav')) return 'h4'
    if (name.includes('Title') && name.includes('content')) return 'h2'
    if (name.includes('Subtitle') && name.includes('content')) return 'h4'
    if (name.includes('Title') && name.includes('article')) return 'h3'
    if (name.includes('Subtitle') && name.includes('article')) return 'h4'
    if (name.includes('Description')) return 'p'
    if (name.includes('bodyText')) return 'p'
    // if (name.includes('icon')) return 'i'
    return 'p'
}

const meta: Meta<typeof Typography> = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta

export const headerLogoBold = stories.headerLogoBold
export const headerNavBold = stories.headerNavBold
export const headerNavRegular = stories.headerNavRegular
export const contentTitleBold = stories.contentTitleBold
export const contentSubtitleBold = stories.contentSubtitleBold
export const contentDescriptionRegular = stories.contentDescriptionRegular
export const articleTitleBold = stories.articleTitleBold
export const articleSubtitleBold = stories.articleSubtitleBold
export const bodyTextRegular = stories.bodyTextRegular
export const bodyTextBold = stories.bodyTextBold
// export const iconTextRegular = stories.iconTextRegular
