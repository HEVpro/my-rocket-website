import {HiCode} from "react-icons/hi";
import {defineField, defineType} from "sanity";

export default defineType({
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
        defineField(
            {
                name: 'image',
                title: 'Image',
                type: 'image'
            }
        ),
        defineField(
            {
                name: 'name',
                title: 'Technology',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'description',
                title: 'Description',
                type: 'object',
                fields: [
                    {
                        title: "English",
                        name: "en",
                        type: "text"
                    },
                    {
                        title: "Spanish",
                        name: "es",
                        type: "text"
                    }
                ],
            },
        ),
        defineField(
            {
                name: 'tag',
                title: 'Tags',
                type: 'array',
                validation: (Rule) => Rule.max(4),
                of: [
                    {
                        type: 'reference',
                        to: [
                            {type: 'tags'},
                        ]
                    }
                ],
            },
        ),
    ],
    preview: {
        select: {
            title: "name",
        },
        prepare({title}) {
            return {
                title: title,
                media: HiCode,
            };
        },
    },
})
