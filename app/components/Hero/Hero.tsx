import React from 'react';
import Image from 'next/image';
import ArrowButton from '../ui/ArrowButton/ArrowButton';
import './style.scss';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background image */}
            <div className="hero__bg">
                <Image
                    src="/images/hero-image.png"
                    alt="Hero background"
                    fill
                    priority
                    quality={95}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Gradient overlays */}
                <div className="hero__gradient" />
            </div>

            {/* Content */}
            <div className="container h-full w-full relative z-10 flex items-end pb-[40px] md:pb-[60px] lg:pb-[80px]">
                <div className="hero__content w-full flex flex-col xl:flex-row xl:items-end justify-between gap-10">
                    <div className="hero__text">
                        <h1 className="hero__title">
                            Focused RF design for infrastructure the world depends on.
                        </h1>
                        <p className="hero__subtext">
                            We build high-performance RF building blocks for radar and SatCom, base stations,
                            vehicle connectivity, and public-safety networks. Designed in India and validated
                            to integrate reliably in real deployments.
                        </p>
                    </div>

                    <div className="hero__buttons">
                        <ArrowButton label="Explore Solutions" variant="outline" href="#solutions" />
                        <ArrowButton label="Contact us" variant="filled" href="#contact" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;