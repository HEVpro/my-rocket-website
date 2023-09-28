import {HiOutlineTag} from "react-icons/hi";
import {defineField, defineType} from 'sanity'


export default defineField({
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tag name',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color'
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({title}) {
      return {
        title: title,
        media: HiOutlineTag,
      };
    },
  },
})
