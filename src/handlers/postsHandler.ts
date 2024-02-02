import fs from 'fs';
import matter from 'gray-matter';
import { TAllArticles, TArticlesCardsByCategory, TFeaturedArticlesCards, TFullPost } from '@/types/general';
import { getAllCategoriesCards } from './categoryHandler';

export function getAllArticles(): TAllArticles[] {
  const categories = getAllCategoriesCards();

  const result: TAllArticles[] = [];

  categories.map((cat) => {
    const folder = `./src/posts/${cat.categoryName}/`;
    const posts = fs.readdirSync(folder);

    const markdownPosts = posts.filter((post) => {
      if (post.endsWith('.md')) {
        return post;
      }
    });

    for (const file of markdownPosts) {
      const fileContents = fs.readFileSync(`./src/posts/${cat.categoryName}/${file}`, 'utf8');
      const matterResult = matter(fileContents);
      result.push({
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        slug: file.replace('.md', ''),
        image: matterResult.data.image,
        imageAlt: matterResult.data.imageAlt,
      });
    }
  });
  return result;
}

export function getFeaturedArticlesCards(): TFeaturedArticlesCards[] {
  const folder = './src/posts/Featured';
  const posts = fs.readdirSync(folder);
  const markdownPosts = posts.filter((post) => {
    if (post.endsWith('.md')) {
      return post;
    }
  });
  return markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`./src/posts/Featured/${file}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: file.replace('.md', ''),
      image: matterResult.data.image,
      imageAlt: matterResult.data.imageAlt,
    };
  });
}

export function ShowArticlesCardsByCategory(category: string): TArticlesCardsByCategory[] {
  const folder = `./src/posts/${category}`;
  const posts = fs.readdirSync(folder);
  const markdownPosts = posts.filter((post) => {
    if (post.endsWith('.md')) {
      return post;
    }
  });

  return markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`./src/posts/${category}/${file}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: file.replace('.md', ''),
      image: matterResult.data.image,
      imageAlt: matterResult.data.imageAlt,
    };
  });
}

export function fullArticleHandler(slug: string): TFullPost {
  const categories = getAllCategoriesCards();
  for (const cat of categories) {
    const fileLocation = `./src/posts/${cat.categoryName}/${slug}.md`;
    if (fs.existsSync(fileLocation)) {
      const fileContents = fs.readFileSync(fileLocation, 'utf8');
      const matterResult = matter(fileContents);

      return {
        imageAlt: matterResult.data.imageAlt,
        slug: matterResult.data.slug,
        content: matterResult.content,
        date: matterResult.data.date,
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        image: matterResult.data.image,
        seoMetaDescription: matterResult.data.seoMetaDescription,
      };
    }
  }
  throw new Error(`Article not found for slug: ${slug}`);
}
