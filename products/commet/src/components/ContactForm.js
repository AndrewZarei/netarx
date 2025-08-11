import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xgvkdnpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate(`/thank-you?email=${encodeURIComponent(formData.email)}`);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section section wow fadeInUp" id="contact">
      <div className="container">
        <div className="contact-header">
          <h3>Request Demo Version</h3>
          <div className="divider-line"></div>
          <p>To get the trial version, please fill the form below</p>
        </div>

        <div className="contact-form-container">
          <form className="elegant-contact-form" onSubmit={handleSubmit} id="contact_form">
            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  id="your_name"
                  className="form-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
                <div className="input-highlight"></div>
              </div>
              
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
                  title="Please enter a valid Gmail address"
                  placeholder="Your Gmail"
                  required
                />
                <div className="input-highlight"></div>
              </div>
            </div>

            <div className="input-group">
              <select
                className="form-input mb-5"
                name="device"
                value={formData.device}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select your device</option>
                <option value="iphone">iPhone</option>
                <option value="android">Android</option>
                <option value="windows">Windows PC</option>
                <option value="mac">Mac</option>
              </select>
              <div className="input-highlight"></div>
            </div>

            <div className="input-group">
              <textarea
                className="form-input message-input"
                id="why"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why do you want to try the demo version?"
                required
              ></textarea>
              <div className="input-highlight"></div>
            </div>

            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Submitting...' : 'Request Demo'}</span>
              <div className="submit-btn-hover"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;