'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ArrowButton from '../components/ui/ArrowButton/ArrowButton';
import './style.scss';

const responsibilities = [
    'Translate requirements into RF design targets (gain, NF, linearity, output power, bandwidth, stability, switching, efficiency).',
    'Design RF/microwave circuits and subsystems including LNA/PA chains, switching, and compact front-end modules.',
    'Support system-level thinking during early architecture reviews (link budgets, interface constraints, integration losses).',
    'Run simulations and optimization loops; document assumptions and trade-offs clearly.',
    'Build test plans and validate performance using RF lab instruments (VNA, spectrum analyzer, signal sources, power measurement).',
    'Troubleshoot correlation gaps between simulation and measurement; iterate design and tuning.',
    'Maintain disciplined documentation: what was tested, what changed, and what results are repeatable.',
];

const mustHave = [
    '3 years of hands-on experience in RF/microwave design or subsystem development.',
    'Strong fundamentals: S-parameters, matching networks, stability, noise figure, compression, intermod/linearity.',
    'Practical measurement mindset and comfort in the lab (VNA and spectrum measurements).',
    'Ability to communicate design decisions and trade-offs clearly.',
];

const goodToHave = [
    'Experience with X/Ku/Ka band work or high-frequency front-end design.',
    'Familiarity with GaN/GaAs front-end blocks or high-power RF.',
    'Experience supporting antenna or phased-array integration constraints.',
    'Experience taking a design from requirements -> prototype -> measured validation.',
];

const CareerDetailPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [shouldRenderForm, setShouldRenderForm] = useState(false);
    const formWrapRef = useRef<HTMLDivElement>(null);

    const handleToggleForm = () => {
        if (!isFormOpen) {
            setShouldRenderForm(true);
            setIsFormOpen(true);
            return;
        }

        setIsFormOpen(false);
    };

    useEffect(() => {
        const wrap = formWrapRef.current;
        if (!wrap || !shouldRenderForm) return;

        gsap.killTweensOf(wrap);

        if (isFormOpen) {
            gsap.set(wrap, { display: 'block', height: 'auto' });
            const nextHeight = wrap.offsetHeight;

            gsap.fromTo(
                wrap,
                { height: 0, autoAlpha: 0, y: -8 },
                {
                    height: nextHeight,
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.45,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.set(wrap, { height: 'auto' });
                    },
                },
            );

            gsap.fromTo(
                wrap.querySelectorAll('.career-form-row, .career-form-submit'),
                { autoAlpha: 0, y: 10 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.28,
                    stagger: 0.04,
                    ease: 'power2.out',
                    delay: 0.08,
                },
            );

            return;
        }

        gsap.set(wrap, { height: wrap.offsetHeight });
        gsap.to(wrap, {
            height: 0,
            autoAlpha: 0,
            y: -6,
            duration: 0.34,
            ease: 'power2.inOut',
            onComplete: () => {
                setShouldRenderForm(false);
                gsap.set(wrap, { clearProps: 'all' });
            },
        });
    }, [isFormOpen, shouldRenderForm]);

    return (
        <main className="career-detail-page-container">
            <section className="career-detail-section">
                <div className="container">
                    <div className="career-detail-content">
                        <h1>RF / Microwave Design Engineer</h1>

                        <div className="career-detail-meta">
                            <p>
                                <strong>Experience:</strong> 3 Years
                            </p>
                            <p>
                                <strong>Location:</strong> Thiruvananthapuram (R&amp;D) / Kozhikode (HQ)
                            </p>
                            <p>
                                <strong>Type:</strong> Full Time
                            </p>
                            <p>
                                <strong>Summary:</strong> Design and validate RF blocks and subsystems
                                (LNA/PA/switching/front-end) from requirements to measured performance.
                            </p>
                        </div>

                        <div className="career-detail-block">
                            <h2>What You&apos;ll Work On</h2>
                            <p>
                                You&apos;ll contribute to RF building blocks and subsystems used in
                                performance-critical sensing and connectivity systems. The role is
                                engineering-heavy: define targets, run trade-offs, execute design, validate in
                                the lab, and iterate until results are stable and repeatable.
                            </p>
                        </div>

                        <div className="career-detail-block">
                            <h2>Responsibilities</h2>
                            <ul>
                                {responsibilities.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="career-detail-block">
                            <h2>Requirements (Must-Have)</h2>
                            <ul>
                                {mustHave.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="career-detail-block">
                            <h2>Good to Have</h2>
                            <ul>
                                {goodToHave.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="career-detail-block career-detail-block--apply">
                            <h2>Apply</h2>
                            <p>
                                Submit your resume through the application form or send it to:
                                <br />
                                engineering@xark.info
                            </p>

                            <div className="career-detail-apply-btn">
                                <ArrowButton
                                    label={isFormOpen ? 'Close Form' : 'Apply Now'}
                                    variant="filled"
                                    onClick={handleToggleForm}
                                />
                            </div>
                        </div>

                        {shouldRenderForm && (
                            <div ref={formWrapRef} className="career-apply-form-wrap">
                                <form
                                    className="career-apply-form"
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                    }}
                                >
                                    <div className="career-form-row career-form-row--two">
                                        <label className="career-form-field">
                                            <span>Name</span>
                                            <input type="text" placeholder="Enter your full name" required />
                                        </label>
                                        <label className="career-form-field">
                                            <span>Phone</span>
                                            <input
                                                type="tel"
                                                inputMode="tel"
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </label>
                                    </div>

                                    <div className="career-form-row">
                                        <label className="career-form-field">
                                            <span>Email</span>
                                            <input type="email" placeholder="Enter your email" required />
                                        </label>
                                    </div>

                                    <div className="career-form-row">
                                        <label className="career-form-field">
                                            <span>CV Upload</span>
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                className="career-file-input"
                                                required
                                            />
                                        </label>
                                    </div>

                                    <button type="submit" className="career-form-submit">
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CareerDetailPage;
