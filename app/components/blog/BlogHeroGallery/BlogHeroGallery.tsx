'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './style.scss';

export interface BlogHeroGalleryImage {
    src: string;
    alt: string;
}

interface BlogHeroGalleryProps {
    images: BlogHeroGalleryImage[];
    title: string;
}

const BlogHeroGallery = ({ images, title }: BlogHeroGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const safeActiveIndex = activeIndex < images.length ? activeIndex : 0;
    const activeImage = images[safeActiveIndex];
    const hasMultipleImages = images.length > 1;

    const goToPrevious = () => {
        if (!hasMultipleImages) return;
        setActiveIndex((prev) => {
            const currentIndex = prev < images.length ? prev : 0;
            return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        });
    };

    const goToNext = () => {
        if (!hasMultipleImages) return;
        setActiveIndex((prev) => {
            const currentIndex = prev < images.length ? prev : 0;
            return (currentIndex + 1) % images.length;
        });
    };

    useEffect(() => {
        if (!isLightboxOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false);
                return;
            }

            if (event.key === 'ArrowLeft' && hasMultipleImages) {
                setActiveIndex((prev) => {
                    const currentIndex = prev < images.length ? prev : 0;
                    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                });
            }

            if (event.key === 'ArrowRight' && hasMultipleImages) {
                setActiveIndex((prev) => {
                    const currentIndex = prev < images.length ? prev : 0;
                    return (currentIndex + 1) % images.length;
                });
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [hasMultipleImages, images.length, isLightboxOpen]);

    if (!activeImage) {
        return null;
    }

    return (
        <>
            <section className="blog-detail-hero-media">
                <button
                    type="button"
                    className="blog-detail-hero-media__frame"
                    onClick={() => setIsLightboxOpen(true)}
                    aria-label={`Open image gallery for ${title}`}
                >
                    <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 90vw"
                        className="blog-detail-hero-media__image"
                    />
                </button>

                <div className="blog-detail-hero-media__toolbar">
                    <span className="blog-detail-hero-media__count">
                        {safeActiveIndex + 1} / {images.length}
                    </span>

                    {hasMultipleImages && (
                        <div className="blog-detail-hero-media__controls">
                            <button
                                type="button"
                                className="blog-detail-gallery-arrow blog-detail-gallery-arrow--left"
                                onClick={goToPrevious}
                                aria-label="Show previous image"
                            >
                                <Image
                                    src="/images/icons/green-left-arrow.png"
                                    alt=""
                                    width={20}
                                    height={36}
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                type="button"
                                className="blog-detail-gallery-arrow blog-detail-gallery-arrow--right"
                                onClick={goToNext}
                                aria-label="Show next image"
                            >
                                <Image
                                    src="/images/icons/green-left-arrow.png"
                                    alt=""
                                    width={20}
                                    height={36}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {isLightboxOpen && (
                <div
                    className="blog-gallery-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${title} image gallery`}
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div
                        className="blog-gallery-lightbox__content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="blog-gallery-lightbox__close"
                            onClick={() => setIsLightboxOpen(false)}
                            aria-label="Close image gallery"
                        >
                            Close
                        </button>

                        {hasMultipleImages && (
                            <button
                                type="button"
                                className="blog-detail-gallery-arrow blog-detail-gallery-arrow--left blog-detail-gallery-arrow--modal"
                                onClick={goToPrevious}
                                aria-label="Show previous image"
                            >
                                <Image
                                    src="/images/icons/green-left-arrow.png"
                                    alt=""
                                    width={22}
                                    height={40}
                                    aria-hidden="true"
                                />
                            </button>
                        )}

                        <div className="blog-gallery-lightbox__image-wrap">
                            <Image
                                src={activeImage.src}
                                alt={activeImage.alt}
                                fill
                                quality={100}
                                sizes="100vw"
                                className="blog-gallery-lightbox__image"
                            />
                        </div>

                        {hasMultipleImages && (
                            <button
                                type="button"
                                className="blog-detail-gallery-arrow blog-detail-gallery-arrow--right blog-detail-gallery-arrow--modal"
                                onClick={goToNext}
                                aria-label="Show next image"
                            >
                                <Image
                                    src="/images/icons/green-left-arrow.png"
                                    alt=""
                                    width={22}
                                    height={40}
                                    aria-hidden="true"
                                />
                            </button>
                        )}

                        <div className="blog-gallery-lightbox__footer">
                            <span className="blog-gallery-lightbox__caption">{activeImage.alt}</span>
                            <span className="blog-gallery-lightbox__count">
                                {safeActiveIndex + 1} / {images.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogHeroGallery;
