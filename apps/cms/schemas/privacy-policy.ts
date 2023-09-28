import {defineType} from "sanity";

export default defineType( {
  name: 'legal',
  title: 'Legal',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'object',
      fields: [
        {
          title: "English",
          name:"en",
          type: "blockContent"
        },
        {
          title: "Spanish",
          name:"es",
          type: "blockContent"
        }
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
