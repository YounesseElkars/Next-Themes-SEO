import { profileSetting } from '@/config/profile';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${profileSetting.metadataBase}sitemap.xml`,
  };
}
