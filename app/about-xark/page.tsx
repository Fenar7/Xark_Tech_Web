import React from 'react';
import Header from '../components/Header/Header';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import IntroSection from '../components/about/IntroSection/IntroSection';
import KeyPointsSection from '../components/about/KeyPointsSection/KeyPointsSection';

const page = () => {
    return (
        <main>
            <Header />
            <PageHeroSection
                title={
                    <>
                        About <span>Xark</span>
                    </>
                }
                description="System-first RF engineering for critical connectivity and sensing."
                backgroundImage="/images/about-section-image.png"
                backgroundAlt="Robotics and precision engineering setup"
                primaryButtonLabel="Explore Products"
                primaryButtonHref="#products"
                secondaryButtonLabel="Talk to Engineering"
                secondaryButtonHref="#contact"
            />
            <IntroSection />
            <KeyPointsSection />
        </main>
    );
};

export default page;
