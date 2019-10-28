import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import NewsCard from '~/components/includes/news/NewsCard';

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

const generateNewsItems = newsItems => {
  return newsItems.map(newsItem => {
    const { id } = newsItem;
    return <NewsCard key={`news-item-${id}`} article={newsItem} />;
  });
};

const NewsPage = ({ data }) => {
  const newsItems = data.allContentfulNewsItem.nodes;

  return (
    <Layout>
      <SEO title="Events" />
      <NewsWrapper>
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
