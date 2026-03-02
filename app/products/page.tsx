import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import ProductsCatalog from '../components/products/ProductsCatalog/ProductsCatalog';
import {
    getProductApplicationOptions,
    getProductCards,
    getProductTypeOptions,
} from '@/sanity/lib/products';

const page = async () => {
    const [typeOptions, applicationOptions, productCards] = await Promise.all([
        getProductTypeOptions(),
        getProductApplicationOptions(),
        getProductCards(),
    ]);

    return (
        <main>
            <PageHeroSection
                title={
                    <>
                        Our <span>Products</span>
                    </>
                }
                description="A focused portfolio of MMICs, RF front-end modules, switches, LNAs, PAs, and antenna systems built for integration and repeatable performance."
                backgroundImage="/images/product-hero.png"
                backgroundAlt="Close-up technology background for products page"
                showButtons={false}
            />
            <ProductsCatalog
                typeOptions={typeOptions.map((item) => ({
                    id: item.id,
                    name: item.title,
                    icon: item.icon,
                }))}
                applicationOptions={applicationOptions.map((item) => ({
                    id: item.id,
                    name: item.title,
                    icon: item.icon,
                }))}
                products={productCards.map((item) => ({
                    id: item.id,
                    slug: item.slug,
                    title: item.title,
                    cardSubtext: item.cardSubtext,
                    icon: item.icon,
                    points: item.keyPoints,
                    enableDetailPage: item.enableDetailPage,
                    productTypeId: item.productTypeId,
                    productApplicationId: item.productApplicationId,
                }))}
            />
        </main>
    );
};

export default page;
