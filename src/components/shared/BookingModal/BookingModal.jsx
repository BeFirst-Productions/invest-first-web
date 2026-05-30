'use client';

import React, { useState, useEffect, useRef } from 'react';
import { services } from '@/data/serviceData';
import gsap from 'gsap';

const quickDates = [
  { day: '31', label: 'Mon', date: '2026-05-31' },
  { day: '1', label: 'Tue', date: '2026-06-01' },
  { day: '2', label: 'Wed', date: '2026-06-02' },
  { day: '3', label: 'Thu', date: '2026-06-03' },
  { day: '4', label: 'Fri', date: '2026-06-04' },
];

export default function BookingModal({ isOpen, onClose, initialDate }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const [showFullDatePicker, setShowFullDatePicker] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: initialDate || quickDates[1].date,
    time: ''
  });

  useEffect(() => {
    if (initialDate) {
      setFormData(prev => ({ ...prev, date: initialDate }));
    }
  }, [initialDate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      tl.fromTo(contentRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.2'
      );
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    });
    tl.to(contentRef.current, { y: 30, opacity: 0, scale: 0.98, duration: 0.25 });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.2 }, '-=0.1');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectQuickDate = (date) => {
    setFormData(prev => ({ ...prev, date }));
    setShowFullDatePicker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service, date, time } = formData;

    const message = `Hello InvestFirst, I would like to schedule a meeting.
    
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service:* ${service}
*Date:* ${date}
*Time:* ${time}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+971501234567'; // Change to the actual number
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#081131]/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative bg-white w-full max-w-[550px] rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#111D59] p-8 sm:p-10 text-white relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[10px] h-[10px] bg-[#D9F1F7] rounded-full animate-pulse" />
            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#D9F1F7]">Booking</span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-tight mb-2">Schedule Meeting</h2>
          <p className="text-white/60 text-[15px] leading-relaxed max-w-[360px]">
            Please fill in your details and select a preferred time for your consultation.
          </p>

          <button
            onClick={handleClose}
            className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
          >
            <svg className="group-hover:rotate-90 transition-transform duration-300" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 pt-6 flex flex-col gap-6 overflow-y-auto max-h-[65vh] scrollbar-hide">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-black uppercase tracking-[2px] text-[#111D59]/60">Full Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 text-[#111D59] font-medium placeholder:text-[#111D59]/30 focus:bg-white focus:ring-4 focus:ring-[#111D59]/5 transition-all outline-none"
              />
            </div>
            {/* Phone Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-black uppercase tracking-[2px] text-[#111D59]/60">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                placeholder="+971 50 --- ----"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 text-[#111D59] font-medium placeholder:text-[#111D59]/30 focus:bg-white focus:ring-4 focus:ring-[#111D59]/5 transition-all outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-black uppercase tracking-[2px] text-[#111D59]/60">Email Address</label>
              <input
                required
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 text-[#111D59] font-medium placeholder:text-[#111D59]/30 focus:bg-white focus:ring-4 focus:ring-[#111D59]/5 transition-all outline-none"
              />
            </div>
            {/* Service Field */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-black uppercase tracking-[2px] text-[#111D59]/60">Select Service</label>
              <div className="relative">
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 text-[#111D59] font-medium appearance-none focus:bg-white focus:ring-4 focus:ring-[#111D59]/5 transition-all outline-none"
                >
                  <option value="" disabled>Choose service</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#111D59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Date Selection Section */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-black uppercase tracking-[2px] text-[#111D59]/60">Schedule Date</label>
              <button
                type="button"
                onClick={() => setShowFullDatePicker(!showFullDatePicker)}
                className="text-[11px] font-bold text-[#A10B43] hover:underline uppercase tracking-widest"
              >
                {showFullDatePicker ? 'Show Quick Dates' : 'View All Dates'}
              </button>
            </div>

            {showFullDatePicker ? (
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-4 text-[#111D59] font-medium focus:bg-white focus:ring-4 focus:ring-[#111D59]/5 transition-all outline-none"
              />
            ) : (
              <div className="flex items-center justify-between gap-2.5">
                {quickDates.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => selectQuickDate(item.date)}
                    className={`flex-1 h-[70px] rounded-[16px] flex flex-col items-center justify-center transition-all ${formData.date === item.date
                        ? 'bg-[#111D59] text-white shadow-lg scale-[1.05]'
                        : 'bg-[#F8FAFC] text-[#111D59] border border-[#E2E8F0] hover:border-[#111D59]/30'
                      }`}
                  >
                    <span className="text-[16px] font-bold leading-none mb-1">{item.day}</span>
                    <span className={`text-[9px] font-black uppercase tracking-tighter ${formData.date === item.date ? 'text-white/60' : 'text-[#888]'}`}>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Selection */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[11px] font-black uppercase tracking-[2px] text-[#111D59]/60">Select Time Slot</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {['09:00', '10:00', '11:00', '14:00', '15:00'].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, time: `${time} AM` }))}
                  className={`py-2.5 rounded-[10px] text-[13px] font-bold transition-all ${formData.time.startsWith(time)
                      ? 'bg-[#A10B43] text-white shadow-md'
                      : 'bg-[#F8FAFC] text-[#111D59] border border-[#E2E8F0] hover:bg-[#E2E8F0]/50'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="group mt-4 w-full bg-[#111D59] hover:bg-[#081131] text-white font-bold py-5 rounded-[20px] shadow-[0_15px_40px_rgba(17,29,89,0.25)] transition-all active:scale-[0.98] flex items-center justify-center gap-4"
          >
            <span className="text-[17px]">Confirm Appointment</span>
            <div className="w-[30px] h-[30px] bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
