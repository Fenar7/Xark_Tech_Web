import React from 'react';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

const mapCards = [
    {
        title: 'Headquarters Address',
        embedSrc: 'https://www.google.com/maps?q=Kozhikode%2C%20Kerala%2C%20India&z=15&output=embed',
        href: 'https://www.google.com/maps/search/?api=1&query=Kozhikode%2C+Kerala%2C+India',
        frameTitle: 'Headquarters location map',
    },
    {
        title: 'Engineering / R&D Office',
        embedSrc: 'https://www.google.com/maps?q=Thiruvananthapuram%2C%20Kerala%2C%20India&z=15&output=embed',
        href: 'https://www.google.com/maps/search/?api=1&query=Thiruvananthapuram%2C+Kerala%2C+India',
        frameTitle: 'Engineering office location map',
    },
];

const MapSection = () => {
    return (
        <section className="map-section-container flex items-center justify-center">
            <div className="map-section container">
                <div className="map-section__title">
                    <SectionHeader
                        alignment="left"
                        title={
                            <>
                                Find <span>Us</span>
                            </>
                        }
                        description="Headquarters and Engineering / R&D Office locations."
                    />
                </div>

                <div className="map-container">
                    {mapCards.map((card) => (
                        <article className="map-card" key={card.title}>
                            <h3>{card.title}</h3>
                            <div className="map-frame">
                                <iframe
                                    src={card.embedSrc}
                                    title={card.frameTitle}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <a
                                    href={card.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-frame__overlay-link"
                                    aria-label={`Open ${card.title} in Google Maps`}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MapSection;
