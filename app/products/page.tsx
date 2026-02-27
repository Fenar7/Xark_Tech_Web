import React from 'react';
import Header from '../components/Header/Header';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import CategoryFilter from '../components/products/CategoryFilter/CategoryFilter';

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
                showButtons={false}
            />

            <CategoryFilter/>
        </main>
    );
};

export default page;
