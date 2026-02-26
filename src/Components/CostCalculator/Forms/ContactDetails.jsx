
import React, { useState, useEffect } from 'react';

const ContactDetails = ({ onPrev, value, onChange, onSubmit }) => {
    const [formData, setFormData] = useState(value || {
        name: '',
        email: '',
        phone: '',
        nationality: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (name, val) => {
        let error = "";
        switch (name) {
            case 'name':
                if (!val.trim()) error = "Name is required";
                else if (val.trim().length < 2) error = "Name must be at least 2 characters";
                break;
            case 'email':
                if (!val.trim()) error = "Email is required";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = "Invalid email format";
                break;
            case 'phone':
                if (!val.trim()) error = "Phone number is required";
                else if (!/^\+?[0-9\s-]{7,15}$/.test(val)) error = "Invalid phone number (7-15 digits)";
                break;
            case 'nationality':
                if (!val) error = "Nationality is required";
                break;
            default:
                break;
        }
        return error;
    };

    // Validate on mount to set initial validity state correctly (optional but good for consistency)
    useEffect(() => {
        // We don't want to show errors on mount, but we want to know if it's potentially valid or not?
        // Actually, isFormValid handles the "must have value" check, so empty initial state is fine.
    }, []);

    const handleChange = (field, val) => {
        const newData = { ...formData, [field]: val };
        setFormData(newData);
        onChange('contactDetails', newData);

        // Real-time validation
        const error = validate(field, val);
        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        const error = validate(field, formData[field]);
        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const isFormValid =
        !errors.name && formData.name &&
        !errors.email && formData.email &&
        !errors.phone && formData.phone &&
        !errors.nationality && formData.nationality;

    const handleSubmit = () => {
        if (isFormValid) {
            onSubmit(formData);
        } else {
            // Mark all fields as touched to show errors
            setTouched({
                name: true,
                email: true,
                phone: true,
                nationality: true
            });

            // Re-validate all fields to ensure errors state is up to date
            const newErrors = {};
            newErrors.name = validate('name', formData.name);
            newErrors.email = validate('email', formData.email);
            newErrors.phone = validate('phone', formData.phone);
            newErrors.nationality = validate('nationality', formData.nationality);

            setErrors(newErrors);
        }
    };

    return (
        <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center md:text-left">Schedule a Call</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                    <label className="text-sm text-gray-400 block mb-1">Your Name *</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full bg-white text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 
                            ${touched.name && errors.name ? 'ring-2 ring-red-500' : 'focus:ring-cyan-500'}`}
                    />
                    {touched.name && errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label className="text-sm text-gray-400 block mb-1">Your Email *</label>
                    <input
                        type="email"
                        placeholder="info@name.ae"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full bg-white text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 
                            ${touched.email && errors.email ? 'ring-2 ring-red-500' : 'focus:ring-cyan-500'}`}
                    />
                    {touched.email && errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label className="text-sm text-gray-400 block mb-1">Phone No *</label>
                    <input
                        type="tel"
                        placeholder="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full bg-white text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 
                            ${touched.phone && errors.phone ? 'ring-2 ring-red-500' : 'focus:ring-cyan-500'}`}
                    />
                    {touched.phone && errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                    )}
                </div>

                {/* Nationality Field */}
                <div>
                    <label className="text-sm text-gray-400 block mb-1">Select Your Nationality *</label>
                    <div className="relative">
                        <select
                            value={formData.nationality}
                            onChange={(e) => handleChange('nationality', e.target.value)}
                            onBlur={() => handleBlur('nationality')}
                            className={`w-full bg-white text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 appearance-none 
                                ${touched.nationality && errors.nationality ? 'ring-2 ring-red-500' : 'focus:ring-cyan-500'}`}
                        >
                            <option value="">Select Option</option>
                            <option value="UAE">UAE</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="India">India</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    {touched.nationality && errors.nationality && (
                        <p className="text-red-400 text-xs mt-1">{errors.nationality}</p>
                    )}
                </div>

                {/* Message Field - Optional */}
                <div className="md:col-span-2">
                    <label className="text-sm text-gray-400 block mb-1">Write Message (Optional)</label>
                    <textarea
                        placeholder="Message..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="w-full bg-white text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    onClick={onPrev}
                    className="px-6 py-2 rounded-full text-gray-300 font-medium hover:text-white transition-colors flex items-center gap-2"
                >
                    Previous
                </button>

                <button
                    onClick={handleSubmit}
                    className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hover:shadow-cyan-500/50"
                >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default ContactDetails;
