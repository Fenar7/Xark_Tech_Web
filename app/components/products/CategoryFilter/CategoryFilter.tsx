'use client';

import React from 'react';
import Image from 'next/image';
import './style.scss';

export interface CategoryFilterItem {
    id: string;
    name: string;
    icon: string;
}

export interface CategoryFilterGroup {
    title: string;
    items: CategoryFilterItem[];
}

interface CategoryFilterProps {
    groups?: CategoryFilterGroup[];
    activeItemId?: string;
    onItemSelect?: (item: CategoryFilterItem) => void;
}

const defaultGroups: CategoryFilterGroup[] = [
    {
        title: 'Products by Type',
        items: [
            { id: 'fem', name: 'Front-End Modules (FEM)', icon: '/images/icons/p-type/p1.png' },
            { id: 'tr-switches', name: 'T/R Switches', icon: '/images/icons/p-type/p2.png' },
            { id: 'pa', name: 'Power Amplifiers (PA)', icon: '/images/icons/p-type/p3.png' },
            { id: 'phased-array', name: 'Phased-Array Antennas', icon: '/images/icons/p-type/p4.png' },
            {
                id: 'omni-antennas',
                name: 'Omnidirectional Antennas',
                icon: '/images/icons/p-type/p5.png',
            },
        ],
    },
    {
        title: 'Products by Application',
        items: [
            { id: 'radar', name: 'Radar & Sensing', icon: '/images/icons/c-type/image 12.png' },
            { id: 'satcom', name: 'SatCom', icon: '/images/icons/c-type/image 12-1.png' },
            {
                id: 'wireless-infra',
                name: 'Wireless Infrastructure',
                icon: '/images/icons/c-type/image 12-2.png',
            },
            {
                id: 'iot-smart',
                name: 'IoT & Smart Infrastructure',
                icon: '/images/icons/c-type/image 12-3.png',
            },
            {
                id: 'ew-links',
                name: 'EW / High-Reliability Links',
                icon: '/images/icons/c-type/image 12-4.png',
            },
        ],
    },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    groups = defaultGroups,
    activeItemId,
    onItemSelect,
}) => {
    return (
        <section className="category-filter-container flex items-center justify-center">
            <div className="category-filter container">
                {groups.map((group) => (
                    <div className="category-filter__group" key={group.title}>
                        <h5>{group.title}</h5>

                        <div className="filter-items-container">
                            {group.items.map((item) => (
                                <button
                                    type="button"
                                    key={item.id}
                                    className={`filter-item${activeItemId === item.id ? ' is-active' : ''}`}
                                    onClick={() => onItemSelect?.(item)}
                                >
                                    <Image src={item.icon} alt="" width={45} height={45} aria-hidden="true" />
                                    <p>{item.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryFilter;
