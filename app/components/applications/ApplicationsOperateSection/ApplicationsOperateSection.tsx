'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

export interface ApplicationsOperateItem {
    title: string;
    subtext: string;
    image: string;
}

interface ApplicationsOperateSectionProps {
    items?: ApplicationsOperateItem[];
}

const ITEMS_PER_PAGE = 12;
const EMPTY_ITEMS: ApplicationsOperateItem[] = [];

const ApplicationsOperateSection: React.FC<ApplicationsOperateSectionProps> = ({
    items,
}) => {
    const [page, setPage] = useState(1);
    const displayItems = items ?? EMPTY_ITEMS;
    const hasItems = displayItems.length > 0;

    const totalPages = Math.ceil(displayItems.length / ITEMS_PER_PAGE);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return displayItems.slice(start, start + ITEMS_PER_PAGE);
    }, [displayItems, page]);

    return (
        <section className="applications-operate-section">
            <div className="container">
                <SectionHeader
                    alignment="center"
                    title={
                        <>
                            Where It <span>Operates</span>
                        </>
                    }
                    description="Performance-critical environments where RF accuracy and system reliability are essential, guided by system-level requirements and real deployment conditions."
                />

                {hasItems ? (
                    <div className="applications-operate-grid">
                        {paginatedItems.map((item, index) => (
                            <article className="applications-operate-item" key={`${item.title}-${index}`}>
                                <div className="applications-operate-item__image-container">
                                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                                </div>

                                <div className="applications-operate-item__content">
                                    <h3>{item.title}</h3>
                                    <p>{item.subtext}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="applications-operate-empty-state" role="status" aria-live="polite">
                        No application sectors published yet. We are curating this section and it will appear here soon.
                    </div>
                )}

                {hasItems && totalPages > 1 && (
                    <div className="applications-operate-pagination">
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = pageNumber === page;

                            return (
                                <button
                                    key={pageNumber}
                                    type="button"
                                    className={isActive ? 'is-active' : ''}
                                    onClick={() => setPage(pageNumber)}
                                    aria-label={`Go to page ${pageNumber}`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ApplicationsOperateSection;
