import React, { useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import { mediaMin } from '~/styles/mediaQueries';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import NewsCard from '~/components/pages/news/NewsCard';
import Filter from '~/components/includes/sub-header/Filter';

const masonryOptions = {
  transitionDuration: '0.25s',
  gutter: '.gutter-sizer',
};

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ul {
    padding: 0;
    list-style-type: none;
    .gutter-sizer {
      width: calc(63px / 2);
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
  width: 75%;
  background-color: #fff;
  ${mediaMin('tabletLandscape')} {
    width: 25%;
  }
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

const NewsPage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const [loaded, setLoaded] = useState(10);
  const filters = ['ALL', 'ARTISTS IN RESIDENCE', 'IN THE NEIGHBORHOOD', 'PRESS'];
  const newsItems = data.allContentfulNewsItem.nodes;

  const generateNewsItems = useCallback(() => {
    let filteredNews = newsItems;
    if (filter !== 'ALL') {
      filteredNews = filteredNews.filter(newsItem => newsItem.type === filter);
    }
    return filteredNews.slice(0, loaded).map(newsItem => {
      const { id } = newsItem;
      return <NewsCard key={`news-item-${id}`} article={newsItem} />;
    });
  }, [filter, loaded, newsItems]);

  const loadMore = useCallback(() => {
    setLoaded(loaded + 10);
  }, [loaded]);

  return (
    <Layout>
      <SEO title="Events" />
      <NewsWrapper>
        <Filter title={"What's new at\nROW DTLA"} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} elementType={'ul'}>
          {generateNewsItems()}
          <div className="gutter-sizer" />
        </Masonry>
        <LoadMoreButton onClick={loadMore} visible={loaded < newsItems.length}>
          LOAD MORE
        </LoadMoreButton>
      </NewsWrapper>
    </Layout>
  );
};

export default NewsPage;

export const query = graphql`
  query NewsQuery {
    allContentfulNewsItem(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "MM.DD.YYYY")
        publication
        id
        type
        images {
          file {
            url
          }
        }
      }
    }
  }
`;
