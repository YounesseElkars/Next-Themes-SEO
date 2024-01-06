import Bio from '@/components/bio/bio';
import Navbar from '@/components/navbar/navbar';
import PostCrads from '@/components/post-cards/postCards';
import Container from '@/components/ui/container';

export default function Home() {
  return (
    <>
      <Bio />
      <PostCrads />
    </>
  );
}
