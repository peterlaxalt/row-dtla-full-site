import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back.svg';
import { ShowOuter, ShowInner, CopyColumn, ImageColumn, HeroImage } from './styles';

import placeholderImg from '~/images/backup/backup_image.jpg';

const EventShow = ({ data }) => {
  const { contentfulEvent } = data;
  const { body, date, endDate, startTime, endTime, image, title } = contentfulEvent;
  const [mounted, setMounted] = useState(false);
  const CopyRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <SEO title={title} />
      <ShowOuter>
        <Link to="/events">
          <img className="back-arrow" src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn
            mounted={mounted}
            ref={CopyRef}
            numChildren={CopyRef.current ? CopyRef.current.children.length : 50}
          >
            <h2>{`${date}${endDate ? ` - ${endDate}` : ''}`}</h2>
            <h1>{title}</h1>
            <h2>{`${startTime} - ${endTime}`}</h2>
            <RichText richText={JSON.parse(body.body)} />
          </CopyColumn>
          <ImageColumn>
            <HeroImage
              mounted={mounted}
              src={image ? image.file.url : placeholderImg}
              alt={image ? image.description : 'Placeholder Image'}
            />
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
      subtitle
      type
      slug
    }
  }
`;
