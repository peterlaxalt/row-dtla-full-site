import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import BackArrow from '~/images/icons/arrow-back.svg';
import { mediaMin } from '~/styles/MediaQueries';

const EventWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 24px 0 0 0;
  ${mediaMin('tabletLandscape')} {
    margin: 32px 0 0 0;
    flex-direction: row;
  }
`;

const CopyColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  ${mediaMin('tabletLandscape')} {
    margin-top: 0;
    width: 50%;
    padding: 0 10% 0 0;
  }
  h3 {
    font-size: 55px;
    line-height: 60px;
    margin: 16px 0;
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
  }
  p {
    margin: 32px 0;
    font-family: 'SangBleu Kingdom';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    white-space: pre-line;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin('tabletLandscape')} {
    width: 50%;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
  }
`;

const EventShow = ({ data }) => {
  const { contentfulEvent } = data;
  const {
    address,
    bodyText,
    date,
    endDate,
    startTime,
    endTime,
    image,
    slug,
    subTitle,
    suite,
    title,
    type,
  } = contentfulEvent;
  return (
    <Layout>
      <SEO title={title} />
      <EventWrapper>
        <Link to="/events">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <EventInfo>
          <CopyColumn>
            <span>{`${date}${endDate && ` - ${endDate}`}`}</span>
            <h3>{title}</h3>
            <span>{`${startTime} - ${endTime}`}</span>
            <p>{bodyText.bodyText}</p>
          </CopyColumn>
          <ImageColumn>
            <img src={image.file.url} alt={image.description} />
          </ImageColumn>
        </EventInfo>
      </EventWrapper>
    </Layout>
  );
};

export default EventShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      address
      bodyText {
        bodyText
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
      suite
      title
      subtitle
      type
      slug
    }
  }
`;
