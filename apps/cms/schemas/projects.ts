import { HiBriefcase } from "react-icons/hi";
import {defineField, defineType} from "sanity";

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          title: "English",
          name:"en",
          type: "text"
        }),
        defineField({
          title: "Spanish",
          name:"es",
          type: "text"
        }),
      ],
    }),
    defineField({
      name: 'type',
      title: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Mankind', value: 'Mankind Technologies'},
          {title: 'Freelance', value: 'Freelance'}
        ],
      }
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
    defineField({
      name: 'tag',
      title: 'Tags',
      type: 'array',
      validation: Rule => Rule.max(4),
      of: [
        {
          type: 'reference',
          to: [
            {type: 'tags'},
          ]
        }
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      validation: Rule => Rule.max(6),
      of: [
        {
          type: 'reference',
          to: [
            {type: 'technologies'},
          ]
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({title}) {
      return {
        title: title,
        media: HiBriefcase,
      };
    },
  },
})
