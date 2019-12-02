import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player';

import HomeSlideInner from './HomeSlideInner';

const HomeSlide = styled.div`
  margin-bottom: 14px;
  padding: 0;
  width: 100%;
  border: 1px solid #000;
  overflow: hidden;
  min-height: calc(((100vw - 24px) * 9) / 16);
  display: flex;

  .react-reveal {
    height: 100%;
    width: 100%;
  }
  .react-player__preview,
  iframe {
    min-height: calc(((100vw - 24px) * 9) / 16);
  }
  img {
    width: 100%;
  }
`;

const HomeSlideMobile = ({ slide }) => {
  const { style, videoUrl, videoPlaceholder } = slide;

  return (
    <HomeSlide>
      <Fade>
        {style === 'Video' ? (
          <ReactPlayer
            url={videoUrl}
            config={{
              preload: true
            }}
            width="100%"
            height="100%"
            controls
            playsinline
            playing={false}
            loop={false}
            light={videoPlaceholder.file.url}
          />
        ) : (
          <HomeSlideInner slide={slide} />
        )}
      </Fade>
    </HomeSlide>
  );
};

export default HomeSlideMobile;
