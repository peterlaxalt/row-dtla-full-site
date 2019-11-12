import React, { useState, useCallback, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import { mediaMin } from '~/styles/mediaQueries';
import SEO from '~/components/seo';
import NewsCard from '~/components/pages/news/NewsCard';
import Filter from '~/components/includes/sub-header/Filter';

const masonryOptions = {
  transitionDuration: '0.25s',
  gutter: 20,
};

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .masonry {
    padding: 0;
    list-style-type: none;
    margin: 20px 0 40px;
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
  const [loaded, setLoaded] = useState(9);
  const [listLength, setListLength] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const filters = ['ALL', 'INSIDER NEWS', 'IN THE NEWS'];
  const newsItems = data.allContentfulNewsItem.nodes;

  const generateNewsItems = useCallback(() => {
    let filteredNews = newsItems;
    if (filter !== 'ALL') {
      filteredNews = filteredNews.filter(newsItem => newsItem.type === filter);
    }
    filteredNews = filteredNews.filter(newsItem => newsItem.images);
    setListLength(filteredNews.length);
    return filteredNews.slice(0, loaded).map(newsItem => {
      const { id } = newsItem;
      return <NewsCard key={`news-item-${id}`} article={newsItem} />;
    });
  }, [filter, loaded, newsItems, listLength]);

  const loadMore = useCallback(() => {
    setLoaded(loaded + 9);
  }, [setLoaded, loaded]);

  useEffect(() => {
    setNewsList(generateNewsItems);
  }, []);

  useEffect(() => {
    setNewsList(generateNewsItems);
  }, [filter, loaded]);

  return (
    <>
      <SEO title="Events" />
      <NewsWrapper>
        <Filter title={"What's new at\nROW DTLA"} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} className="masonry">
          {newsList}
        </Masonry>
        <LoadMoreButton onClick={loadMore} visible={loaded < listLength}>
          LOAD MORE
        </LoadMoreButton>
      </NewsWrapper>
    </>
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
