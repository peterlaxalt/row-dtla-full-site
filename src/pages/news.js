import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const generateNewsItems = newsItems => {
  return newsItems.map(newsItem => {
    const { id, slug, title, publication } = newsItem;

    return (
      <div key={`news-item-${id}`}>
        <h1>{title}</h1>
        <p>{publication}</p>
        <Link to={`/news/${slug}`}>{title}</Link>
      </div>
    );
  });
};

const NewsPage = ({ data }) => {
  const newsItems = data.allContentfulNewsItem.nodes;

  return (
    <Layout>
      <SEO title="Events" />
      <div className="events">{generateNewsItems(newsItems)}</div>
    </Layout>
  );
};

export default NewsPage;

export const query = graphql`
  query NewsQuery {
    allContentfulNewsItem {
      nodes {
        slug
        title
        date
        publication
        id
      }
    }
  }
`;
