export type TLink = `http://${string}` | `https://${string}`;
export type TImageLink = `./${string}` | `/${string}` | `http://${string}` | `https://${string}`;
export type TLinkPath = `/${string}`;

export type ProfileSettingProps = {
  myname: string;
  blogName: string;
  blogDescription: string;
  avatar: TLink;
  facebook: TLink;
  instagram: TLink;
  twiter: TLink;
  linkedin: TLink;
  metaTitle: string;
  metaDescription: string;
  metaGraphImage: TImageLink;
  metaKeywords: string[];
  metadataBase: URL;
};

export type TFullPost = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  content: string;
  image: TImageLink;
  imageAlt: string;
  seoMetaDescription: string;
};

export type TFeaturedArticlesCards = Omit<TFullPost, 'content' | 'seoMetaDescription' | 'date'>;

export type TAllArticles = Omit<TFullPost, 'content' | 'seoMetaDescription' | 'date'>;

export type TCategoryCard = {
  categoryName: string;
  categoryImg: TImageLink;
  categoryImgAlt: string;
  categorySlug: string;
};

export type TArticlesCardsByCategory = {
  title: string;
  subtitle: string;
  slug: string;
  image: TImageLink;
  imageAlt: string;
};
