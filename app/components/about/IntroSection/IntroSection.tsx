import React from 'react';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

const metrics = [
    { value: '7', label: 'Global Facilities' },
    { value: '12+', label: 'Years of RF experience' },
    { value: '20+', label: 'Innovative patents' },
    { value: '1000+', label: 'International employees' },
];

const IntroSection = () => {
    return (
        <div className="intro-section-container flex items-center justify-center">
            <div className="intro-section container">
                <SectionHeader
                    label="About Xark"
                    title={
                        <>
                            Engineered for <span>RF Systems Across Sectors</span>
                        </>
                    }
                    alignment="left"
                />

                <p className="intro-section__description">
                    XARK is a deep-tech, fabless RF company designing MMICs, RF subsystems, and antenna
                    systems for performance-critical wireless and sensing applications. We work with a
                    system-first mindset, so every design is guided by integration needs, validation
                    discipline, and real deployment conditions across defence, space, telecommunications,
                    and smart infrastructure.
                </p>

                <div className="metrics-section">
                    {metrics.map((item) => (
                        <div className="metrics-item" key={item.label}>
                            <h6>{item.value}</h6>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
