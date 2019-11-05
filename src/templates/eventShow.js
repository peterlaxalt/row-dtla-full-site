import React, { useEffect, useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import RichText from '@madebyconnor/rich-text-to-jsx';

import Context from '~/context/Context';
import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back.svg';
import { mediaMin } from '~/styles/mediaQueries';

const EventWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 24px 0;
  ${mediaMin('tabletLandscape')} {
    margin: 32px 0;
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
  h2 {
    font-size: 40px;
    font-weight: bold;
    line-height: 44px;
    margin: 16px 0;
    ${mediaMin('tabletLandscape')} {
      font-size: 55px;
      line-height: 60px;
    }
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
  }
  p {
    margin: 32px 0 0 0;
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
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
`;

const EventShow = ({ data }) => {
  const { contentfulEvent } = data;
  const { body, date, endDate, startTime, endTime, image, title } = contentfulEvent;
  const context = useContext(Context);
  const { setDarkTheme } = context;

  useEffect(() => {
    setDarkTheme(false);
  }, []);

  return (
    <>
      <SEO title={title} />
      <EventWrapper>
        <Link to="/events">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <EventInfo>
          <CopyColumn>
            <span>{`${date}${endDate ? ` - ${endDate}` : ''}`}</span>
            <h2>{title}</h2>
            <span>{`${startTime} - ${endTime}`}</span>
            <RichText richText={JSON.parse(body.body)} />
          </CopyColumn>
          <ImageColumn>
            <HeroImage src={image.file.url} alt={image.description} />
          </ImageColumn>
        </EventInfo>
      </EventWrapper>
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
