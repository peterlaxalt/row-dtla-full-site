import React from 'react';
import styled from '@emotion/styled';

import SEO from '~/components/seo';
import { mediaMin } from '~/styles/mediaQueries';

import ContactForm from '~/components/pages/contact/ContactForm';

const ContactWrapper = styled.div`
  color: #fff;
  margin: 24px auto 0;
  ${mediaMin('tabletLandscape')} {
    margin: 64px 0 0 0;
    width: 100%;
  }
  h2 {
    margin: 0 0 32px;
    font-size: 40px;
    line-height: 44px;
    ${mediaMin('tabletLandscape')} {
      font-size: 72px;
      line-height: 80px;
      margin: 0 0 32px 0;
    }
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaMin('tabletLandscape')} {
    flex-direction: row;
  }
`;

const ContactColumn = styled.div`
  &.left {
    ${mediaMin('tabletLandscape')} {
      width: 66.66%;
      padding-right: 7%;
    }
  }

  &.right {
    ${mediaMin('tabletLandscape')} {
      width: 33.33%;
    }
  }
`;

const ContactSection = styled.div`
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  h6 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 10px;
  }
  span {
    margin: 0;
    margin-bottom: 5px;
  }
  .contact {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <ContactWrapper>
        <h2>
          Get
          <br />
          Connected.
        </h2>
        <ContactContent>
          <ContactColumn width="60%" className="left">
            <ContactForm />
          </ContactColumn>
          <ContactColumn width="40%" className="right">
            <ContactSection>
              <h6>General Contact</h6>
              <div className="contact">
                <span>INFO@URL.COM</span>
                <span>213.988.8890</span>
              </div>
            </ContactSection>
            <ContactSection>
              <h6>Retail Leasing</h6>
              <div className="contact">
                <span>RUNYON</span>
                <span>INFO@RUNYONGROUP.COM</span>
                <span>310.275.0483</span>
              </div>
            </ContactSection>
            <ContactSection>
              <h6>Creative Office Leasing</h6>
              <div className="contact">
                <span>Jeff Pion</span>
                <span>JEFF.PION@CBRE.COM</span>
                <span>310.550.2537</span>
              </div>
              <div className="contact">
                <span>Michelle Esquivel</span>
                <span>MICHELLE.ESQUIVEL@CBRE.COM</span>
                <span>310.550.2525</span>
              </div>
              <div className="contact">
                <span>Chris Penrose</span>
                <span>CHRIS.PENROSE@CBRE.COM</span>
                <span>213.613.3108</span>
              </div>
            </ContactSection>
            <ContactSection>
              <h6>Venue Leasing</h6>
              <span>First Lastname</span>
              <span>firstlastname@URL.COM</span>
              <span>310.555.5555</span>
            </ContactSection>
            <ContactSection>
              <h6>For PR or media inquiries, please contact:</h6>
              <span>ROWDTLA@WAGSTAFFWORLDWIDE.COM</span>
            </ContactSection>
          </ContactColumn>
        </ContactContent>
      </ContactWrapper>
    </>
  );
};

export default ContactPage;
