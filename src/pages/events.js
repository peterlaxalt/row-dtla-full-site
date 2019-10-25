import React from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import styled from '@emotion/styled';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import EventCard from '~/components/includes/events/EventCard';

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

const generateEvents = events => {
  return events.map(event => {
    const { id } = event;
    return <EventCard className="event" event={event} key={id} />;
  });
};

const EventsPage = ({ data }) => {
  const events = data.allContentfulEvent.nodes;

  return (
    <Layout>
      <SEO title="Events" />
      <EventsWrapper>
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
    allContentfulEvent {
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
