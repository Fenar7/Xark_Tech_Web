import React from 'react';
import Image from 'next/image';
import ArrowButton from '../ui/ArrowButton/ArrowButton';
import './style.scss';

const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Company', href: '#company' },
    { label: 'Products', href: '#products' },
    { label: 'Applications', href: '#applications' },
    { label: 'News & Knowledge', href: '#news' },
    { label: 'Careers', href: '#careers' },
];

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo-link" aria-label="Xark home">
                        <Image
                            src="/images/xark-green.png"
                            alt="Xark logo"
                            width={260}
                            height={78}
                            className="header__logo"
                            priority
                        />
                    </a>

                    <nav className="header__nav" aria-label="Main navigation">
                        <ul className="header__nav-list">
                            {navLinks.map((link) => (
                                <li key={link.label} className="header__nav-item">
                                    <a
                                        href={link.href}
                                        className={`header__nav-link${link.active ? ' is-active' : ''}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header__cta">
                        <ArrowButton label="Contact us" variant="filled" href="#contact" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
