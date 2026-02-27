import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import BlogSection, { BlogPostItem } from '../components/BlogSection/BlogSection';

const blogListingPosts: BlogPostItem[] = [
    {
        title: 'XARK Files Patent for Smart Parking System Using Circularly Polarized UWB Antenna.',
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'XARK Technologies has filed a patent for a Smart Parking System based on a circularly polarized',
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: "ultra-wideband (UWB) antenna. The innovation demonstrates XARK's applied RF and antenna",
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'XARK expands RF validation workflows for mission-critical field deployments',
        date: '12-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Applied MMIC design lessons from recent high-power subsystem integration projects',
        date: '10-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'SatCom front-end reliability improvements with tighter test and calibration loops',
        date: '08-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'How phased-array architecture choices impact system-level RF performance outcomes',
        date: '05-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Field-ready antenna-FEM integration approaches for compact communication platforms',
        date: '02-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'Validation checklist for repeatable RF front-end behavior under deployment constraints',
        date: '30-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'XARK engineering notes: balancing efficiency and linearity in high-frequency designs',
        date: '27-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'Practical integration signals for wireless infrastructure RF subsystem development',
        date: '24-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'XARK patent update: circularly polarized antenna pathway for robust smart mobility links',
        date: '20-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
    {
        title: 'Applied RF architecture notes for secure communication systems in dense environments',
        date: '18-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/hero-image.png',
        href: '#',
    },
    {
        title: 'System-level design checkpoints for next-gen antenna and front-end co-optimization',
        date: '15-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/bottom-cta-image.png',
        href: '#',
    },
    {
        title: 'Engineering brief: real-deployment RF diagnostics and measurable performance controls',
        date: '11-09-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
];

const page = () => {
    return (
        <main>
            <PageHeroSection
                title={
                    <>
                        News &amp; <span>Knowledge</span>
                    </>
                }
                description="Updates, patents, and practical engineering notes on MMICs, RF subsystems, antennas, and system-level RF work, written for teams building real hardware."
                backgroundImage="/images/hero-image.png"
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
