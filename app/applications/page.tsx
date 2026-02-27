import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';

const page = () => {
    return (
        <main>
            <PageHeroSection
                title={
                    <>
                        Our <span>Applications</span>
                    </>
                }
                description="MMICs, FEMs, LNAs, PAs, switches, and antennas engineered to perform inside real RF chains."
                backgroundImage="/images/hero-image.png"
                backgroundAlt="RF infrastructure application background"
                showButtons={false}
            />
        </main>
    );
};

export default page;
