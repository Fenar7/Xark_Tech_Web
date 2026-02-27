import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';

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
        </main>
    );
};

export default page;
