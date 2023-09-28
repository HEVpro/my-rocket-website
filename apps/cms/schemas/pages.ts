export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fieldsets: [
    { name: "hero", title: "Hero", options: { columns: 1 } },
    { name: "technologies", title: "Technologies", options: { columns: 1 } },
    { name: "projects", title: "Projects", options: { columns: 1 } },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      fieldset: "hero",
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      fieldset: "hero",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          title: "English",
          name:"en",
          type: "text"
        },
        {
          title: "Spanish",
          name:"es",
          type: "text"
        }
      ],
      fieldset: "hero",
    },
    {
      name: 'techSubtitle',
      title: 'Description',
      type: 'object',
      fields: [
        {
          title: "English",
          name:"en",
          type: "text"
        },
        {
          title: "Spanish",
          name:"es",
          type: "text"
        }
      ],
      fieldset: "technologies",
    },
    {
      name: 'projectSubtitle',
      title: 'Description',
      type: 'object',
      fields: [
        {
          title: "English",
          name:"en",
          type: "text"
        },
        {
          title: "Spanish",
          name:"es",
          type: "text"
        }
      ],
      fieldset: "projects",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Pages",
      };
    },
  },
}
