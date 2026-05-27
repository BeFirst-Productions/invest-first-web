'use client';

import React, { useState } from 'react';
import PrimaryButton from '../Common/Buttons/PrimaryButton';
import SectionContainer from '../layout/SectionContainer';

const WHATSAPP_NUMBER = '971588773753'; // +971 58 877 3753

const initialForm = {
    name: '',
    email: '',
    phone: '',
    visaOption: '',
    message: '',
};

const validate = (fields) => {
    const errors = {};

    if (!fields.name.trim()) {
        errors.name = 'Name is required.';
    }

    if (!fields.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        errors.email = 'Enter a valid email address.';
    }

    if (!fields.phone.trim()) {
        errors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.phone)) {
        errors.phone = 'Enter a valid phone number.';
    }

    if (!fields.visaOption || fields.visaOption === 'Select Option') {
        errors.visaOption = 'Please select a visa option.';
    }

    if (!fields.message.trim()) {
        errors.message = 'Message is required.';
    }

    return errors;
};

const ContactFormMap = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear field error on change
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Build WhatsApp message
        const text = [
            `Hello InvestFirst! I'd like to get in touch.`,
            ``,
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Visa Option: ${form.visaOption}`,
            `Message: ${form.message}`,
        ].join('\n');

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setForm(initialForm);
        setErrors({});
    };

    const inputClass = (field) =>
        `w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${errors[field]
            ? 'ring-2 ring-red-400 focus:ring-red-400'
            : 'focus:ring-[#0099CC]'
        }`;

    return (
        <SectionContainer
            id="contact-form"
            className="py-[60px] lg:py-[100px] bg-white overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* LEFT COLUMN: Map */}
                <div className="rounded-3xl overflow-hidden min-h-[400px] border border-[#1e293b]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1814101893333!2d55.38527469999999!3d25.2644822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4329df6c8c43%3A0x26abbf3dbe9ea51b!2sInvest%20First%20Documents%20Clearing%20Services!5e0!3m2!1sen!2sae!4v1779869862625!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* RIGHT COLUMN: Form */}
                <div className="bg-linear-to-b from-[#14293A] to-[#0B223E] p-8 md:p-10 rounded-3xl border border-[#1e293b]">
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-1">
                                <label className="text-white text-sm font-medium ml-2">
                                    Your Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    className={inputClass('name')}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs ml-2 mt-1">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="text-white text-sm font-medium ml-2">
                                    Your Email <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="info@Example.ae"
                                    className={inputClass('email')}
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs ml-2 mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="space-y-1">
                                <label className="text-white text-sm font-medium ml-2">
                                    Phone No <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+97150......"
                                    className={inputClass('phone')}
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-xs ml-2 mt-1">{errors.phone}</p>
                                )}
                            </div>

                            {/* Visa Option */}
                            <div className="space-y-1">
                                <label className="text-white text-sm font-medium ml-2">
                                    Visa Option <span className="text-red-400">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="visaOption"
                                        value={form.visaOption}
                                        onChange={handleChange}
                                        className={`${inputClass('visaOption')} appearance-none cursor-pointer`}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Investor Visa">Investor Visa</option>
                                        <option value="Employment Visa">Employment Visa</option>
                                        <option value="Freelance Visa">Freelance Visa</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.visaOption && (
                                    <p className="text-red-400 text-xs ml-2 mt-1">{errors.visaOption}</p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                            <label className="text-white text-sm font-medium ml-2">
                                Write Message <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Messages..."
                                rows={5}
                                className={`${inputClass('message')} resize-none`}
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-400 text-xs ml-2 mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <PrimaryButton text="Submit Now" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </SectionContainer>
    );
};

export default ContactFormMap;
