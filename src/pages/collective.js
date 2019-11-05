import React, { useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import SEO from '~/components/seo';

import { mediaMin } from '~/styles/mediaQueries';

import Filter from '~/components/includes/sub-header/Filter';
import CollectiveItemCard from '~/components/pages/collective/CollectiveItemCard';

const CollectiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ul {
    padding: 0;
    margin-top: 20px;
    list-style-type: none;
    ${mediaMin('tablet')} {
      margin-top: 40px;
    }
  }
`;

const masonryOptions = {
  transitionDuration: '0.25s',
  columnWidth: '.small-vertical',
  gutter: 40,
};

const CollectivePage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'DINE', 'SHOP', 'LIFESTYLE', 'POP-UP'];

  const collectiveItems = data.allContentfulCollectiveItem.nodes;

  const generateCollectiveItemCards = useCallback(() => {
    let filteredCollectiveItems = collectiveItems;
    if (filter !== 'ALL') {
      filteredCollectiveItems = filteredCollectiveItems.filter(collectiveItem => collectiveItem.type === filter);
    }
    return filteredCollectiveItems.map((collectiveItem, idx) => {
      return <CollectiveItemCard key={`collective-item-card-${idx}`} idx={idx} cardData={collectiveItem} />;
    });
  }, [filter, collectiveItems]);

  return (
    <>
      <SEO title="Collective" />
      <CollectiveWrapper>
        <Filter title={'Discover\nROW DTLA'} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} elementType={'ul'}>
          {generateCollectiveItemCards()}
        </Masonry>
      </CollectiveWrapper>
    </>
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
