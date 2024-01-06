export type TLink = `http://${string}` | `https://${string}`;

export type ProfileSettingProps = {
  myname: string;
  blogName: string;
  blogDescription: string;
  avatar: TLink;
  facebook: TLink;
  instagram: TLink;
  twiter: TLink;
  linkedin: TLink;
};

export type PostMetaData = {
  title: string;
  subtitle: string;
  date: Date;
  category: string;
  slug: string;
};

export type PostProps = {
  title: string;
  subtitle: string;
  date: string;
  content: string;
  image: string;
};

export type TPostCardDetails = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
};

export type TFullPost = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  content: string;
  image: string;
};
