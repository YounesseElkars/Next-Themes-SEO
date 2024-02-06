export const profileSetting = {
  full_name: 'Jessica Walker',
  blogName: 'Minimalist Blog',
  author_about:
    "Hi im Jessica Walker , and im is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
  quote:
    'Embrace the journey of continuous learning, for in every challenge lies an opportunity to grow and redefine your story .',
  avatar: '/images/author.png',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twiter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  metaTitle: 'My Awesome Blog',
  metaDescription: 'This is my Coding Blog',
  metaGraphImage: '/images/flower.jpeg',
  metaKeywords: ['Next.js', 'React', 'JavaScript'] as string[],
  metadataBase:
    process.env.NODE_ENV === 'development'
      ? new URL('http://localhost:3000')
      : new URL('https://dcxtivbm7nals.cloudfront.net'),
} as const;
