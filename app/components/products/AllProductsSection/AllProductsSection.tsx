import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

export interface ProductCardItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    points: string[];
    href: string;
}

interface AllProductsSectionProps {
    title?: string;
    items?: ProductCardItem[];
}

const defaultItems: ProductCardItem[] = [
    {
        id: 'xfem9125',
        title: 'XFEM9125 - X-Band FEM',
        description:
            'Integrated GaN front-end module for radar and SatCom transmit/receive systems.',
        icon: '/images/icons/p-type/p1.png',
        points: ['PA + LNA + T/R switch', '9-12 GHz', '5 W (37 dBm)'],
        href: '#',
    },
    {
        id: 'xs9125',
        title: 'XS9125 - X-Band T/R Switch',
        description:
            'Integrated GaN front-end module for radar and SatCom transmit/receive systems.',
        icon: '/images/icons/p-type/p2.png',
        points: ['<50 ns switching', '>25 dB isolation', '9-12 GHz'],
        href: '#',
    },
    {
        id: 'xa2830',
        title: 'XA2830 - Ka-Band Phased Array',
        description:
            'Integrated GaN front-end module for radar and SatCom transmit/receive systems.',
        icon: '/images/icons/p-type/p4.png',
        points: ['High-speed T/R', '>25 dB isolation', '12-16 GHz'],
        href: '#',
    },
];

const AllProductsSection: React.FC<AllProductsSectionProps> = ({
    title = 'All Products',
    items = defaultItems,
}) => {
    return (
        <section className="all-products-section-container flex items-center justify-center">
            <div className="all-products-section container">
                <h5>{title}</h5>

                <div className="products-container">
                    {items.map((item) => (
                        <article className="product-item" key={item.id}>
                            <div className="product-item__top">
                                <Image
                                    src={item.icon}
                                    alt=""
                                    width={49}
                                    height={49}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="product-item__content">
                                <h6>{item.title}</h6>
                                <p className="product-item__description">{item.description}</p>

                                <ul className="product-item__points">
                                    {item.points.map((point) => (
                                        <li key={point}>
                                            <Image
                                                src="/images/icons/green-tick.png"
                                                alt=""
                                                width={19}
                                                height={19}
                                                aria-hidden="true"
                                            />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={item.href} className="product-item__link">
                                <span>Know More</span>
                                <Image
                                    src="/images/icons/green-top-tick-arrow.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                    aria-hidden="true"
                                />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProductsSection;
