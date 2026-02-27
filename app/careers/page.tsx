import React from 'react';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import CareerItemsSection, {
    CareerItem,
} from '../components/careers/CareerItemsSection/CareerItemsSection';

const careerFilters = [
    'MMIC / RFIC Design',
    'RF & Microwave Subsystems',
    'Antenna & Phased Arrays',
    'RF Test, Validation & Characterization',
];

const careerJobs: CareerItem[] = [
    {
        id: 'career-rf-microwave-1',
        title: 'RF / Microwave Design Engineer',
        category: 'RF & Microwave Subsystems',
        experience: '3 Years',
        location: 'Thiruvananthapuram (R&D) / Kozhikode (HQ)',
        type: 'Full Time',
        summary:
            'Design and validate RF blocks and subsystems (LNA/PA/switching/front-end) from requirements to measured performance.',
        applyHref: '#',
    },
    {
        id: 'career-rf-microwave-2',
        title: 'RF / Microwave Design Engineer',
        category: 'RF Test, Validation & Characterization',
        experience: '3 Years',
        location: 'Thiruvananthapuram (R&D) / Kozhikode (HQ)',
        type: 'Full Time',
        summary:
            'Design and validate RF blocks and subsystems (LNA/PA/switching/front-end) from requirements to measured performance.',
        applyHref: '#',
    },
];

const page = () => {
    return (
        <main>
            <PageHeroSection
                label="Careers"
                title={
                    <>
                        Careers at <span>XARK</span>
                    </>
                }
                description="If you like hard RF problems, clean trade-offs, and repeatable measurement, you’ll fit in here."
                backgroundImage="/images/about-section-image.png"
                backgroundAlt="Engineering professionals working in an RF testing environment"
                showButtons={false}
            />

            <CareerItemsSection filters={careerFilters} jobs={careerJobs} />
        </main>
    );
};

export default page;
