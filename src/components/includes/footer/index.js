import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import ResponsiveImg from '../utils/ResponsiveImg';
import SubscribeForm from '~/components/includes/forms/SubscribeForm';
import InstagramLogo from '~/images/icons/insta-white.svg';
import FacebookLogo from '~/images/icons/fb-white.svg';
import { mediaMin } from '~/styles/mediaQueries';

const FooterWrapper = styled.footer`
  display: flex;
  background-color: #000;
  color: #fff;
  flex-direction: column;
  padding: 40px 14px;
  ${mediaMin('tabletLandscape')} {
    padding: 2em 4em;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  ${mediaMin('tabletLandscape')} {
    max-width: 33%;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 40px;
    line-height: 44px;
    margin: 0;
    ${mediaMin('tabletLandscape')} {
      font-size: 55px;
      line-height: 60px;
    }
  }
  br {
    ${mediaMin('tabletLandscape')} {
      display: none;
    }
  }
  p {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .row {
    display: flex;
    a {
      margin-right: 1em;
      color: #fff;
      &:visited,
      &:hover {
        color: #fff;
      }
    }
  }
  .section {
    margin-bottom: 24px;
    ${mediaMin('tabletLandscape')} {
      margin-bottom: 0;
    }
  }
  .copyright {
    opacity: 0.5;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 18px;
    margin-top: 24px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <div className="section">
          <h2>
            Visit <br />
            ROW DTLA
          </h2>
          <p>
            <span>777 S ALAMEDA ST</span>
            <span>LOS ANGELES CA 90021</span>
          </p>
        </div>
        <p className="section">
          <span>MONDAY TO SUNDAY 8AM - 10PM</span>
        </p>
        <div className="row section">
          <a href="https://goo.gl/maps/vuTZGz84t5xaqsgK6" target="_blank" rel="noopener noreferrer">
            DIRECTIONS
          </a>
          <Link to="/parking">PARKING RATES</Link>
        </div>
        <div className="row">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="instagram logo" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
        </div>
      </FooterColumn>
      <FooterColumn>
        <ResponsiveImg srcPath="footer/map" alt="map of area surrounding row dtla" />
      </FooterColumn>
      <FooterColumn>
        <div className="section">
          <h2>Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <SubscribeForm />
        <p>
          <span className="copyright">© 2019 ROW DTLA</span>
        </p>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
