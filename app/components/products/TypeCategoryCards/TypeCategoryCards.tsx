import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

export interface TypeCategoryCardItem {
    id: string;
    slug: string;
    title: string;
    subtext: string;
    icon: string;
}

interface TypeCategoryCardsProps {
    title?: string;
    items?: TypeCategoryCardItem[];
}

const TypeCategoryCards: React.FC<TypeCategoryCardsProps> = ({
    title = 'All Categories',
    items = [],
}) => {
    return (
        <section className="type-category-section-container flex items-center justify-center">
            <div className="type-category-section container">
                <h5>{title}</h5>

                {items.length > 0 ? (
                    <div className="type-category-grid">
                        {items.map((item) => (
                            <Link
                                href={`/products/category/${item.slug}`}
                                className="type-category-card"
                                key={item.id}
                            >
                                <div className="type-category-card__top">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={49}
                                        height={49}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="type-category-card__content">
                                    <h6>{item.title}</h6>
                                    <p className="type-category-card__subtext">{item.subtext}</p>
                                </div>

                                <span className="type-category-card__link">
                                    <span>Explore</span>
                                    <Image
                                        src="/images/icons/green-top-tick-arrow.png"
                                        alt=""
                                        width={20}
                                        height={20}
                                        aria-hidden="true"
                                    />
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="type-category-empty-state" role="status" aria-live="polite">
                        Product categories are being prepared. Check back shortly for the latest catalog.
                    </div>
                )}
            </div>
        </section>
    );
};

export default TypeCategoryCards;
