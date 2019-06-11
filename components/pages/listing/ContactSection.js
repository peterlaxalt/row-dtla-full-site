import React from 'react';
import styled from 'styled-components';
import variables from '~/styles/Variables';
import { mediaMin } from '~/styles/MediaQueries';

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;
  margin: 1.4rem 0;
  ${mediaMin.tablet`
    width: 25%;
    margin: 1.8rem 0;
  `}
  .contact-name {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .contact-phone {
    margin-bottom: 10px;
    color: #000;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .contact-email {
    color: ${variables.colors.babyBlue};
    text-decoration: none;
    font-weight: 400;
    &:hover {
      color: ${variables.colors.babyBlue};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const ContactCard = ({ cardData }) => {
  const { full_name, phone_number, email_address } = cardData;
  return (
    <ContactCardWrapper>
      <span className="contact-name">{full_name}</span>
      <a href={`tel:${phone_number.split('.').join('')}`} className="contact-phone">
        {phone_number}
      </a>
      <a href={`mailto:${email_address}`} className="contact-email">
        {email_address}
      </a>
    </ContactCardWrapper>
  );
};

const renderContactCards = contactData => {
  return contactData.map(contact => <ContactCard key={contact.email_address} cardData={contact} />);
};

const ContactSectionWrapper = styled.div`
  margin: 2rem 0;
  h2 {
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
