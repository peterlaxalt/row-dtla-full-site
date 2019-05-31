import React from 'react';
import styled from 'styled-components';
import variables from '~/styles/Variables';

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  font-size: 18px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  .contact-name {
    font-weight: 500;
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
