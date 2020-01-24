import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import RichText from '@madebyconnor/rich-text-to-jsx';

import SEO from '~/components/seo';
import BackArrow from '~/assets/images/icons/arrow-back.svg';
import { mediaMin } from '~/styles/mediaQueries';
import {
  ShowOuter,
  ShowInner,
  CopyColumn,
  Copy,
  ImageColumn,
  HeroImage,
  SmallImageContainer,
  SmallImage,
  Images
} from './styles';

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
  transition: all 200ms ease;
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

const NewsShow = ({ data }) => {
  const { date, images, title, publication, body, articleURL } = data.contentfulNewsItem;
  const [mounted, setMounted] = useState(false);
  const CopyRef = useRef(null);
  const ImageRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    fixLinks();
  }, []);

  const fixLinks = useCallback(() => {
    const bodyLinks = CopyRef.current.getElementsByTagName('a');
    for (let idx = 0; idx < bodyLinks.length; idx += 1) {
      let link = bodyLinks[idx];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }, [CopyRef]);

  return (
    <>
      <SEO title={title} />
      <ShowOuter>
        <Link to="/news">
          <img className="back-arrow" src={BackArrow} alt="back arrow" />
        </Link>
        <ShowInner>
          <CopyColumn>
            <Copy ref={CopyRef} numChildren={CopyRef.current ? CopyRef.current.children.length : 50} mounted={mounted}>
              <h2>{date}</h2>
              <h1>{title}</h1>
              <h2>{publication}</h2>
              <MobileImages>
                {images && (
                  <>
                    <HeroImage src={images[0].file.url} mounted={mounted} />
                    <SmallImageContainer mounted={mounted}>
                      {images.slice(1, 3).map((image, idx) => {
                        return <SmallImage src={image.file.url} key={image.file.url} position={idx % 2 === 0} />;
                      })}
                    </SmallImageContainer>
                  </>
                )}
              </MobileImages>
              {body && <RichText richText={JSON.parse(body.body)} />}
              {articleURL && (
                <BoxLink target="_blank" rel="noopener noreferrer" href={articleURL}>
                  <span>FULL ARTICLE</span>
                </BoxLink>
              )}
            </Copy>
          </CopyColumn>
          <ImageColumn noDesktop>
            {images && (
              <Images>
                <HeroImage src={images[0].file.url} mounted={mounted} />
                <SmallImageContainer
                  mounted={mounted}
                  ref={ImageRef}
                  numChildren={CopyRef.current ? CopyRef.current.children.length : 50}
                >
                  {images.slice(1).map((image, idx) => {
                    return <SmallImage src={image.file.url} key={image.file.url} position={idx % 2 === 0} />;
                  })}
                </SmallImageContainer>
              </Images>
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
