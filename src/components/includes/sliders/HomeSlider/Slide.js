import React from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

import { mediaMin } from '~/styles/mediaQueries';
import PlayIcon from '~/images/icons/videoplay_icon.svg';

const SliderSlide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
  ${props => (props.videoPlaceholder ? `background-image: url(${props.videoPlaceholder});` : '')}
  ${mediaMin('tabletLandscape')} {
    height: 90vh;
    min-width: 100%;
    flex-direction: ${props => (props.slideStyle === 'Image Left' ? 'row-reverse' : 'row')};
  }
  .react-player__preview {
    .react-player__shadow {
      background: none !important;
      border-radius: 0 !important;
      height: 200px !important;
      width: 200px !important;
      .react-player__play-icon {
        border-style: none !important;
        border-width: 0 !important;
        margin-left: 0 !important;
        background-image: url(${PlayIcon});
        height: 100%;
        width: 100%;
      }
    }
  }
`;

const DesktopImage = styled.div`
  display: none;
  ${mediaMin('tabletLandscape')} {
    display: block;
    background-image: url(${props => props.imgsrc});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    ${props => (props.slideStyle === 'Image Left' || props.slideStyle === 'Image Right' ? 'width: 50%;' : null)}
  }
`;

const MobileImage = styled.img`
  width: 100%;
  height: 100%;
  ${mediaMin('tabletLandscape')} {
    display: none !important;
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
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`;

const Progress = styled.span`
  position: fixed;
  bottom: 5%;
  left: 9.5%;
  ${mediaMin('tabletLandscape')} {
    left: 0.5%;
    bottom: 4%;
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

const Slide = ({ slide, arrayLength }) => {
  const { heroImage, linkName, linkUrl, style, title, sectionName, body, videoUrl, videoPlaceholder, order } = slide;

  return (
    <SliderSlide slideStyle={style}>
      {style === 'Video' ? (
        <>
          <ReactPlayer
            url={videoUrl}
            config={{ preload: true }}
            width="100%"
            height="100%"
            controls
            playsinline
            light={videoPlaceholder.file.url}
          />
          <Progress>{`${order.toString().padStart(2, '0')}/${arrayLength.toString().padStart(2, '0')}`}</Progress>
        </>
      ) : (
        <>
          <DesktopImage slideStyle={style} imgsrc={heroImage.file.url} alt={heroImage.description} />
          <MobileImage slideStyle={style} src={heroImage.file.url} alt={heroImage.description} />
          {(style === 'Image Left' || style === 'Image Right') && (
            <ContentBlock title={title} sectionName={sectionName} body={body} linkName={linkName} linkUrl={linkUrl} />
          )}
          <Progress>{`${order.toString().padStart(2, '0')}/${arrayLength.toString().padStart(2, '0')}`}</Progress>
        </>
      )}
    </SliderSlide>
  );
};

export default Slide;
