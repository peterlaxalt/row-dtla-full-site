import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { mediaMin } from '~/styles/mediaQueries';
import { truncateText } from '~/components/includes/utils/helpers';

const EventWrapper = styled.li`
  margin-bottom: calc(64px / 3);
  padding: 0;
  width: 100%;
  border: 1px solid #000;
  img {
    width: 100%;
    height: 100%;
  }
  ${mediaMin('tabletLandscape')} {
    width: calc(25% - 16px);
  }
`;

const CopySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  h3 {
    font-size: 40px;
    line-height: 44px;
    margin: 0 0 16px 0;
  }
  p {
    font-family: 'SangBleu Kingdom';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin: 0 0 16px 0;
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 0 0 16px 0;
  }
  a {
    color: #000;
    border: 1px solid #000;
    padding: 8px;
    width: fit-content;
    text-decoration: none;
    &:visited {
      color: #000;
    }
  }
`;

const EventCard = ({ event }) => {
  const { bodyText, date, endDate, startTime, endTime, image, slug, title } = event;
  return (
    <EventWrapper>
      <img src={image.file.url} alt={image.description} />
      <CopySection>
        <span>{`${date}${endDate ? ` - ${endDate}` : ''}`}</span>
        <h3>{title}</h3>
        <p>{truncateText(bodyText.bodyText, 20)}</p>
        <span>{`${startTime} - ${endTime}`}</span>
        <Link to={`/events/${slug}`}>LEARN MORE</Link>
      </CopySection>
    </EventWrapper>
  );
};

export default EventCard;
