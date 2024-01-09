import React, { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type PostCardProps = { date: string; title: string; slug: string; subtitle: string };

const PostCard: FC<PostCardProps> = ({ date, title, subtitle, slug }) => {
  return (
    <Link aria-label={title + ' - Article'} href={`/` + slug}>
      <Card className="cursor-pointer select-none">
        <CardHeader>
          <CardDescription>{date}</CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
export default PostCard;
