import {defineField} from "sanity";

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
      {
          name: "mainImage",
          title: "Main Image",
          type: "image",
      },
      {
          name: 'title',
          title: 'Title',
          type: 'object',
          fields: [
              {
                  title: "English",
                  name:"en",
                  type: "string"
              },
              {
                  title: "Spanish",
                  name:"es",
                  type: "string"
              }
          ],
      },
    {
      name: "slug",
      title: "Slugs",
      type: "object",
      fields: [
          {
              title: "English",
              name: "en",
              type: "slug",
              options: {
                  source: 'title.en',
                  maxLength: 200, // will be ignored if slugify is set
                  slugify: (input: string) => input
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .slice(0, 200)
              }
          },
          {
              title: "Spanish",
              name: "es",
              type: "slug",
              options: {
                  source: 'title.es',
                  maxLength: 200, // will be ignored if slugify is set
                  slugify: (input: string) => input
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .slice(0, 200)
              }
          },

      ]
    },
      {
          name: 'article',
          title: 'Article',
          type: 'object',
          fields: [
              {
                  name: "en",
                  title: "English",
                  type: "array",
                  of: [
                      {
                          type: 'block',
                      },
                      {
                          type: 'image',
                          fields: [
                              {
                                  type: 'string',
                                  name: 'alt',
                                  title: 'Alternative text',
                              }
                          ]
                      },
                      defineField({
                          type: 'code',
                          name: 'code',
                          title: 'Code custom',
                          options: {
                              language: 'javascript',
                              languageAlternatives: [
                                  {title: 'Javascript', value: 'javascript'},
                                  {title: 'HTML', value: 'html'},
                                  {title: 'CSS', value: 'css'},
                                  { title: "TypeScript", value: "typescript" },
                                  { title: "tsx", value: "tsx" },
                              ],
                              withFilename: true,
                          },
                      })
                  ]
              },
              {
                  name: "es",
                  title: "Spanish",
                  type: "array",
                  of: [
                      {
                          type: 'block',
                      },
                      {
                          type: 'image',
                          fields: [
                              {
                                  type: 'string',
                                  name: 'alt',
                                  title: 'Alternative text',
                              }
                          ]
                      },
                      defineField({
                          type: 'code',
                          name: 'code',
                          title: 'Code custom',
                          options: {
                              language: 'javascript',
                              languageAlternatives: [
                                  {title: 'Javascript', value: 'javascript'},
                                  {title: 'HTML', value: 'html'},
                                  {title: 'CSS', value: 'css'},
                                  { title: "TypeScript", value: "typescript" },
                                  { title: "tsx", value: "tsx" },
                              ],
                              withFilename: true,
                          },
                      })
                  ]
              },

          ],
      },
      {
          name: 'tag',
          title: 'Tags',
          type: 'array',
          validation: (Rule: any) => Rule.max(4),
          of: [
              {
                  type: 'reference',
                  to: [
                      {type: 'tags'},
                  ]
              }
          ],
      },
      {
          name: 'approved',
          title: 'Approved',
          type: 'boolean',
      },
  ],
  preview: {
    select: {
      title: "title.es",
    },
  },
}
