import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, graphql } from 'gatsby';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';

import { parsePhone } from '~/utils/helpers';
import { ShowOuter, ShowInner, CopyColumn, ImageColumn, HeroImage, Copy, Images } from './styles';

import BackArrow from '~/assets/images/icons/arrow-back.svg';
import FacebookLogo from '~/assets/images/icons/fb-black.svg';
import InstagramLogo from '~/assets/images/icons/insta-black.svg';
import placeholderImg from '~/images/backup/backup_image.jpg';

const CollectiveShow = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const CopyRef = useRef(null);
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

  const fixLinks = useCallback(() => {
    const bodyLinks = CopyRef.current.getElementsByTagName('a');
    for (let idx = 0; idx < bodyLinks.length; idx += 1) {
      let link = bodyLinks[idx];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }, [CopyRef]);

  useEffect(() => {
    setMounted(true);
    fixLinks();
  }, []);

  return (
    <>
      <SEO title={title} />
      <ShowOuter>
        <Link to="/collective">
          <img className="back-arrow" src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn>
            <Copy mounted={mounted} ref={CopyRef} numChildren={CopyRef.current ? CopyRef.current.children.length : 50}>
              <h2 className="subtitle">{subtitle}</h2>
              <h1 className="title">{title}</h1>
              <RichText richText={JSON.parse(body.body)} />
              <p className="spacer" />
              {parkingLink && parkingText && (
                <>
                  <span>{parkingText}</span>
                  <a className="parking-link" href={parkingLink}>
                    <span>PARKING DIRECTIONS</span>
                  </a>
                </>
              )}
              {websiteString && (
                <a className="contact-link" target="_blank" rel="noopener noreferrer" href={websiteURL}>
                  <h6 className="info-paragraph">{websiteString}</h6>
                </a>
              )}
              {email && (
                <a className="contact-link" target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
                  <h6 className="info-paragraph">{email}</h6>
                </a>
              )}
              {phoneNumber && (
                <a className="contact-link" target="_blank" rel="noopener noreferrer" href={`tel:${phoneNumber}`}>
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
            </Copy>
          </CopyColumn>
          <ImageColumn className="column right">
            <Images>
              <HeroImage
                mounted={mounted}
                src={image ? image.file.url : placeholderImg}
                alt={image ? image.description : 'Placeholder Image'}
              />
            </Images>
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
