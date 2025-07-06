import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the landing page (e.g., "Welcome to Our Landing Page")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carouselSlides',
      title: 'Carousel Slides',
      type: 'array',
      of: [{type: 'carouselSlide'}],
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      description: 'The main content sections of the page.',
      type: 'array',
      of: [{type: 'imageAndText'}],
    }),
  ],
})
