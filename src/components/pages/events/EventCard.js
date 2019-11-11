import React, { useReducer } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import moment from 'moment';

import { mediaMin } from '~/styles/mediaQueries';
import { truncateText } from '~/utils/helpers';

import placeholderImg from '~/images/backup/backup_image.jpg';

const EventWrapper = styled(Link)`
  margin-bottom: calc(64px / 3);
  padding: 0;
  width: 100%;
  border: 1px solid #000;
  img {
    width: 100%;
  }
  ${mediaMin('tablet')} {
    width: calc(50% - 16px);
  }
  ${mediaMin('tabletLandscape')} {
    width: calc(25% - 16px);
    transition: box-shadow 300ms ease;
    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    }
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
  .fake-button {
    color: #000;
    border: 1px solid #000;
    padding: 8px 16px;
    width: fit-content;
    text-decoration: none;
    &:visited {
      color: #000;
    }
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const EventCard = ({ event }) => {
  const { body, date, endDate, startTime, endTime, image, slug, title } = event;
  const parsedStartDate = moment(date).format('MMM Do');
  const parsedEndDate = moment(endDate).format('MMM Do');
  return (
    <EventWrapper to={`/events/${slug}`}>
      <Fade>
        <img src={image ? image.file.url : placeholderImg} alt={image ? image.description : 'Placeholder Image'} />
        <CopySection>
          <span>{`${parsedStartDate}${endDate ? ` - ${parsedEndDate}` : ''}`}</span>
          <h3>{title}</h3>
          <p>{truncateText(JSON.parse(body.body).content[0].content[0].value, 20)}</p>
          <span>{`${startTime} - ${endTime}`}</span>
          <div className="fake-button">
            <span>LEARN MORE</span>
          </div>
        </CopySection>
      </Fade>
    </EventWrapper>
  );
};

export default EventCard;
