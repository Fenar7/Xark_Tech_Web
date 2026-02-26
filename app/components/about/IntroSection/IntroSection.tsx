'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

const metrics = [
    { value: 7, label: 'Global Facilities', hasPlus: false },
    { value: 12, label: 'Years of RF experience', hasPlus: true },
    { value: 20, label: 'Innovative patents', hasPlus: true },
    { value: 1000, label: 'International employees', hasPlus: true },
];

const IntroSection = () => {
    const metricsSectionRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const hasAnimatedRef = useRef(false);

    const setCounterRef = (index: number, element: HTMLSpanElement | null) => {
        counterRefs.current[index] = element;
    };

    useEffect(() => {
        const metricsSection = metricsSectionRef.current;
        if (!metricsSection) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const animateCounters = () => {
            if (hasAnimatedRef.current) return;
            hasAnimatedRef.current = true;

            const timeline = gsap.timeline();

            metrics.forEach((metric, index) => {
                const element = counterRefs.current[index];
                if (!element) return;

                if (prefersReducedMotion) {
                    element.textContent = String(metric.value);
                    return;
                }

                const counterProxy = { value: 0 };
                timeline.to(
                    counterProxy,
                    {
                        value: metric.value,
                        duration: metric.value >= 1000 ? 1.8 : 1.45,
                        ease: 'power4.out',
                        onUpdate: () => {
                            element.textContent = String(Math.round(counterProxy.value));
                        },
                    },
                    index * 0.12
                );
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.35 }
        );

        observer.observe(metricsSection);

        return () => {
            observer.disconnect();
        };
    }, []);

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

                <div className="metrics-section" ref={metricsSectionRef}>
                    {metrics.map((item, index) => (
                        <div className="metrics-item" key={item.label}>
                            <h6>
                                <span ref={(el) => setCounterRef(index, el)} className="metric-value">
                                    0
                                </span>
                                {item.hasPlus && <span className="metric-plus">+</span>}
                            </h6>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
