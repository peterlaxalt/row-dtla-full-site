import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import styled from '@emotion/styled';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import EventCard from '~/components/includes/events/EventCard';
import Filter from '~/components/includes/sub-header/Filter';

const masonryOptions = {
  transitionDuration: 0,
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

const EventsPage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'FOOD TRUCKS', 'EVENTS', 'ARCHIVE'];
  const events = data.allContentfulEvent.nodes;

  const generateEvents = events => {
    let filteredEvents = events;
    if (filter !== 'ALL') {
      filteredEvents = filteredEvents.filter(newsItem => newsItem.type === filter);
    }
    return filteredEvents.map(event => {
      const { id } = event;
      return <EventCard className="event" event={event} key={id} />;
    });
  };

  return (
    <Layout>
      <SEO title="Events" />
      <EventsWrapper>
        <Filter title={"What's on at\nROW DTLA"} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} elementType={'ul'}>
          {generateEvents(events)}
          <div className="gutter-sizer" />
        </Masonry>
      </EventsWrapper>
    </Layout>
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
        bodyText {
          bodyText
        }
        endTime
        startTime
      }
    }
  }
`;
