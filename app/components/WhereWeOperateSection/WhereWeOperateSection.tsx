import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import ArrowButton from '../ui/ArrowButton/ArrowButton';
import './style.scss';

const operationData = [
    {
        title: 'Defence',
        subtext: 'Engineered for radar, EW, and secure communication links in demanding environments.',
        image: '/images/about-section-image.png', // Placeholder until real images are provided
    },
    {
        title: 'Space',
        subtext: 'Engineered for SatCom terminals and sensing payloads requiring stable RF performance.',
        image: '/images/about-section-image.png',
    },
    {
        title: 'Telecom',
        subtext: 'Engineered for infrastructure and high-frequency wireless platforms where efficiency matters.',
        image: '/images/about-section-image.png',
    },
    {
        title: 'Automobile',
        subtext: 'Engineered for V2X, telematics, and radar front-ends in connected vehicles, where reliable RF performance matters.',
        image: '/images/about-section-image.png',
    },
    {
        title: 'Consumer Systems',
        subtext: 'Engineered for compact wireless devices needing consistent connectivity and integration.',
        image: '/images/about-section-image.png',
    },
];

const WhereWeOperateSection = () => {
    return (
        <section className="where-we-operate-section bg-black py-[80px] md:py-[120px]">
            <div className="container">

                <SectionHeader
                    label="Sectors & Applications"
                    title={<>Where We <span className="text-cta-green">Operates</span></>}
                    description="Performance-critical environments where RF accuracy and system reliability are essential, guided by system-level requirements and real deployment conditions."
                    alignment="center"
                />

                <div className="operate-items-container mt-16 md:mt-24">
                    {operationData.map((item, index) => (
                        <div className="operate-item" key={index}>
                            <div className="operate-item__image-container">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="operate-item__content">
                                <h3 className="operate-item__title">{item.title}</h3>
                                <p className="operate-item__subtext">{item.subtext}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="operate-button-row mt-16 md:mt-20 flex justify-center">
                    <ArrowButton label="Explore our capabilities" variant="filled" href="/capabilities" />
                </div>

            </div>
        </section>
    );
};

export default WhereWeOperateSection;