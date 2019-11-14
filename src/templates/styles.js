import styled from '@emotion/styled';

import { mediaMin } from '~/styles/mediaQueries';

const ShowOuter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ShowInner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column-reverse;
  margin: 24px 0;
  ${mediaMin('tabletLandscape')} {
    margin: 24px 0 128px 0;
    flex-direction: row;
  }
`;

const CopyColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  ${mediaMin('tabletLandscape')} {
    padding-right: 10%;
    width: 50%;
  }
  h1 {
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    line-height: 44px;
    margin: 16px 0;
    ${mediaMin('tabletLandscape')} {
      font-size: 55px;
      line-height: 60px;
    }
  }
  h2,
  h6 {
    font-family: Apercu;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    text-transform: uppercase;
    margin: 0;
  }
  h3 {
    font-size: 32px;
    line-height: 36px;
  }
  h4 {
    font-size: 24px;
    line-height: 28px;
  }
  h5 {
    font-family: Apercu;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0 10%;
    border: 1px solid #fff;
    height: 40px;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    text-decoration: none !important;
    margin: 16px 0 !important;
    &:hover {
      background-color: #fff;
      color: #fff;
    }
    a {
      text-decoration: none;
    }
  }
  p {
    font-family: 'SangBleu Kingdom';
    font-size: 16px;
    line-height: 24px;
    margin: 16px 0;
    display: block;
  }
  a {
    font-weight: 500;
    text-decoration: underline;
    margin: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    margin: 16px 0 0 0;
    ${mediaMin('tabletLandscape')} {
      margin: 0;
    }
  }

  .parking-btn {
    font-size: 1.4rem;
    border: 1px solid white;
    background: none;
    padding: 10px 50px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 100ms ease;
  }

  .contact-link {
    display: block;
    border: none;
    padding: 0;
    margin: 16px 0 0 0;
    text-decoration: none;
    ${mediaMin('tabletLandscape')} {
      margin: 20px 0 0 0;
    }
    &:hover {
      background: transparent;
      color: #fff;
    }
  }

  .parking-link {
    display: block;
    border: 1px solid #fff;
    padding: 8px 16px;
    margin: 0;
    width: fit-content;
    text-decoration: none;
    ${mediaMin('tabletLandscape')} {
      margin: 8px 0 0 0;
    }
    &:hover {
      background: #fff;
      color: #000;
    }
  }

  .social-icon {
    border: none;
    padding: 0;
    margin: 8px 10px 0 0;
    ${mediaMin('tabletLandscape')} {
      margin: 20px 24px 0 0;
    }
    &:hover {
      background: transparent;
      color: #000;
    }
  }
`;

const ImageColumn = styled.div`
  margin-bottom: 16px;
  display: ${props => (props.noDesktop ? 'none' : 'block')};
  ${mediaMin('tabletLandscape')} {
    margin-bottom: 0;
    width: 50%;
    display: block;
  }
  img {
    max-width: 100%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
`;

export { ShowOuter, ShowInner, CopyColumn, ImageColumn, HeroImage };
