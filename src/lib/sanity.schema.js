export const postSchema = {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: "Chef's Secrets", value: "CHEF'S SECRETS" },
          { title: 'Heritage & Health', value: 'HERITAGE & HEALTH' },
          { title: 'Al Faham & Grills', value: 'AL FAHAM & GRILLS' },
          { title: 'Culinary Events', value: 'CULINARY EVENTS' },
        ],
      },
    },
    {
      name: 'categoryColor',
      title: 'Category Color Badge CSS',
      type: 'string',
      initialValue: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '4 min read',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
  ],
};

export const authorSchema = {
  name: 'author',
  title: 'Authors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Avatar Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
