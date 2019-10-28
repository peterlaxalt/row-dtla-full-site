import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { mediaMin } from '~/styles/MediaQueries';
import { truncateText } from '~/components/includes/utils/helpers';

const NewsCardWrapper = styled.li`
  margin-bottom: 16px;
  padding: 0;
  width: 100%;
  border: 1px solid #000;
  img {
    width: 100%;
    height: 100%;
  }
  ${mediaMin('tabletLandscape')} {
    width: calc(33% - 16px);
  }
`;

const CopySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  h3 {
    font-size: 32px;
    line-height: 36px;
    margin: 0 0 40px 0;
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 0 0 16px 0;
  }
  a {
    color: #000;
    text-decoration: none;
    &:visited {
      color: #000;
    }
  }
`;

const NewsCard = ({ article }) => {
  const { image, date, title, slug, publication } = article;
  return (
    <NewsCardWrapper>
      <img src={image.file.url} alt={image.description} />
      <Link to={`/news/${slug}`}>
        <CopySection>
          <span>{date}</span>
          <h3>{truncateText(title, 10)}</h3>
          <span>{publication}</span>
        </CopySection>
      </Link>
    </NewsCardWrapper>
  );
};

export default NewsCard;
