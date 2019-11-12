import React, { useState, useCallback, useEffect } from 'react';
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
  .masonry {
    padding: 0;
    margin-top: 20px;
    list-style-type: none;
    ${mediaMin('tablet')} {
      margin-top: 40px;
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
    display: none;
  }
`;

const masonryOptions = {
  transitionDuration: '0.25s',
  columnWidth: '.small-vertical',
  gutter: 40,
};

const CollectivePage = ({ data }) => {
  const collectiveItems = data.allContentfulCollectiveItem.nodes;
  const [filter, setFilter] = useState('ALL');
  const [loaded, setLoaded] = useState(10);
  const [collectiveList, setCollectiveList] = useState([]);
  const [listLength, setListLength] = useState(0);
  const filters = ['ALL', 'DINE', 'SHOP', 'LIFESTYLE', 'POP-UP'];

  const loadMore = useCallback(() => {
    setLoaded(loaded + 10);
  }, [loaded, setLoaded]);

  const generateCollectiveItemCards = useCallback(() => {
    let filteredCollectiveItems = collectiveItems;
    if (filter !== 'ALL') {
      filteredCollectiveItems = filteredCollectiveItems.filter(collectiveItem => collectiveItem.type === filter);
    }
    setListLength(filteredCollectiveItems.length);
    if (typeof window !== `undefined`) {
      return filteredCollectiveItems
        .slice(0, window.innerWidth > 1024 ? collectiveItems.length : loaded)
        .map((collectiveItem, idx) => {
          return <CollectiveItemCard key={`collective-item-card-${idx}`} idx={idx} cardData={collectiveItem} />;
        });
    }
  }, [filter, collectiveItems, loaded]);

  useEffect(() => {
    setCollectiveList(generateCollectiveItemCards());
  }, []);

  useEffect(() => {
    setCollectiveList(generateCollectiveItemCards());
  }, [filter, loaded]);

  return (
    <>
      <SEO title="Collective" />
      <CollectiveWrapper>
        <Filter title={'Discover\nROW DTLA'} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} className="masonry">
          {collectiveList}
        </Masonry>
        <LoadMoreButton onClick={loadMore} visible={loaded < listLength}>
          LOAD MORE
        </LoadMoreButton>
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
