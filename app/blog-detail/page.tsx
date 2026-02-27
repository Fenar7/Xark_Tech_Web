import React from 'react';
import Image from 'next/image';
import BlogSection, { BlogPostItem } from '../components/BlogSection/BlogSection';
import './style.scss';

const readMorePosts: BlogPostItem[] = [
    {
        title: 'XARK Technologies has filed a patent for a Smart Parking System based on a circularly polarized',
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
        title: 'XARK Technologies has filed a patent for a Smart Parking System based on a circularly polarized',
        date: '15-10-25',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png',
        href: '#',
    },
];

const page = () => {
    return (
        <main className="blog-detail-page-container-main">
            <div className="blog-detail-page container">
                <section className="blog-detail-hero-media">
                    <Image
                        src="/images/about-section-image.png"
                        alt="Blog featured visual"
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 90vw"
                        style={{ objectFit: 'cover' }}
                    />
                </section>

                <article className="blog-detail-article">
                    <p className="blog-detail-article__date">Feb 7, 2026</p>
                    <h1>Link Budget First: The Fastest Way to Avoid RF Design Surprises</h1>

                    <div className="blog-detail-article__content">
                        <p>
                            RF projects rarely fail because someone forgot how to design an LNA. They fail
                            because system assumptions were wrong, and the hardware was forced to compensate
                            too late.
                        </p>
                        <p>
                            If you want fewer surprises and faster convergence, start with a link budget that
                            is honest enough to annoy everyone in the room. Then design the RF chain around
                            it.
                        </p>
                        <p>Why link budgets matter more than early schematics</p>
                        <p>
                            Early-stage RF design often starts with block diagrams and target specs. That is
                            useful, but not enough. A solid link budget is the decision-making tool that
                            creates clarity on what the system must achieve and what the environment will do.
                        </p>
                        <p>The 5 questions a good link budget should answer</p>
                        <p>1) What is the minimum required received signal?</p>
                        <p>
                            This is driven by receiver sensitivity, modulation performance targets, and
                            performance objectives. It is where unrealistic optimism usually disappears.
                        </p>
                        <p>2) What is the real path loss model?</p>
                        <p>
                            Free-space checks are useful for sanity, but deployment decisions need
                            environment-accurate models: clutter, multipath, motion, and band-specific
                            attenuation.
                        </p>
                        <p>3) Where is the noise floor, really?</p>
                        <p>
                            Noise is not just kTB. Losses before the first gain stage, NF, and bandwidth
                            assumptions have measurable consequences in final behavior.
                        </p>
                        <p>4) What are the interference and blocker conditions?</p>
                        <p>
                            This is where lab success diverges from field outcomes. A usable budget includes
                            adjacent-channel effects and dynamic range constraints.
                        </p>
                        <p>5) How much margin is non-negotiable?</p>
                        <p>
                            Margin is a reliability decision, not a final spreadsheet adjustment. It should
                            be defined early and defended under worst-case operation.
                        </p>
                        <p>Turning a link budget into RF chain decisions</p>
                        <p>
                            Once assumptions are explicit, receiver and transmitter trade-offs become
                            controlled engineering decisions instead of reactive redesign loops.
                        </p>
                        <ul>
                            <li>Loss before first gain stage deserves first-priority mitigation.</li>
                            <li>LNA selection should follow target NF and linearity headroom needs.</li>
                            <li>Filtering strategy must track blocker and coexistence conditions.</li>
                            <li>Linearity requirements should be validated against realistic scenarios.</li>
                        </ul>
                        <p>
                            With a grounded link budget, architecture choices become faster, integration risk
                            drops, and validation plans align with deployment reality.
                        </p>
                    </div>
                </article>
            </div>

            <div className="blog-detail-read-more">
                <BlogSection
                    posts={readMorePosts}
                    title="Read More"
                    showHeaderAction={false}
                    showLabel={false}
                    description={undefined}
                    listingAlignment="left"
                    maxItems={3}
                    enablePagination={false}
                />
            </div>
        </main>
    );
};

export default page;
