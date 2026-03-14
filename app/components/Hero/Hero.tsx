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
            <div className="hero__inner container h-full w-full relative z-10 flex items-end">
                <div className="hero__content w-full flex flex-col xl:flex-row xl:items-end justify-between gap-10">
                    <div className="hero__text">
                        <h1 className="hero__title">
                            GaN RF design for radar, SatCom, and telecom infrastructure.
                        </h1>
                        <p className="hero__subtext">
                            We design GaN and RF building blocks including MMICs, front-end modules, power
                            amplifiers, and phased-array subsystems for defence electronics, space and SatCom,
                            and telecom infrastructure. Engineered in India and validated for repeatable
                            deployment performance.
                        </p>
                    </div>

                    <div className="hero__buttons">
                        <ArrowButton label="Explore Products" variant="outline" href="/products" />
                        <ArrowButton label="Contact us" variant="filled" href="/contact" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
