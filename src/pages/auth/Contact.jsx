import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/Contact.css';

function Contact() {
  const { t } = useLanguage();
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>{t('contactTitle')}</h1>
        <p>{t('contactSubtitle')}</p>
      </section>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>{t('getInTouch')}</h2>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>{t('email')}</h3>
              <p>contact@smart.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>{t('phone')}</h3>
              <p>+251 911 123 456</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>{t('address')}</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>{t('sendMessage')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">{t('send')}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact; 