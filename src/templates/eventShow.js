import React from 'react';
import { Link, graphql } from 'gatsby';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back-white.svg';
import { ShowOuter, ShowInner, CopyColumn, ImageColumn, HeroImage } from './styles';

import placeholderImg from '~/images/backup/backup_image.jpg';

const EventShow = ({ data }) => {
  const { contentfulEvent } = data;
  const { body, date, endDate, startTime, endTime, image, title } = contentfulEvent;

  return (
    <>
      <SEO title={title} />
      <ShowOuter>
        <Link to="/events">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn>
            <h2>{`${date}${endDate ? ` - ${endDate}` : ''}`}</h2>
            <h1>{title}</h1>
            <h2>{`${startTime} - ${endTime}`}</h2>
            <RichText richText={JSON.parse(body.body)} />
          </CopyColumn>
          <ImageColumn>
            <HeroImage
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
