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
    'ArticleSubtitleBold',
    'BodyTextRegular',
    'BodyTextBold',
    'IconTextRegular',
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
    console.log(name + '이거확인');
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
export const ArticleSubtitleBold = newStory.ArticleSubtitleBold;
export const BodyTextRegular = newStory.BodyTextRegular;
export const BodyTextBold = newStory.BodyTextBold;
export const IconTextRegular = newStory.IconTextRegular;

