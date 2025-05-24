import Typography from '../components/Typography.vue'
import type { Meta } from '@storybook/vue3'


const variants = [
    'HeaderLogoBold',
    'HeaderNavBold',
    'HeaderNavRegular',
    'ContentTitleBold',
    'ContentSubtitleBold',
    'ContentDescriptionRegular',
    'ArticleTitleBold',
    'ArticleTitleRegular',
    'ArticleSubtitleBold',
    'ArticleSubtitleRegular',
    'BodyTextRegular',
    'BodyTextBold',
]


const meta: Meta<typeof Typography> = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;

const newStory: Record<string, { args: { name: string } }> = {};

variants.forEach((name) => {
    newStory[name] = {
        args: {
            name: name,
        }
    }
})

export const HeaderLogoBold = newStory.HeaderLogoBold;
export const HeaderNavBold = newStory.HeaderNavBold;
export const HeaderNavRegular = newStory.HeaderNavRegular;
export const ContentTitleBold = newStory.ContentTitleBold;
export const ContentSubtitleBold = newStory.ContentSubtitleBold;
export const ContentDescriptionRegular = newStory.ContentDescriptionRegular;
export const ArticleTitleBold = newStory.ArticleTitleBold;
export const ArticleTitleRegular = newStory.ArticleTitleRegular;
export const ArticleSubtitleBold = newStory.ArticleSubtitleBold;
export const ArticleSubtitleRegular = newStory.ArticleSubtitleRegular;
export const BodyTextRegular = newStory.BodyTextRegular;
export const BodyTextBold = newStory.BodyTextBold;



