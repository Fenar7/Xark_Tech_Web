"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        quote: 'At Xark, we are driven by engineering excellence, ownership, and measurable performance. We believe in merit-based growth, disciplined execution, and continuous learning, building high-frequency semiconductor and RF technologies with long-term vision, technical rigor, and global standards.',
        name: 'Abid Nishad',
        role: 'Founder & Chairman',
    },
    {
        quote: 'We focus on system-first decisions and measurable outcomes. Every milestone is guided by performance targets, transparent ownership, and long-term technical reliability.',
        name: 'Ajit Devraj',
        role: 'Founder and CEO',
    },
    {
        quote: 'Execution quality, review discipline, and deep RF fundamentals are central to how we build products that sustain performance across real deployment conditions.',
        name: 'Dr. Elizabeth George',
        role: 'Chief RF Solutions Architect',
    },
];

const cultureIntro =
    'At Xark, we are driven by engineering excellence, ownership, and measurable performance. We believe in merit-based growth, disciplined execution, and continuous learning, building high-frequency semiconductor and RF technologies with long-term vision, technical rigor, and global standards.';

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const active = testimonials[activeIndex];
    const quoteIconRef = useRef<HTMLImageElement | null>(null);
    const quoteTextRef = useRef<HTMLParagraphElement | null>(null);
    const authorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const icon = quoteIconRef.current;
        const quote = quoteTextRef.current;
        const author = authorRef.current;

        if (!icon || !quote || !author) return;

        const timeline = gsap.timeline();
        timeline
            .fromTo(
                icon,
                { autoAlpha: 0, y: 10, scale: 0.92 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.36, ease: 'power3.out' }
            )
            .fromTo(
                quote,
                { autoAlpha: 0, y: 14 },
                { autoAlpha: 1, y: 0, duration: 0.44, ease: 'power3.out' },
                0.06
            )
            .fromTo(
                author,
                { autoAlpha: 0, y: 10 },
                { autoAlpha: 1, y: 0, duration: 0.36, ease: 'power3.out' },
                0.14
            );

        return () => {
            timeline.kill();
        };
    }, [activeIndex]);

    useEffect(() => {
        if (isPaused) return;

        const intervalId = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5200);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [isPaused]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="testimonial-section-container-main flex items-center justify-center">
            <div className="testimonial-section container">
                <SectionHeader
                    title={
                        <>
                            Xark <span>Culture</span>
                        </>
                    }
                    description={cultureIntro}
                    alignment="center"
                />

                <div
                    className="testimonial-slider"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <button
                        type="button"
                        className="testimonial-arrow testimonial-arrow--left"
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                    >
                        <Image
                            src="/images/icons/green-left-arrow.png"
                            alt=""
                            width={21}
                            height={40}
                            aria-hidden="true"
                        />
                    </button>

                    <article className="testimonial-card" key={`${active.name}-${activeIndex}`}>
                        <Image
                            src="/images/icons/quote-green.png"
                            alt=""
                            width={66}
                            height={53}
                            ref={quoteIconRef}
                            className="testimonial-card__quote-icon"
                            aria-hidden="true"
                        />

                        <p className="testimonial-card__quote" ref={quoteTextRef}>
                            {active.quote}
                        </p>

                        <div className="testimonial-card__author" ref={authorRef}>
                            <h6>{active.name}</h6>
                            <p>{active.role}</p>
                        </div>
                    </article>

                    <button
                        type="button"
                        className="testimonial-arrow testimonial-arrow--right"
                        onClick={handleNext}
                        aria-label="Next testimonial"
                    >
                        <Image
                            src="/images/icons/green-left-arrow.png"
                            alt=""
                            width={21}
                            height={40}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
