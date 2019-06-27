import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '~/styles/MediaQueries';
import ContactCard from '~/components/ContactCard';

const renderContactCards = contactData => {
  return contactData.map(contact => <ContactCard key={contact.email_address} cardData={contact} />);
};

const ContactSectionWrapper = styled.div`
  margin: 2rem 0;
  h2 {
    font-size: 20px;
    ${mediaMin.tabletLandscape`
      font-size: 24px;
    `}
    border-bottom: 3px solid black;
    padding: 10px 0;
  }
  .contact-card-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ContactSection = ({ contactData }) => {
  return (
    <ContactSectionWrapper>
      <h2>Leasing Inquiries</h2>
      <div className="contact-card-container">{renderContactCards(contactData)}</div>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
