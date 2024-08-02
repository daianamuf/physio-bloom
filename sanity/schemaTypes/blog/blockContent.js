// import {defineType, defineArrayMember} from 'sanity'

// export default {
//   name: 'blockContent',
//   title: 'Block Content',
//   type: 'array',
//   of: [
//     {
//       type: 'block',
//       styles: [
//         {title: 'Normal', value: 'normal'},
//         {title: 'H1', value: 'h1'},
//         {title: 'H2', value: 'h2'},
//         {title: 'H3', value: 'h3'},
//         {title: 'Quote', value: 'blockquote'},
//       ],
//       lists: [{title: 'Bullet', value: 'bullet'}],
//       marks: {
//         decorators: [
//           {title: 'Strong', value: 'strong'},
//           {title: 'Emphasis', value: 'em'},
//         ],
//         annotations: [
//           {
//             name: 'link',
//             type: 'object',
//             title: 'URL',
//             fields: [
//               {
//                 name: 'href',
//                 type: 'url',
//                 title: 'URL',
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       type: 'image',
//       options: {hotspot: true},
//     },
//   ],
// }
import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',

      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],

        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
