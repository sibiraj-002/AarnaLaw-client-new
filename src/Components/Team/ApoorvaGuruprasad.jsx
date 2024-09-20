import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from '../../Components/LanguageContext';
import ContactForm from "../practice-area/ContactForm";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Profile.css';

const translations = {
  ar: require('../../Components/json/team/ar.json'),
  de: require('../../Components/json/team/de.json'),
  en: require('../../Components/json/team/en.json'),
  es: require('../../Components/json/team/es.json'),
  fr: require('../../Components/json/team/fr.json'),
  gu: require('../../Components/json/team/gu.json'),
  hi: require('../../Components/json/team/hi.json'),
  ja: require('../../Components/json/team/ja.json'),
  kn: require('../../Components/json/team/kn.json'),
  ko: require('../../Components/json/team/ko.json'),
  ml: require('../../Components/json/team/ml.json'),
  ru: require('../../Components/json/team/ru.json'),
  ta: require('../../Components/json/team/ta.json'),
  tel: require('../../Components/json/team/tel.json'),
  zh: require('../../Components/json/team/zh.json'),
};

function ApoorvaGuruprasad() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const langParam = queryParams.get("lang");
    if (langParam && Object.keys(translations).includes(langParam)) {
      setSelectedLanguage(langParam);
    }
  }, [location.search, setSelectedLanguage]);

  const handleContactClick = () => setShowContactForm(true);
  const handleCloseContactForm = () => setShowContactForm(false);
  const handleBackToTeam = () => navigate('/aboutus', { state: { scrollTo: 'partners' } });

  return (
    <div className="profile-container">
      {/* Back to Team link */}
      <div className="back-link">
        <button onClick={handleBackToTeam} className="back-button">
          <ArrowLeft className="arrow-icon" />
          <span>Back to Team</span>
        </button>
      </div>

      <header className="profile-header">
        <div className="header-content">
          <img 
            src={require("../../images/Apoorva.png")}
            alt="Apoorva " 
            className="profile-image"
          />
          <div className="profile-title">
            <h1>{translations[selectedLanguage].Apoorva_Guruprasad}</h1>
            <p>{translations[selectedLanguage].Apoorva_Role}</p>
          </div>
        </div>
      </header>

    

      {/* Main Content */}
      <main className="profile-main">
        <div className="profile-content">
          {/* Practice Area Section */}
          <section className="left-column">
            <h2>{translations[selectedLanguage].PracticeAreas}</h2>
            <ul className="practice-areas">
              <li>{translations[selectedLanguage].Litigation}</li>
              <li>{translations[selectedLanguage].Const_and_Infra_law}</li>
              <li>{translations[selectedLanguage].Int_Arbitration}</li>
              <li>{translations[selectedLanguage].Conciliation_and_Mediation}</li>
            </ul>
            <button onClick={handleContactClick} className="contact-button">
              {translations[selectedLanguage].Contact}
            </button>
          </section>

          {/* Profile Description */}
          <section className="right-column">
            <div className="profile-description">
              <p>{translations[selectedLanguage].Apoorva_Desc1}</p>
              <p>{translations[selectedLanguage].Apoorva_Desc2}</p>
            </div>

            <h2 className="qualifications">
              {translations[selectedLanguage].Professional_Qualifications}
            </h2>
            <ul className="bullet-list">
              <li>{translations[selectedLanguage].BA_LLB}</li>
              <li>{translations[selectedLanguage].Apoorva_Master}</li>
              <li>{translations[selectedLanguage].Apoorva_Participated}</li>
            </ul>

            <h2 className="publications">
              {translations[selectedLanguage].Select_Publications}
            </h2>
            <ul className="bullet-list">
              <li>{translations[selectedLanguage].Chambers_Litigation}</li>
            </ul>

            <h2 className="memberships">
              {translations[selectedLanguage].Apoorva_Memberships}
            </h2>
            <ul className="bullet-list">
              <li>{translations[selectedLanguage].Select_Life_member}</li>
            </ul>

            {/* Navigation Links */}
            <hr className="nav-divider" />
            <div className="navigation">
              <a href="/team/shreyas-jayasimha" className="prev">
                <ArrowLeft className="arrow-icon" />
                <span>Shreyas Jayasimha</span>
              </a>
              <a href="/team/manjushree" className="next">
                <span>Manjushree</span>
                <ArrowRight className="arrow-icon" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Display Contact Form */}
      {showContactForm && <ContactForm handleClose={handleCloseContactForm} />}
    </div>
  );
}

export default ApoorvaGuruprasad;