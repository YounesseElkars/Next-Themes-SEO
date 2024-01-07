export type TLink = `http://${string}` | `https://${string}`;
export type TImageLink = `/${string}` | `http://${string}` | `https://${string}`;

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
};

export type TFullPost = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  content: string;
  image: TImageLink;
  imageAlt: string;
};

export type TPostCardDetails = Omit<TFullPost, 'content' | 'image'>;

export type TFullPostPage = Omit<TFullPost, 'slug'>;
