import React from 'react';
import { Link, graphql } from 'gatsby';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';

import { parsePhone } from '~/utils/helpers';
import { ShowOuter, ShowInner, CopyColumn, ImageColumn } from './styles';

import BackArrow from '~/assets/images/icons/arrow-back-white.svg';
import FacebookLogo from '~/assets/images/icons/fb-black.svg';
import InstagramLogo from '~/assets/images/icons/insta-black.svg';
import placeholderImg from '~/images/backup/backup_image.jpg';

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
    parkingLink,
    parkingText
  } = data.contentfulCollectiveItem;

  return (
    <>
      <SEO title={title} />
      <ShowOuter>
        <Link to="/collective">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn>
            <h2 className="subtitle">{subtitle}</h2>
            <h1 className="title">{title}</h1>
            <RichText richText={JSON.parse(body.body)} />
            {parkingLink && parkingText && (
              <>
                <span>{parkingText}</span>
                <a className="parking-link" href={parkingLink}>
                  <span>PARKING DIRECTIONS</span>
                </a>
              </>
            )}
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
            <img src={image ? image.file.url : placeholderImg} alt={image ? image.description : 'Placeholder Image'} />
          </ImageColumn>
        </ShowInner>
      </ShowOuter>
    </>
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
      parkingLink
      parkingText
      image {
        file {
          url
        }
        description
      }
    }
  }
`;
