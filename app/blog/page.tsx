import type { Metadata } from 'next';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import BlogSection, { BlogPostItem } from '../components/BlogSection/BlogSection';
import { getBlogPosts } from '@/sanity/lib/blogPosts';

export const metadata: Metadata = {
    title: 'News & Knowledge | Xark',
    description:
        'Updates, patents, and practical engineering notes on MMICs, RF subsystems, antennas, and system-level RF work.',
    alternates: {
        canonical: '/blog',
    },
};

const formatCardDate = (date: string) =>
    new Date(date)
        .toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        })
        .replace(/\//g, '-');

const page = async () => {
    const posts = await getBlogPosts();

    const blogListingPosts: BlogPostItem[] = posts.map((post) => ({
        title: post.title,
        date: formatCardDate(post.publishedAt),
        subtext: post.excerpt,
        image: post.image,
        href: `/blog/${post.slug}`,
    }));

    return (
        <main>
            <PageHeroSection
                title={
                    <>
                        News &amp; <span>Knowledge</span>
                    </>
                }
                description="Updates, patents, and practical engineering notes on MMICs, RF subsystems, antennas, and system-level RF work, written for teams building real hardware."
                backgroundImage="/images/blog-hero.png"
                backgroundAlt="Circuit and electronics themed background for news and knowledge page"
                showButtons={false}
            />
            <BlogSection
                posts={blogListingPosts}
                title={
                    <>
                        The XARK <span>News &amp; Updates</span>
                    </>
                }
                description="Performance-critical environments where RF accuracy and system reliability are essential, guided by system-level requirements and real deployment conditions."
                showHeaderAction={false}
                showLabel={false}
                maxItems={0}
                enablePagination
                itemsPerPage={12}
            />
        </main>
    );
};

export default page;
