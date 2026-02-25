import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../ui/ArrowButton/ArrowButton';
import SectionHeaderWithAction from '../ui/SectionHeaderWithAction/SectionHeaderWithAction';
import './style.scss';

const blogPosts = [
    {
        title: 'XARK Files Patent for Smart Parking System Using Circularly Polarized UWB Antenna.',
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '/blog/xark-files-patent-for-smart-parking',
    },
    {
        title: 'XARK Technologies has filed a patent for a Smart Parking System based on a circularly polarized',
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '/blog/smart-parking-system-patent',
    },
    {
        title: "ultra-wideband (UWB) antenna. The innovation demonstrates XARK's applied RF and antenna",
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '/blog/uwb-antenna-innovation',
    },
];

const BlogSection = () => {
    return (
        <section className="blog-section bg-black py-[80px] md:py-[120px]">
            <div className="container">
                <SectionHeaderWithAction
                    label="News & Knowledge"
                    title={
                        <>
                            The XARK <span>News & Updates</span>
                        </>
                    }
                    description="A concise feed of product updates, engineering insights, and sector signals across radar, SatCom, and wireless."
                    action={<ArrowButton label="View All" variant="filled" href="/blog" />}
                />

                <div className="blog-items-container mt-16 md:mt-24">
                    {blogPosts.map((post, index) => (
                        <article className="blog-item" key={`${post.title}-${index}`}>
                            <div className="blog-item__image-container">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    quality={95}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />

                                <Link
                                    href={post.href}
                                    aria-label={`Read: ${post.title}`}
                                    className="blog-item__arrow-link"
                                >
                                    <Image
                                        src="/images/icons/top-arrow-icon-2.png"
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            </div>

                            <div className="blog-item__content">
                                <h3 className="blog-item__title">{post.title}</h3>

                                <div className="blog-item__date-row">
                                    <Image
                                        src="/images/icons/date-icon-grey.png"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>{post.date}</span>
                                </div>

                                <p className="blog-item__subtext">{post.subtext}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
