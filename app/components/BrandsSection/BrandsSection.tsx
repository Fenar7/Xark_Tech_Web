'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import './style.scss';

interface ClientLogo {
    src: string;
    alt: string;
}

const clientLogos: ClientLogo[] = [
    { src: '/images/client-1.svg', alt: 'Unistring Tech Solutions' },
    { src: '/images/client-2.svg', alt: 'Dassault Systemes Simulia' },
    { src: '/images/client-3.svg', alt: 'Keysight' },
];

const slidingLogos: ClientLogo[] = [...clientLogos, ...clientLogos];

const BrandsSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const pauseAutoslideTemporarily = () => {
        setIsPaused(true);

        if (resumeTimerRef.current) {
            clearTimeout(resumeTimerRef.current);
        }

        resumeTimerRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 1400);
    };

    const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        if (!slider) return;

        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            event.preventDefault();
            slider.scrollLeft += event.deltaY;
            pauseAutoslideTemporarily();
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrameId = 0;
        const scrollSpeedPerFrame = 0.55;

        const animate = () => {
            if (!isPaused) {
                slider.scrollLeft += scrollSpeedPerFrame;

                const loopPoint = slider.scrollWidth / 2;
                if (slider.scrollLeft >= loopPoint) {
                    slider.scrollLeft -= loopPoint;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused]);

    useEffect(() => {
        return () => {
            if (resumeTimerRef.current) {
                clearTimeout(resumeTimerRef.current);
            }
        };
    }, []);

    return (
        <section className="brands-section bg-black py-[80px] md:py-[120px]">
            <div className="container">
                <SectionHeader
                    label="Clients"
                    title={
                        <>
                            Trusted <span>By</span> | Built <span>With</span>
                        </>
                    }
                    alignment="center"
                />

                <div className="brands-slider-wrapper">
                    <div
                        ref={sliderRef}
                        className="brands-slider"
                        aria-label="Client logos slider"
                        onWheel={handleWheelScroll}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={pauseAutoslideTemporarily}
                        onTouchMove={pauseAutoslideTemporarily}
                        onTouchEnd={pauseAutoslideTemporarily}
                    >
                        <div className="brands-slider__track">
                            {slidingLogos.map((logo, index) => (
                                <div className="brands-slider__item" key={`${logo.alt}-${index}`}>
                                    <div className="brands-slider__logo-box">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            fill
                                            sizes="(max-width: 768px) 220px, (max-width: 1200px) 280px, 320px"
                                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
