import React, { useState } from 'react';

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countryCodes = [
    { code: '+1', label: 'United States / Canada (+1)' },
    { code: '+977', label: 'Nepal (+977)' },
    { code: '+44', label: 'United Kingdom (+44)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+49', label: 'Germany (+49)' },
    { code: '+33', label: 'France (+33)' },
    { code: '+81', label: 'Japan (+81)' },
    { code: '+86', label: 'China (+86)' },
    { code: '+971', label: 'UAE (+971)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedExtensions = ['pdf', 'doc', 'docx'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      
      if (!allowedExtensions.includes(fileExtension)) {
        setErrors((prev) => ({
          ...prev,
          resume: 'Only .pdf, .doc, and .docx files are allowed.'
        }));
        setFormData((prev) => ({ ...prev, resume: null }));
        e.target.value = '';
        return;
      }

      // Validate file size (max 5MB = 5 * 1024 * 1024 bytes)
      const maxSizeInBytes = 5 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        setErrors((prev) => ({
          ...prev,
          resume: 'File size exceeds the 5MB maximum limit.'
        }));
        setFormData((prev) => ({ ...prev, resume: null }));
        e.target.value = '';
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // 1. Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    // 2. Email Address Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // 3. Phone Number Validation (numeric only, 7 to 15 digits)
    const phoneClean = formData.phone.replace(/\s+/g, '');
    const phoneNumericRegex = /^\d{7,15}$/;
    if (!phoneClean) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!phoneNumericRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter numbers only (7 to 15 digits).';
    }

    // 4. Resume Attachment Validation
    if (!formData.resume) {
      newErrors.resume = 'Please attach your resume (.pdf, .doc, or .docx).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('=== Contact & Booking Form Submission ===');
      console.log('1. Full Name:', formData.fullName);
      console.log('2. Email Address:', formData.email);
      console.log('3. Phone Number:', `${formData.countryCode} ${formData.phone}`);
      console.log('4. Resume File Name:', formData.resume.name);
      console.log('   Resume File Size:', `${(formData.resume.size / (1024 * 1024)).toFixed(2)} MB`);
      console.log('   Resume File Type:', formData.resume.type || 'N/A');
      console.log('Timestamp:', new Date().toISOString());

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          countryCode: '+1',
          phone: '',
          resume: null
        });
      }, 5000);
    }
  };

  return (
    <div className="contact-booking-page" style={{ maxWidth: '650px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
        Contact & Booking
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Please complete the form below and attach your resume to get in touch with our team.
      </p>

      <div className="card">
        {isSubmitted && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#dcfce7',
              color: '#166534',
              border: '1px solid #bbf7d0',
              borderRadius: '6px',
              marginBottom: '1.5rem'
            }}
          >
            ✅ <strong>Form Submitted Successfully!</strong> Check the browser console to view the logged form data.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Field 1: Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              style={{ borderColor: errors.fullName ? '#dc2626' : undefined }}
            />
            {errors.fullName && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Field 2: Email Address */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              style={{ borderColor: errors.email ? '#dc2626' : undefined }}
            />
            {errors.email && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Field 3: Phone Number with Country Selector */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                style={{
                  width: '140px',
                  padding: '0.65rem 0.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  backgroundColor: '#ffffff'
                }}
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code} ({item.label.split(' ')[0]})
                  </option>
                ))}
              </select>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="9801234567"
                style={{
                  flex: 1,
                  borderColor: errors.phone ? '#dc2626' : undefined
                }}
              />
            </div>
            {errors.phone && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.phone}
              </span>
            )}
          </div>

          {/* Field 4: Resume Attachment Upload */}
          <div className="form-group">
            <label htmlFor="resume">
              Resume Attachment <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{
                padding: '0.5rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                width: '100%',
                backgroundColor: '#ffffff',
                borderColor: errors.resume ? '#dc2626' : undefined
              }}
            />
            {formData.resume && (
              <div
                style={{
                  marginTop: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--accent)',
                  fontWeight: '500'
                }}
              >
                📄 Selected File: {formData.resume.name} ({(formData.resume.size / 1024).toFixed(1)} KB)
              </div>
            )}
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
              Accepted formats: .pdf, .doc, .docx (Max size: 5MB)
            </span>
            {errors.resume && (
              <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.resume}
              </span>
            )}
          </div>

          {/* Field 5: Submit Button */}
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
