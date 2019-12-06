import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../styles/MediaQueries';

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 81px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 30px;
  ${mediaMin.phoneXL`
  width: 50%;
  `}
  ${mediaMin.tabletLandscape`
  font-size: 18px;
    width: 25%;
  `}
  .contact-name {
    font-weight: 500;
    margin-bottom: 15px;
  }
  .contact-phone {
    margin-bottom: 8px;
    color: #000;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      color: #000;
      text-decoration: none;
    }
  }
  .contact-email {
    color: #369bf7;
    text-decoration: none;
    font-weight: 400;
    &:hover {
      color: #369bf7;
      text-decoration: underline;
    }
  }
`;

const ContactCard = ({ cardData }) => {
  const { full_name, phone_number, email_address } = cardData;

  return (
    <ContactCardWrapper>
      <h4 className="contact-name">{full_name}</h4>
      <a href={`tel:${phone_number.split('.').join('')}`} className="contact-phone">
        {phone_number}
      </a>
      <a href={`mailto:${email_address}`} className="contact-email">
        {email_address}
      </a>
    </ContactCardWrapper>
  );
};

export default ContactCard;
