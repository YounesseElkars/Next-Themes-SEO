import { getPostDetails } from '@/components/post-cards/postCards';
import { profileSetting } from '@/config/profile';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPostDetails();
  const allDynamicPaths: MetadataRoute.Sitemap = posts.map((post) => {
    return {
      url: `${profileSetting.metadataBase}${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 1,
    };
  });

  return [
    ...allDynamicPaths,
    { url: `${profileSetting.metadataBase}`, lastModified: '2024-10-10', changeFrequency: 'weekly', priority: 1 },
    {
      url: `${profileSetting.metadataBase}about`,
      lastModified: '2024-10-10',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
