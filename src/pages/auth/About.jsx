import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/About.css';

function About() {
  const { t } = useLanguage();

  // Simple array of team members
  const teamMembers = [
    {
      name: 'Abdirizak Jarso',
      role: 'Founder',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Senaf Getachew',
      role: 'Founder',
      image: 'https://via.placeholder.com/150'
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>{t('aboutTitle')}</h1>
        <p>{t('aboutSubtitle')}</p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>{t('ourMission')}</h2>
        <p>{t('missionDesc')}</p>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>{t('ourValues')}</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>{t('sustainability')}</h3>
            <p>{t('sustainabilityDesc')}</p>
          </div>
          <div className="value-card">
            <h3>{t('community')}</h3>
            <p>{t('communityDesc')}</p>
          </div>
          <div className="value-card">
            <h3>{t('innovation')}</h3>
            <p>{t('innovationDesc')}</p>
          </div>
          <div className="value-card">
            <h3>{t('trust')}</h3>
            <p>{t('trustDesc')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>{t('ourTeam')}</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>{t('wantToLearn')}</h2>
        <p>{t('getInTouch')}</p>
        <Link to="/contact" className="btn btn-primary">{t('contactUs')}</Link>
      </section>
    </div>
  );
}

export default About; 