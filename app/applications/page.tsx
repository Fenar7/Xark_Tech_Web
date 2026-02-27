import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import ApplicationsOperateSection from '../components/applications/ApplicationsOperateSection/ApplicationsOperateSection';
import { getOperateItems } from '@/sanity/lib/operateItems';

const page = async () => {
    const operateItems = await getOperateItems();

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
            <ApplicationsOperateSection items={operateItems} />
        </main>
    );
};

export default page;
