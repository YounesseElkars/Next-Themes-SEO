import { ProfileSettingProps } from '@/types/general';

export const profileSetting: ProfileSettingProps = {
  myname: 'John Doe',
  blogName: 'minimalist blog',
  blogDescription: 'Hi 👋 My Name is Unes and im sharing react topics',
  avatar: 'https://github.com/shadcn.png',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twiter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  metaTitle: 'My Awesome Blog',
  metaDescription: 'This is my Coding Blog',
  metaGraphImage: '/images/flower.jpeg',
  metaKeywords: ['Next.js', 'React', 'JavaScript'],
  metadataBase:
    process.env.NODE_ENV === 'development'
      ? new URL('http://localhost:3000')
      : new URL('https://dcxtivbm7nals.cloudfront.net'),
};
