import React from 'react';
import Image from 'next/image';
import './ArrowButton.scss';

interface ArrowButtonProps {
    label: string;
    variant?: 'outline' | 'filled';
    onClick?: () => void;
    href?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
    label,
    variant = 'outline',
    onClick,
    href,
}) => {
    const content = (
        <span className={`arrow-btn arrow-btn--${variant}`}>
            <span className="arrow-btn__label">{label}</span>
            <span className="arrow-btn__icon">
                <Image
                    src="/images/up-arrow-icon.png"
                    alt="arrow"
                    width={20}
                    height={20}
                />
            </span>
        </span>
    );

    if (href) {
        return (
            <a href={href} className="arrow-btn-wrapper">
                {content}
            </a>
        );
    }

    return (
        <button className="arrow-btn-wrapper" onClick={onClick}>
            {content}
        </button>
    );
};

export default ArrowButton;
