import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import CoreCapabilitiesSection from './components/CoreCapabilitiesSection/CoreCapabilitiesSection';
import WhereWeOperateSection from './components/WhereWeOperateSection/WhereWeOperateSection';
import BlogSection, { BlogPostItem } from './components/BlogSection/BlogSection';
import BrandsSection from './components/BrandsSection/BrandsSection';
import BottomCtaSection from './components/BottomCtaSection/BottomCtaSection';
import { getOperateItems } from '@/sanity/lib/operateItems';
import { getBlogPosts } from '@/sanity/lib/blogPosts';

const formatCardDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).replace(/\//g, '-');

export default async function Home() {
  const latestOperateItems = await getOperateItems(6);
  const latestBlogPosts = await getBlogPosts(3);

  const homeBlogPosts: BlogPostItem[] = latestBlogPosts.map((post) => ({
    title: post.title,
    date: formatCardDate(post.publishedAt),
    subtext: post.excerpt,
    image: post.image,
    href: `/blog/${post.slug}`,
  }));

  return (
    <main>
      <Hero />
      <AboutSection />
      <CoreCapabilitiesSection />
      <WhereWeOperateSection items={latestOperateItems} />
      <BlogSection posts={homeBlogPosts} maxItems={3} />
      <BrandsSection/>
      <BottomCtaSection/>
    </main>
  );
}
