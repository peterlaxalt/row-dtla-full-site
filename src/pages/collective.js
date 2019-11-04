import React, { useState } from 'react';
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
  .masonry {
    margin: 48px 0;
  }
  .grid-sizer {
    width: calc(144px / 3);
  }
`;

const masonryOptions = {
  transitionDuration: '.25s',
  itemSelector: '.grid-item',
  columnWidth: '.small-vertical',
  gutter: 40,
};

const CollectivePage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'DINE', 'SHOP', 'LIFESTYLE', 'POP-UP'];

  const collectiveItems = data.allContentfulCollectiveItem.nodes;

  const generateCollectiveItems = () => {
    let filteredCollectiveItems = collectiveItems;
    if (filter !== 'ALL') {
      filteredCollectiveItems = filteredCollectiveItems.filter(collectiveItem => collectiveItem.type === filter);
    }
    return filteredCollectiveItems.map((collectiveItem, idx) => {
      return <CollectiveItemCard key={`collective-item-card-${idx}`} idx={idx} cardData={collectiveItem} />;
    });
  };

  return (
    <Layout>
      <SEO title="Collective" />
      <CollectiveWrapper>
        <Filter title={'Discover\nROW DTLA'} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry className="masonry" options={masonryOptions}>
          {generateCollectiveItems()}
          <div className="grid-sizer" />
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
