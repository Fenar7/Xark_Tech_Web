import React from 'react';
import Header from '../components/Header/Header';
import PageHeroSection from '../components/PageHeroSection/PageHeroSection';
import IntroSection from '../components/about/IntroSection/IntroSection';
import KeyPointsSection from '../components/about/KeyPointsSection/KeyPointsSection';
import TeamSection, { TeamMember } from '../components/TeamSection/TeamSection';
import TestimonialSection from '../components/about/TestimonialSection/TestimonialSection';

const leadershipMembers: TeamMember[] = [
    {
        name: 'Abid Nishad',
        designation: 'Founder & Chairman',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
    {
        name: 'Ajit Devraj',
        designation: 'Founder and CEO',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
    {
        name: 'Dr. Elizabeth George',
        designation: 'Chief RF Solutions Architect',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
    {
        name: 'CA Krishnakumar Unni',
        designation: 'Chief Finance Officer',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
];

const technicalAdvisors: TeamMember[] = [
    {
        name: 'Alan Calder III',
        designation: 'Technical Advisor, Ex-Qorvo',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
    {
        name: 'Sudhakhar Rao',
        designation: 'Technical Advisor, Ex-Northrop Grumman',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
    {
        name: 'David',
        designation: 'Technical Advisor, Ex-NXP',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
    {
        name: 'Anurag Bhargava',
        designation: 'Industrial Expert Keysight',
        image: '/images/about-section-image.png',
        imagePosition: 'center',
        linkedinUrl: '#',
    },
];

const page = () => {
    return (
        <main>
            <Header />
            <PageHeroSection
                title={
                    <>
                        About <span>Xark</span>
                    </>
                }
                description="System-first RF engineering for critical connectivity and sensing."
                backgroundImage="/images/about-section-image.png"
                backgroundAlt="Robotics and precision engineering setup"
                primaryButtonLabel="Explore Products"
                primaryButtonHref="#products"
                secondaryButtonLabel="Talk to Engineering"
                secondaryButtonHref="#contact"
            />
            <IntroSection />
            <KeyPointsSection />
            <TeamSection label="Our Team" title="Leadership" members={leadershipMembers} />
            <TeamSection label="Our Team" title="Technical Advisors" members={technicalAdvisors} />
            <TestimonialSection/>
        </main>
    );
};

export default page;
