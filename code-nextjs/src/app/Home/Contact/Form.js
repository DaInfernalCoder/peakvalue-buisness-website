'use client';

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Non-JSON response:", await response.text());
        throw new Error("The server returned an invalid response. Please try again later.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setStatus({
        submitting: false,
        success: 'Thank you! Your message has been sent successfully.',
        error: null
      });

      // Optional: Redirect to a success page
      // window.location.href = '/contact-success';
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        success: null,
        error: error.message || 'Failed to submit form. Please try again.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        {status.success && (
          <div className="alert alert-success mb-4" role="alert">
            {status.success}
          </div>
        )}
        {status.error && (
          <div className="alert alert-danger mb-4" role="alert">
            {status.error}
          </div>
        )}
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required="required"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required="required"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required="required"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message *"
                required="required"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="form-group contact-button">
              <button 
                type="submit" 
                className="theme-btn"
                disabled={status.submitting}
              >
                {status.submitting ? 'Submitting...' : 'Submit Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
