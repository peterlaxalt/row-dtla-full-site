import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { mediaMin } from '~/styles/mediaQueries';
import { truncateText } from '~/components/includes/utils/helpers';

const NewsCardWrapper = styled.li`
  margin-bottom: calc(63px / 2);
  padding: 0;
  width: 100%;
  border: 1px solid #000;
  img {
    width: 100%;
    height: 100%;
  }
  ${mediaMin('tablet')} {
    width: calc(50% - 16px);
  }
  ${mediaMin('tabletLandscape')} {
    height: 620px;
    width: calc(33% - 16px);
  }
`;

const CopySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 45%;
  h3 {
    font-size: 32px;
    line-height: 36px;
    margin: 0 0 0 0;
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 0 0 16px 0;
  }
  .publication {
    margin: 16px 0 0 0;
    ${mediaMin('tabletLandscape')} {
      margin: auto 0 0 0;
    }
  }
  a {
    color: #000;
    text-decoration: none;
    &:visited {
      color: #000;
    }
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${props => props.imgsrc});
  max-width: 100%;
  max-height: 100%;
  height: 55%;
  width: 100%;
  background-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: none;
  ${mediaMin('tabletLandscape')} {
    display: block;
  }
`;

const MobileImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  ${mediaMin('tabletLandscape')} {
    display: none;
  }
`;

const NewsCard = ({ article }) => {
  const { images, date, title, slug, publication } = article;
  return (
    <NewsCardWrapper>
      <BackgroundImage imgsrc={images[0].file.url} />
      <MobileImage src={images[0].file.url} />
      <Link to={`/news/${slug}`}>
        <CopySection>
          <span>{date}</span>
          <h3>{truncateText(title, 10)}</h3>
          <span className="publication">{publication}</span>
        </CopySection>
      </Link>
    </NewsCardWrapper>
  );
};

export default NewsCard;
