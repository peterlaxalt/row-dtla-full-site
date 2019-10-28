import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import NewsCard from '~/components/includes/news/NewsCard';
import Filter from '~/components/includes/sub-header/Filter';

const masonryOptions = {
  transitionDuration: 0,
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
      width: 24px;
    }
  }
`;

const NewsPage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'ARTISTS IN RESIDENCE', 'IN THE NEIGHBORHOOD', 'PRESS'];
  const newsItems = data.allContentfulNewsItem.nodes;

  const generateNewsItems = () => {
    let filteredNews = newsItems;
    if (filter !== 'ALL') {
      filteredNews = filteredNews.filter(newsItem => newsItem.type === filter);
    }
    return filteredNews.map(newsItem => {
      const { id } = newsItem;
      return <NewsCard key={`news-item-${id}`} article={newsItem} />;
    });
  };

  return (
    <Layout>
      <SEO title="Events" />
      <NewsWrapper>
        <Filter title={"What's new at\nROW DTLA"} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry options={masonryOptions} elementType={'ul'}>
          {generateNewsItems(newsItems)}
          <div className="gutter-sizer" />
        </Masonry>
      </NewsWrapper>
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
        date(formatString: "MM.DD.YYYY")
        publication
        id
        type
        image {
          description
          file {
            url
          }
        }
      }
    }
  }
`;
