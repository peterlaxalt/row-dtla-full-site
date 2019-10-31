import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import RichText from '@madebyconnor/rich-text-to-jsx';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';

// import collectiveItem from '~/data/local/collectiveItem';

// import { allEqual, formatTime } from '~/helpers/parseDates;';

import { mediaMin } from '~/styles/mediaQueries';

import BackArrow from '~/images/icons/arrow-back.svg';
import FacebookLogo from '~/images/icons/fb-black.svg';
import InstagramLogo from '~/images/icons/insta-black.svg';

const CollectiveWrapper = styled.div``;

const CollectiveInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column-reverse;
  margin: 24px 0;

  ${mediaMin('tabletLandscape')} {
    flex-direction: row;
  }

  .column {
    width: 100%;
    ${mediaMin('tabletLandscape')} {
      width: 50%;
      margin: initial;
    }
  }
`;

const CopyColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaMin('tabletLandscape')} {
    padding-right: 1em;
  }
  h1 {
    margin: 16px 0;
    font-size: 40px;
    font-weight: bold;
    line-height: 44px;
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
    margin: 0;
    text-transform: uppercase;
  }
  p {
    font-family: 'SangBleu Kingdom';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin: 0 0 32px 0;
    display: flex;
  }
  a {
    font-family: Apercu;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 8px 0 0 0;
    text-transform: uppercase;
    border: 1px solid #000;
    padding: 1em 2em;
    &:hover {
      background: #000;
      color: #fff;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .parking-btn {
    font-size: 1.4rem;
    border: 1px solid black;
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
    margin: 8px 0 0 0;
    ${mediaMin('tabletLandscape')} {
      margin: 20px 0 0 0;
    }
    &:hover {
      background: transparent;
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
  ${mediaMin('tabletLandscape')} {
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
`;

const parsePhone = int => {
  return int.toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
};

const CollectiveShow = ({ data }) => {
  const {
    body,
    image,
    subtitle,
    phoneNumber,
    facebook,
    instagram,
    title,
    email,
    websiteString,
    websiteURL,
  } = data.contentfulCollectiveItem;
  // const { descriptionBody, title } = collectiveItem;

  console.log(JSON.parse(body.body));

  return (
    <Layout>
      <SEO title={title} />

      <CollectiveWrapper>
        <Link to="/collective">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <CollectiveInfo>
          <CopyColumn className="column left">
            <h2 className="subtitle">{subtitle}</h2>
            <h1 className="title">{title}</h1>
            <RichText richText={JSON.parse(body.body)} />
            {websiteString && (
              <a className="contact-link" href={websiteURL}>
                <h6 className="info-paragraph">{websiteString}</h6>
              </a>
            )}
            {email && (
              <a className="contact-link" href={`mailto:${email}`}>
                <h6 className="info-paragraph">{email}</h6>
              </a>
            )}
            {phoneNumber && (
              <a className="contact-link" href={`tel:${phoneNumber}`}>
                <h6 className="info-paragraph">{parsePhone(phoneNumber)}</h6>
              </a>
            )}
            <div className="row">
              {instagram && (
                <a className="social-icon" href={instagram} target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo} alt="instagram logo" />
                </a>
              )}
              {facebook && (
                <a className="social-icon" href={facebook} target="_blank" rel="noopener noreferrer">
                  <img src={FacebookLogo} alt="facebook logo" />
                </a>
              )}
            </div>
          </CopyColumn>
          <ImageColumn className="column right">
            <img src={image.file.url} alt={image.description} />
          </ImageColumn>
        </CollectiveInfo>
      </CollectiveWrapper>
    </Layout>
  );
};

export default CollectiveShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulCollectiveItem(slug: { eq: $slug }) {
      id
      title
      subtitle
      seoDescription {
        seoDescription
      }
      body {
        body
      }
      instagram
      facebook
      email
      websiteString
      websiteURL
      phoneNumber
      image {
        file {
          url
        }
        description
      }
    }
  }
`;
