import React from 'react';
import Header from '../components/Header/Header';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';

const page = () => {
    return (
        <main>
            <Header />
            <PageHeroSection
                title={
                    <>
                        Our <span>Products</span>
                    </>
                }
                description="A focused portfolio of MMICs, RF front-end modules, switches, LNAs, PAs, and antenna systems built for integration and repeatable performance."
                backgroundImage="/images/hero-image.png"
                backgroundAlt="Close-up technology background for products page"
                primaryButtonLabel="Explore Products"
                primaryButtonHref="#products"
                secondaryButtonLabel="Talk to Engineering"
                secondaryButtonHref="#contact"
            />
        </main>
    );
};

export default page;
