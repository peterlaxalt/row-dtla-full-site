import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back.svg';
import { mediaMin } from '~/styles/mediaQueries';
import { ShowOuter, ShowInner, CopyColumn, ImageColumn, HeroImage } from './styles';

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
  margin: 16px 0 !important;
  &:hover {
    background-color: #000;
    color: #fff;
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
      <ShowOuter>
        <Link to="/news">
          <img src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn>
            <h2>{date}</h2>
            <h1>{title}</h1>
            <h2>{publication}</h2>
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
          <ImageColumn noDesktop>
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
        </ShowInner>
      </ShowOuter>
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
