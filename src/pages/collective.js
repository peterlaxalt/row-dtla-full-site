import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';

import Filter from '~/components/includes/sub-header/Filter';
import CollectiveItemCard from '~/components/pages/collective/CollectiveItemCard';

const CollectiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ul {
    padding: 0;
    list-style-type: none;
  }
`;

const masonryOptions = {
  transitionDuration: '0.25s',
  columnWidth: '.small-vertical',
  gutter: 40,
};

const generateCollectiveItemCards = collectiveItems =>
  collectiveItems.map((collectiveItem, idx) => (
    <CollectiveItemCard key={`collective-item-card-${idx}`} idx={idx} cardData={collectiveItem} />
  ));

const CollectivePage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'DINE', 'SHOP', 'LIFESTYLE', 'POP-UP'];

  const collectiveItems = data.allContentfulCollectiveItem.nodes;

  let filteredCollectiveItems = collectiveItems;

  if (filter !== 'ALL') {
    filteredCollectiveItems = filteredCollectiveItems.filter(collectiveItem => collectiveItem.type === filter);
  }

  return (
    <Layout>
      <SEO title="Collective" />
      <CollectiveWrapper>
        <Filter title={'Discover\nROW DTLA'} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} elementType={'ul'}>
          {generateCollectiveItemCards(filteredCollectiveItems)}
        </Masonry>
      </CollectiveWrapper>
    </Layout>
  );
};

export default CollectivePage;

export const query = graphql`
  query CollectiveEntriesQuery {
    allContentfulCollectiveItem(sort: { order: ASC, fields: title }) {
      nodes {
        displayTitle {
          displayTitle
        }
        title
        type
        subtitle
        slug
        image {
          file {
            url
          }
        }
        id
      }
    }
  }
`;
