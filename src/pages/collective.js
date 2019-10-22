import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const generateCollectiveItems = collectiveItems => {
  return collectiveItems.map(collectiveItem => {
    const {
      closeTime,
      description,
      email,
      facebook,
      id,
      image,
      instagram,
      openTime,
      parking,
      slug,
      subtitle,
      title,
      type,
      website,
    } = collectiveItem;

    return (
      <div key={`entry-${id}`}>
        <h1>{title}</h1>
        <p>{description.description}</p>
        <Link to={`/collective/${slug}`}>{title}</Link>
      </div>
    );
  });
};

const CollectivePage = ({ data }) => {
  const collectiveItems = data.allContentfulCollectiveItem.nodes;

  return (
    <Layout>
      <SEO title="Collective" />
      <div className="collective">{generateCollectiveItems(collectiveItems)}</div>
    </Layout>
  );
};

export default CollectivePage;

export const query = graphql`
  query CollectiveEntriesQuery {
    allContentfulCollectiveItem {
      nodes {
        website
        type
        title
        subtitle
        slug
        parking
        instagram
        image {
          file {
            url
          }
        }
        id
        facebook
        email
        description {
          description
        }
        closeTime
        openTime
      }
    }
  }
`;
