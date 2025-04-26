import React from 'react';
import ContactUsForm from './_components/Form';
import ContactUsAddress from './_components/Address';
import "@/styles/Contact.scss";
import ContactMap from './_components/ContactMap';

export default function ContactWithUs() {
  return (
    <div className="contactContainer">
      <div className="mapBackground">
        <ContactMap />
        <ContactUsAddress />
        <div className="overlay"></div>
      </div>
      <div className="contentSection">
        <div className="formSection">
          <h2>Connect With Us</h2>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}