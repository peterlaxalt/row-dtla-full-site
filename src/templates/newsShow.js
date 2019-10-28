import React, { useEffect, useContext } from 'react';
import { Link, graphql } from 'gatsby';

import Context from '~/config/Context';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const EventShow = ({ data }) => {
  const { id, publication, title, type, date, body } = data.contentfulNewsItem;
  const context = useContext(Context);
  const { setDarkTheme } = context;

  useEffect(() => {
    setDarkTheme(false);
  }, []);

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{type}</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default EventShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulNewsItem(slug: { eq: $slug }) {
      id
      publication
      title
      type
      date
      body {
        content {
          content {
            nodeType
            value
          }
        }
      }
    }
  }
`;
