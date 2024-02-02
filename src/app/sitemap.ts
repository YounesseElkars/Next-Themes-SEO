import { profileSetting } from '@/config/profile';
import { getFeaturedArticlesCards } from '@/handlers/postsHandler';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getFeaturedArticlesCards();
  const allDynamicPaths: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${profileSetting.metadataBase}${post.slug}`,
    lastModified: '01-01-2020',
    changeFrequency: 'monthly',
    priority: 1,
  }));

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
