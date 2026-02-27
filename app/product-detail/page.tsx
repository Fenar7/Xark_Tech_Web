import React from 'react';
import Image from 'next/image';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import ArrowButton from '../components/ui/ArrowButton/ArrowButton';
import SectionHeader from '../components/ui/SectionHeader/SectionHeader';
import './style.scss';

const fitCards = [
    {
        title: 'Radar Front-Ends',
        subtext:
            'Integrated X-band front-end building block for radar transmit/receive chains, supporting reliable gain and switching in compact architectures.',
        image: '/images/about-section-image.png',
    },
    {
        title: 'Radar Front-Ends',
        subtext:
            'Integrated X-band front-end building block for radar transmit/receive chains, supporting reliable gain and switching in compact architectures.',
        image: '/images/about-section-image.png',
    },
    {
        title: 'Radar Front-Ends',
        subtext:
            'Integrated X-band front-end building block for radar transmit/receive chains, supporting reliable gain and switching in compact architectures.',
        image: '/images/about-section-image.png',
    },
];

const page = () => {
    return (
        <main className="product-detail-container-main">
            <PageHeroSection
                title={
                    <span className="product-detail-hero-title-text">
                        X-Band Front-End Module (9-12 GHz)
                    </span>
                }
                description="A compact GaN-based front-end module integrating PA, LNA, and T/R switching for X-band T/R systems. Built for fast switching, clean gain, and reliable performance in radar, SatCom, and EW front-ends."
                backgroundImage="/images/hero-image.png"
                backgroundAlt="Product detail hero background"
                showButtons={false}
            />

            <section className="product-intro-section">
                <div className="container">
                    <div className="product-intro-pill">Introduction</div>
                    <h2>Built as System Blocks, Not Standalone Parts</h2>
                    <p>
                        XFEM9125 is an X-band front-end module designed for T/R chains where integration and
                        repeatability matter as much as headline specs. It combines the essential front-end
                        functions into a compact, deployment-ready building block, reducing design effort at the
                        system level and simplifying validation.
                    </p>

                    <div className="product-asset-row">
                        <button type="button" className="product-asset-chip">
                            <span>Datasheet</span>
                            <span className="chip-icon chip-icon--download" aria-hidden="true" />
                        </button>
                        <button type="button" className="product-asset-chip">
                            <span>Drawing</span>
                            <span className="chip-icon chip-icon--drawing" aria-hidden="true" />
                        </button>
                        <button type="button" className="product-asset-chip">
                            <span>3D Model</span>
                            <span className="chip-icon chip-icon--cube" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="product-intro-cta">
                        <ArrowButton label="Connect with the team" variant="filled" href="/contact" />
                    </div>
                </div>
            </section>

            <section className="product-overview-section">
                <div className="container">
                    <div className="product-overview-card">
                        <div className="product-overview-tabs">
                            <button type="button" className="is-active">
                                Overview
                            </button>
                            <button type="button">Technical Specifications</button>
                        </div>

                        <h3>Overview</h3>

                        <div className="product-overview-content">
                            <p>
                                XFEM9125 is a compact X-band Front-End Module (9-12 GHz) built for T/R systems
                                where integration discipline and repeatable RF performance matter. It combines
                                key front-end functions into a single module.
                            </p>
                            <p>What it integrates</p>
                            <ul>
                                <li>Power Amplifier (Tx path)</li>
                                <li>Low Noise Amplifier (Rx path)</li>
                                <li>T/R Switching</li>
                                <li>Front-end interfaces designed for subsystem integration</li>
                            </ul>
                            <p>Why it exists (system-level value)</p>
                            <ul>
                                <li>Fewer RF interfaces: reduces interconnect loss and integration complexity</li>
                                <li>Cleaner validation: test the front-end as a block, not as separate parts</li>
                                <li>Faster bring-up: fewer tuning loops during system integration</li>
                                <li>Deployment-oriented: designed for stable, repeatable performance in real RF chains</li>
                            </ul>
                            <p>Typical use cases</p>
                            <ul>
                                <li>Radar front-ends and sensing platforms</li>
                                <li>Satellite communication terminals and ground equipment</li>
                                <li>Electronic warfare (EW) and high-reliability switching front-ends</li>
                            </ul>
                            <p>Key performance highlights (typical)</p>
                            <ul>
                                <li>Frequency range: 9-12 GHz (X-Band)</li>
                                <li>Tx output power: 37 dBm (5 W)</li>
                                <li>Tx gain: &gt;25 dB</li>
                                <li>Rx gain: &gt;22 dB</li>
                                <li>Rx noise figure: &lt;2.5 dB</li>
                                <li>T/R isolation: &gt;25 dB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-fit-section">
                <div className="container">
                    <SectionHeader
                        alignment="center"
                        title={
                            <>
                                Where <span>XFEM9125</span> Fits
                            </>
                        }
                        description="XFEM9125 is built for X-band T/R front-ends where integration, fast switching, and repeatable performance matter most across radar, SatCom, EW, and sensing systems."
                    />

                    <div className="product-fit-grid">
                        {fitCards.map((card, index) => (
                            <article className="product-fit-card" key={`${card.title}-${index}`}>
                                <div className="product-fit-card__image">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="product-fit-card__content">
                                    <h4>{card.title}</h4>
                                    <p>{card.subtext}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;
