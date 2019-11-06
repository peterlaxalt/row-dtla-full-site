import React, { useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import styled from '@emotion/styled';

import { mediaMin } from '~/styles/mediaQueries';
import SEO from '~/components/seo';
import EventCard from '~/components/pages/events/EventCard';
import Filter from '~/components/includes/sub-header/Filter';

const masonryOptions = {
  transitionDuration: '0.25s',
  gutter: '.gutter-sizer',
};

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ul {
    padding: 0;
    list-style-type: none;
    .gutter-sizer {
      width: calc(64px / 3);
    }
  }
`;

const LoadMoreButton = styled.button`
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  border: 1px solid #000;
  height: 40px;
  margin: 0 auto 120px auto;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 20px;
  cursor: pointer;
  background-color: #fff;
  width: 75%;
  ${mediaMin('tabletLandscape')} {
    width: 25%;
  }
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

const EventsPage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const [loaded, setLoaded] = useState(10);
  const filters = ['ALL', 'FOOD TRUCKS', 'EVENTS', 'ARCHIVE'];
  const events = data.allContentfulEvent.nodes;

  const generateEvents = useCallback(() => {
    let filteredEvents = events;
    if (filter !== 'ALL') {
      filteredEvents = filteredEvents.filter(newsItem => newsItem.type === filter);
    }
    return filteredEvents.slice(0, loaded).map(event => {
      const { id } = event;
      return <EventCard className="event" event={event} key={id} />;
    });
  }, [filter, events, loaded]);

  const loadMore = useCallback(() => {
    setLoaded(loaded + 10);
  }, [setLoaded, loaded]);

  return (
    <>
      <SEO title="Events" />
      <EventsWrapper>
        <Filter title={"What's on at\nROW DTLA"} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} elementType={'ul'}>
          {generateEvents()}
          <div className="gutter-sizer" />
        </Masonry>
        <LoadMoreButton onClick={loadMore} visible={loaded < events.length}>
          LOAD MORE
        </LoadMoreButton>
      </EventsWrapper>
    </>
  );
};

export default EventsPage;

export const query = graphql`
  {
    allContentfulEvent(sort: { fields: date, order: DESC }) {
      nodes {
        date(formatString: "MMM Do")
        endDate(formatString: "MMM Do")
        id
        slug
        title
        type
        image {
          file {
            url
          }
          description
        }
        body {
          body
        }
        endTime
        startTime
      }
    }
  }
`;
