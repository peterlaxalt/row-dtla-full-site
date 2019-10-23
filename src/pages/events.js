import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const generateEvents = events => {
  return events.map(event => {
    const { id, slug, title } = event;

    return (
      <div key={`entry-${id}`}>
        <h1>{title}</h1>
        <Link to={`/events/${slug}`}>{title}</Link>
      </div>
    );
  });
};

const EventsPage = ({ data }) => {
  const events = data.allContentfulEvent.nodes;

  return (
    <Layout>
      <SEO title="Events" />
      <div className="events">{generateEvents(events)}</div>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  query EventsQuery {
    allContentfulEvent {
      nodes {
        id
        slug
        address
        body {
          content {
            content {
              value
              nodeType
            }
          }
        }
        title
        date
        endDate
        suite
        type
      }
    }
  }
`;
