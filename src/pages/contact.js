import React from 'react';
import styled from '@emotion/styled';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import { mediaMin } from '~/styles/mediaQueries';

import ContactForm from '~/components/pages/contact/ContactForm';

const ContactWrapper = styled.div`
  color: #fff;
  margin: 24px auto 0;
  width: 95%;
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
  h6 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    text-transform: uppercase;
    font-weight: 200;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
  .contact {
    margin-bottom: 20px;
  }
`;

const ContactPage = () => {
  return (
    <Layout>
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
              <p>INFO@URL.COM</p>
              <p>213.988.8890</p>
            </ContactSection>
            <ContactSection>
              <h6>Retail Leasing</h6>
              <p>RUNYON</p>
              <p>INFO@RUNYONGROUP.COM</p>
              <p>310.275.0483</p>
            </ContactSection>
            <ContactSection>
              <div className="contact">
                <h6>Creative Office Leasing</h6>
                <p>Jeff Pion</p>
                <p>JEFF.PION@CBRE.COM</p>
                <p>310.550.2537</p>
              </div>
              <div className="contact">
                <p>Michelle Esquivel</p>
                <p>MICHELLE.ESQUIVEL@CBRE.COM</p>
                <p>310.550.2525</p>
              </div>
              <div className="contact">
                <p>Chris Penrose</p>
                <p>CHRIS.PENROSE@CBRE.COM</p>
                <p>213.613.3108</p>
              </div>
            </ContactSection>
            <ContactSection>
              <h6>Venue Leasing</h6>
              <p>First Lastname</p>
              <p>firstlastname@URL.COM</p>
              <p>310.555.5555</p>
            </ContactSection>
            <ContactSection>
              <h6>For PR or media inquiries, please contact:</h6>
              <p>ROWDTLA@WAGSTAFFWORLDWIDE.COM</p>
            </ContactSection>
          </ContactColumn>
        </ContactContent>
      </ContactWrapper>
    </Layout>
  );
};

export default ContactPage;
