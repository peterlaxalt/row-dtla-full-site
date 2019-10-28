import React from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

import { mediaMin } from '~/styles/mediaQueries';

const SliderSlide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  ${mediaMin('tabletLandscape')} {
    height: 100%;
    min-width: 100%;
    flex-direction: ${props => (props.slideStyle === 'Image Left' ? 'row-reverse' : 'row')};
  }
  img {
    width: 100%;
    ${mediaMin('tabletLandscape')} {
      ${props => (props.slideStyle === 'Image Full' ? 'max-height: 100%; min-width: 100%;' : null)}
      ${props =>
        props.slideStyle === 'Image Left' || props.slideStyle === 'Image Right'
          ? 'max-height: 100%; max-width: 50%;'
          : null}
    }
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: left;
  max-width: 100%;
  margin: 24px 0;
  ${mediaMin('tabletLandscape')} {
    margin: 0;
    padding: 4em;
    width: 50%;
  }
  span {
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 20px;
  }
  h3 {
    margin: 0;
    font-size: 40px;
    line-height: 44px;
    ${mediaMin('tabletLandscape')} {
      font-size: 55px;
      line-height: 60px;
    }
  }
  p {
    font-family: 'SangBleu Kingdom';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    ${mediaMin('tabletLandscape')} {
      font-size: 21px;
      letter-spacing: -0.3px;
      line-height: 28px;
    }
  }
  a {
    border: 1px solid #000;
    padding: 1em 2em;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    &:visited {
      color: #000;
    }
  }
`;

const ContentBlock = ({ title, sectionName, body, linkName, linkUrl }) => {
  return (
    <ContentColumn>
      <span>{sectionName}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <a href={linkUrl}>{linkName}</a>
    </ContentColumn>
  );
};

const Slide = ({ slide }) => {
  const { heroImage, linkName, linkUrl, style, title, sectionName, body, videoUrl } = slide;
  return (
    <SliderSlide slideStyle={style}>
      {style === 'Video' ? (
        <ReactPlayer url={videoUrl} width="100%" height="100%" light controls />
      ) : (
        <>
          <img src={heroImage.file.url} alt={heroImage.description} />
          {(style === 'Image Left' || style === 'Image Right') && (
            <ContentBlock title={title} sectionName={sectionName} body={body} linkName={linkName} linkUrl={linkUrl} />
          )}
        </>
      )}
    </SliderSlide>
  );
};

export default Slide;
