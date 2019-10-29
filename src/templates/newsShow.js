import React, { useEffect, useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import RichText from '@madebyconnor/rich-text-to-jsx';

import Context from '~/config/Context';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import BackArrow from '~/images/icons/arrow-back.svg';
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
    font-weight: 500;
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

const BackgroundImage = styled.div`
  background-image: url("${props => props.imgsrc}");
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  background-fit: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
`;

const MobileImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  margin-top: 16px;
  ${mediaMin('tabletLandscape')} {
    display: none;
  }
`;

const NewsShow = ({ data }) => {
  const { contentfulNewsItem } = data;
  const { date, image, title, publication, body, articleURL } = contentfulNewsItem;
  const context = useContext(Context);
  const { setDarkTheme } = context;

  useEffect(() => {
    setDarkTheme(false);
  }, []);

  return (
    <Layout>
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
            <MobileImage src={image.file.url} />
            <RichText richText={JSON.parse(body.body)} />
            <BoxLink target="_blank" rel="noopener noreferrer" href={articleURL}>
              FULL ARTICLE
            </BoxLink>
          </CopyColumn>
          <ImageColumn>
            <BackgroundImage imgsrc={image.file.url} />
          </ImageColumn>
        </NewsInfo>
      </NewsWrapper>
    </Layout>
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
      image {
        description
        file {
          url
        }
      }
    }
  }
`;
