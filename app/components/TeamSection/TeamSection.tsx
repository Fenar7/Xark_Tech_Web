import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import './style.scss';

export interface TeamMember {
    name: string;
    designation: string;
    image: string;
    linkedinUrl?: string;
    imagePosition?: string;
}

interface TeamSectionProps {
    label?: string;
    title?: React.ReactNode;
    members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
    label = 'Our Team',
    title = 'Leadership',
    members,
}) => {
    return (
        <section className="team-section-container-main flex items-center justify-center">
            <div className="team-section container">
                <SectionHeader label={label} title={title} alignment="center" />

                <div className="team-cards-container">
                    {members.map((member) => (
                        <article className="team-item-card" key={member.name}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="team-item-card__image"
                                style={{ objectPosition: member.imagePosition ?? 'center' }}
                            />

                            <div className="content-container">
                                <div className="left-section">
                                    <h6>{member.name}</h6>
                                    <p>{member.designation}</p>
                                </div>

                                <a
                                    className="right-section"
                                    href={member.linkedinUrl ?? '#'}
                                    aria-label={`${member.name} LinkedIn`}
                                >
                                    <Image
                                        src="/images/icons/Vector-2.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
