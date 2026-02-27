import React from 'react';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import './style.scss';

const addressBlocks = [
    {
        title: 'Headquarters Address',
        icon: 'building',
        lines: [
            'AK Tower, Mini Bypass Rd Products',
            'Kalluthankadavu, Puthiyara Applications',
            'Kozhikode, Kerala, India, 673004',
        ],
    },
    {
        title: 'Engineering / R&D Office',
        icon: 'settings',
        lines: [
            'Xark Technologies Pvt. Ltd',
            'TC 1/3215/1, Laham Complex, Vettu Road',
            'Kazhakootam',
            'Thiruvananthapuram, Kerala, 695582',
        ],
    },
];

const socialLinks = [
    { name: 'Instagram', href: '#', modifier: 'instagram' },
    { name: 'LinkedIn', href: '#', modifier: 'linkedin' },
];

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M3.75 6.75h16.5c.41 0 .75.34.75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9c0-.41.34-.75.75-.75Zm0 0 8.25 6 8.25-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
    </svg>
);

const ContactSection = () => {
    return (
        <section className="contact-section-container flex items-center justify-center">
            <div className="contact-section container">
                <div className="left-section contact-info-section">
                    <div className="title-section">
                        <SectionHeader
                            alignment="left"
                            title={
                                <>
                                    Start the <span>Conversation</span>
                                </>
                            }
                            description="For design services, partnerships, or general inquiries, reach us here. We’ll route you to the right team."
                        />
                    </div>

                    <div className="email-row">
                        <div className="email-icon-wrapper">
                            <EmailIcon />
                        </div>
                        <div className="email-groups">
                            <div className="email-item">
                                <p className="email-item__label">Business and Partnership</p>
                                <a href="mailto:growth@xark.info" className="email-item__value">
                                    growth@xark.info
                                </a>
                            </div>
                            <div className="email-item">
                                <p className="email-item__label">Design Services</p>
                                <a href="mailto:engineering@xark.info" className="email-item__value">
                                    engineering@xark.info
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-container">
                        {addressBlocks.map((block) => (
                            <div className="contact-item" key={block.title}>
                                <span
                                    className={`contact-item__icon contact-item__icon--${block.icon}`}
                                    aria-hidden="true"
                                />

                                <div className="contact-item__info">
                                    <h4>{block.title}</h4>
                                    {block.lines.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="social-media-icons-container">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-label={item.name}
                                className={`social-link social-link--${item.modifier}`}
                            >
                                <span
                                    className={`social-link__icon social-link__icon--${item.modifier}`}
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="right-section contact-form-section">
                    <form className="contact-form" action="#">
                        <div className="form-row form-row--two">
                            <label className="form-field">
                                <span>Name</span>
                                <input type="text" placeholder="Enter your First Name" />
                            </label>
                            <label className="form-field">
                                <span>Phone</span>
                                <input type="tel" placeholder="Enter your Phone Number" />
                            </label>
                        </div>

                        <div className="form-row form-row--two">
                            <label className="form-field">
                                <span>Company Name</span>
                                <input type="text" placeholder="Enter your First Name" />
                            </label>
                            <label className="form-field">
                                <span>City</span>
                                <input type="text" placeholder="Enter your city" />
                            </label>
                        </div>

                        <div className="form-row">
                            <label className="form-field">
                                <span>Street Address</span>
                                <input type="text" placeholder="Enter street address" />
                            </label>
                        </div>

                        <div className="form-row form-row--two">
                            <label className="form-field">
                                <span>Postal Code</span>
                                <input type="text" placeholder="Enter your First Name" />
                            </label>
                            <label className="form-field">
                                <span>Country</span>
                                <input type="text" placeholder="Enter your city" />
                            </label>
                        </div>

                        <div className="form-row">
                            <label className="form-field">
                                <span>Interested Product</span>
                                <input type="text" placeholder="Choose product" />
                            </label>
                        </div>

                        <div className="form-row">
                            <label className="form-field">
                                <span>Email</span>
                                <input type="email" placeholder="Enter your email" />
                            </label>
                        </div>

                        <div className="form-row">
                            <label className="form-field">
                                <span>Message</span>
                                <textarea placeholder="Enter your Message" />
                            </label>
                        </div>

                        <button type="submit" className="contact-form__submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
