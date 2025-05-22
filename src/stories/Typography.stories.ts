// src/components/Typography/Typography.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

export default {
    title: 'Typography/SpecialFonts',
} as Meta

export const OrbitronText: StoryFn = () => ({
    template: `<h2 style="font-family: 'Orbitron', sans-serif;">font-family : Orbitron </h2>`,
})
