import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, graphql } from 'gatsby';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back.svg';
import { ShowOuter, ShowInner, CopyColumn, ImageColumn, HeroImage, Copy, Images } from './styles';

import placeholderImg from '~/images/backup/backup_image.jpg';

const EventShow = ({ data }) => {
  const { contentfulEvent } = data;
  const { body, date, endDate, startTime, endTime, image, title } = contentfulEvent;
  const [mounted, setMounted] = useState(false);
  const CopyRef = useRef(null);

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
        <Link to="/events">
          <img className="back-arrow" src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn>
            <Copy mounted={mounted} ref={CopyRef} numChildren={CopyRef.current ? CopyRef.current.children.length : 50}>
              <h2>{`${date}${endDate ? ` - ${endDate}` : ''}`}</h2>
              <h1>{title}</h1>
              <h2>{`${startTime} - ${endTime}`}</h2>
              {body && <RichText richText={JSON.parse(body.body)} />}
            </Copy>
          </CopyColumn>
          <ImageColumn>
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

export default EventShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      body {
        body
      }
      date(formatString: "MMM Do")
      endDate(formatString: "MMM Do")
      endTime
      image {
        file {
          url
        }
        description
      }
      startTime
      title
      type
      slug
    }
  }
`;
