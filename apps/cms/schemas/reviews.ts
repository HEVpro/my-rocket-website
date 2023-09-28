import {HiFire} from "react-icons/hi";
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        }),
        defineField({
            name: 'fullName',
            title: 'Full name',
            type: 'string',
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'review',
            title: 'Review',
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
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            initialValue: false
        }),
    ],
    preview: {
        select: {
            title: "fullName",
        },
        prepare({title}) {
            return {
                title: title,
                media: HiFire,
            };
        },
    }
})
