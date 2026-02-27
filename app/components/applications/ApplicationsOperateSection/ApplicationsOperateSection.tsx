'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

export interface ApplicationsOperateItem {
    title: string;
    subtext: string;
    image: string;
    href: string;
}

interface ApplicationsOperateSectionProps {
    items?: ApplicationsOperateItem[];
}

const ITEMS_PER_PAGE = 12;

const defaultItems: ApplicationsOperateItem[] = [
    {
        title: 'Defence',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'Space',
        subtext: 'Engineered for SatCom terminals and sensing payloads requiring stable RF performance.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Telecom',
        subtext: 'Engineered for infrastructure and high-frequency wireless platforms where efficiency matters.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'Public Safety',
        subtext: 'Engineered for resilient links and mission continuity in emergency communication networks.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'Smart Infrastructure',
        subtext: 'Engineered for dense deployments where low-loss RF chains and reliability are critical.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Aerospace',
        subtext: 'Engineered for harsh environments with strict performance and qualification requirements.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'Autonomy',
        subtext: 'Engineered for sensing and control stacks requiring predictable RF behavior at scale.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'Industrial IoT',
        subtext: 'Engineered for long-cycle platforms where uptime and robust integration are mandatory.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Maritime',
        subtext: 'Engineered for communications across variable conditions with dependable link quality.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'Aviation',
        subtext: 'Engineered for aviation communication systems with precision RF front-end performance.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'Ground Stations',
        subtext: 'Engineered for stable terminal operation across real-world deployment constraints.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Secure Networks',
        subtext: 'Engineered for high-integrity links where deterministic RF behavior is essential.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'Defence',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'Telecom',
        subtext: 'Engineered for infrastructure and high-frequency wireless platforms where efficiency matters.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
];

const ApplicationsOperateSection: React.FC<ApplicationsOperateSectionProps> = ({
    items = defaultItems,
}) => {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return items.slice(start, start + ITEMS_PER_PAGE);
    }, [items, page]);

    return (
        <section className="applications-operate-section">
            <div className="container">
                <SectionHeader
                    alignment="center"
                    title={
                        <>
                            Where It <span>Operates</span>
                        </>
                    }
                    description="Performance-critical environments where RF accuracy and system reliability are essential, guided by system-level requirements and real deployment conditions."
                />

                <div className="applications-operate-grid">
                    {paginatedItems.map((item, index) => (
                        <article className="applications-operate-item" key={`${item.title}-${index}`}>
                            <div className="applications-operate-item__image-container">
                                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                            </div>

                            <div className="applications-operate-item__content">
                                <h3>{item.title}</h3>
                                <p>{item.subtext}</p>

                                <Link href={item.href} className="applications-operate-item__link">
                                    <span>Know More</span>
                                    <Image
                                        src="/images/icons/green-top-tick-arrow.png"
                                        alt=""
                                        width={15}
                                        height={15}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="applications-operate-pagination">
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = pageNumber === page;

                            return (
                                <button
                                    key={pageNumber}
                                    type="button"
                                    className={isActive ? 'is-active' : ''}
                                    onClick={() => setPage(pageNumber)}
                                    aria-label={`Go to page ${pageNumber}`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ApplicationsOperateSection;
