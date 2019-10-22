import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import ResponsiveImg from '../utils/ResponsiveImg';
import SubscribeForm from './SubscribeForm';
import InstagramLogo from '../../../images/icons/insta-white.svg';
import FacebookLogo from '../../../images/icons/fb-white.svg';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 2em 4em;
  box-sizing: border-box;
  color: #fff;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33%;
  h2 {
    font-size: 3em;
    margin: 0;
  }
  p {
    display: flex;
    flex-direction: column;
    margin: 0 0 1em 0;
    &:last-child {
      margin: 0;
    }
  }
  .row {
    display: flex;
    margin: 0 0 1em 0;
    a {
      margin-right: 1em;
      color: #fff;
      &:visited,
      &:hover {
        color: #fff;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <h2>Visit ROW DTLA</h2>
        <p>
          <span>777 S ALAMEDA ST</span>
          <span>LOS ANGELES CA 90021</span>
        </p>
        <p>
          <span>MONDAY TO SUNDAY 8AM - 10PM</span>
        </p>
        <div className="row">
          <a href="https://goo.gl/maps/vuTZGz84t5xaqsgK6" target="_blank">
            DIRECTIONS
          </a>
          <Link to="/">PARKING RATES</Link>
        </div>
        <div className="row">
          <a href="https://instagram.com">
            <img src={InstagramLogo} alt="instagram logo" />
          </a>
          <a href="https://instagram.com">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
        </div>
      </FooterColumn>
      <FooterColumn>
        <ResponsiveImg
          srcPath="footer/map"
          alt="map of area surrounding row dtla"
        />
      </FooterColumn>
      <FooterColumn>
        <h2>Subscribe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <SubscribeForm />
        <p>
          <span className="copyright">© 2019 ROW DTLA</span>
        </p>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;
