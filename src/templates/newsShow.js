import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back.svg';
import { mediaMin } from '~/styles/mediaQueries';

const NewsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NewsInfo = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 24px 0;
  ${mediaMin('tabletLandscape')} {
    margin: 32px 0;
    flex-direction: row;
  }
`;

const CopyColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  ${mediaMin('tabletLandscape')} {
    margin-top: 0;
    width: 50%;
    padding: 0 10% 0 0;
  }
  h2 {
    margin: 16px 0;
    font-size: 40px;
    line-height: 44px;
    ${mediaMin('tabletLandscape')} {
      font-size: 55px;
      line-height: 60px;
    }
  }
  h3 {
    font-size: 1.17em;
    margin: 16px 0;
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
  }
  p {
    font-family: 'SangBleu Kingdom';
    font-size: 16px;
    line-height: 24px;
    white-space: pre-line;
  }
  a {
    margin-top: 32px;
    text-decoration: underline;
  }
`;

const BoxLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0 10%;
  border: 1px solid #000;
  height: 40px;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 20px;
  text-decoration: none !important;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ImageColumn = styled.div`
  display: none;
  ${mediaMin('tabletLandscape')} {
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 50%;
  }
`;

const MobileImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  ${mediaMin('tabletLandscape')} {
    display: none;
  }
`;

const SmallImageContainer = styled.div`
  img {
    object-fit: cover;
  }
  ${mediaMin('tabletLandscape')} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
`;

const SmallImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 50%;
  padding: 16px 8px 0 8px;
  ${props => (props.position ? 'padding-left: 0;' : 'padding-right: 0;')}
`;

const NewsShow = ({ data }) => {
  const { date, images, title, publication, body, articleURL } = data.contentfulNewsItem;

  return (
    <>
      <SEO title={title} />
      <NewsWrapper>
        <Link to="/news">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <NewsInfo>
          <CopyColumn>
            <span>{date}</span>
            <h2>{title}</h2>
            <span>{publication}</span>
            <MobileImages>
              {images && (
                <>
                  <HeroImage src={images[0].file.url} />
                  <SmallImageContainer>
                    {images.slice(1).map((image, idx) => {
                      return <SmallImage src={image.file.url} key={image.file.url} position={idx % 2 === 0} />;
                    })}
                  </SmallImageContainer>
                </>
              )}
            </MobileImages>
            <RichText richText={JSON.parse(body.body)} />
            <BoxLink target="_blank" rel="noopener noreferrer" href={articleURL}>
              <span>FULL ARTICLE</span>
            </BoxLink>
          </CopyColumn>
          <ImageColumn>
            {images && (
              <>
                <HeroImage src={images[0].file.url} />
                <SmallImageContainer>
                  {images.slice(1).map((image, idx) => {
                    return <SmallImage src={image.file.url} key={image.file.url} position={idx % 2 === 0} />;
                  })}
                </SmallImageContainer>
              </>
            )}
          </ImageColumn>
        </NewsInfo>
      </NewsWrapper>
    </>
  );
};

export default NewsShow;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulNewsItem(slug: { eq: $slug }) {
      id
      title
      articleURL
      date(formatString: "MM.DD.YYYY")
      publication
      body {
        body
      }
      images {
        file {
          url
        }
      }
    }
  }
`;
