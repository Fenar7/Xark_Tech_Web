import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import CategoryFilter from '../components/products/CategoryFilter/CategoryFilter';
import AllProductsSection from '../components/products/AllProductsSection/AllProductsSection';

const page = () => {
    return (
        <main>
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
            <AllProductsSection />
        </main>
    );
};

export default page;
