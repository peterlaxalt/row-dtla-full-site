import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';

// import collectiveItem from '~/data/local/collectiveItem';

import BackArrow from '~/images/icons/arrow-back.svg';
import FacebookLogo from '~/images/icons/fb-black.svg';
import InstagramLogo from '~/images/icons/insta-black.svg';

const CollectiveWrapper = styled.div`
  display: flex;
  height: 100%;

  .column {
    width: 50%;
  }

  .right {
    background: grey;
    height: 100%;
  }
`;

const CollectiveDetails = styled.div`
  .subtitle {
    text-transform: uppercase;
    font-family: 'Apercu';
    letter-spacing: 1px;
  }

  .title {
    font-size: 5rem;
    margin: 20px 0;
  }

  .description {
    max-width: 800px;
    font-size: 1.4rem;
  }

  .info-paragraph {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .parking-instructions {
    text-transform: uppercase;
  }

  .parking-btn {
    font-size: 1.4rem;
    border: 1px solid black;
    background: none;
    padding: 10px 50px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 100ms ease;
    &:hover {
      background: #000;
      color: #fff;
    }
  }

  .address {
    &:nth-child(1) {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      margin-top: 0;
    }
  }

  .phone-number {
    display: block;
    margin: 20px 0;
  }

  .social-icon {
    margin-right: 10px;
  }
`;

const CollectiveShow = ({ data }) => {
  const {
    addressLine1,
    addressLine2,
    descriptionBody,
    image,
    parking,
    subtitle,
    websiteString,
    websiteURL,
    phoneNumber,
    facebook,
    instagram,
    title,
  } = data.contentfulCollectiveItem;
  // const { descriptionBody, title } = collectiveItem;

  return (
    <Layout>
      <SEO title={title} />
      <Link to="/collective">
        <img src={BackArrow} alt="back arrow" />
      </Link>
      <CollectiveWrapper>
        <CollectiveDetails className="column left">
          <h3 className="subtitle">{subtitle}</h3>
          <h1 className="title">{title}</h1>
          <h4 className="description">{descriptionBody.descriptionBody}</h4>
          <p className="info-paragraph parking-instructions">Park At {parking}</p>
          <button className="parking-btn">Parking Directions</button>
          <p className="info-paragraph address">{addressLine1}</p>
          <p className="info-paragraph address">{addressLine2}</p>
          <p className="info-paragraph">
            <a href={websiteURL} target="_blank" rel="noopener noreferrer">
              {websiteString}
            </a>
          </p>
          <a className="phone-number" href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </a>
          <a className="social-icon" href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="instagram logo" />
          </a>
          <a className="social-icon" href={facebook} target="_blank" rel="noopener noreferrer">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
        </CollectiveDetails>
        <div className="column right">
          <img src={image.file.url} alt={image.description} />
        </div>
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
      addressLine1
      addressLine2
      descriptionBody {
        descriptionBody
      }
      seoDescription {
        seoDescription
      }
      parking
      instagram
      facebook
      email
      websiteString
      websiteURL
      phoneNumber
      timeOpenMonday
      timeCloseMonday
      timeOpenTuesday
      timeCloseTuesday
      timeOpenWednesday
      timeCloseWednesday
      timeOpenThursday
      timeCloseThursday
      timeOpenSunday
      timeOpenSaturday
      timeOpenFriday
      timeCloseFriday
      timeCloseSaturday
      timeCloseSunday
      image {
        file {
          url
        }
        description
      }
    }
  }
`;
