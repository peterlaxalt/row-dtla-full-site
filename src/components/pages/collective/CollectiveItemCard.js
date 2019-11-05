import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { mediaMin } from '~/styles/mediaQueries';

const CollectiveItemCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  margin-bottom: 20px;
  ${mediaMin('tablet')} {
    margin-bottom: 40px;
  }
  &.small-vertical {
    ${mediaMin('tablet')} {
      width: calc(50% - 20px);
    }
    ${mediaMin('tabletLandscape')} {
      width: calc(25% - 30px);
    }
    .image-container {
      height: 100%;
      padding-bottom: 100%;
    }
  }
  &.large-vertical {
    ${mediaMin('tabletLandscape')} {
      width: calc(50% - 20px);
    }
    .image-container {
      height: 100%;
      padding-bottom: 100%;
    }
  }
  &.large-horizontal {
    ${mediaMin('tabletLandscape')} {
      width: calc(50% - 20px);
    }
    .image-container {
      height: 100%;
      padding-bottom: 100%;
      ${mediaMin('tablet')} {
        height: 50%;
        padding-bottom: 50%;
      }
    }
  }
  .image-container {
    background-image: ${props => `url(${props.imgsrc})`};
    background-size: cover;
  }
  .description-container {
    padding: 20px;
    height: 200px;
    h1 {
      font-size: 2rem;
      ${mediaMin('tabletLandscape')} {
        font-size: 1.8rem;
      }
      &:nth-of-type(1) {
        margin-bottom: 0;
        ${mediaMin('tabletLandscape')} {
          margin: 5px;
        }
      }
      &:nth-of-type(2) {
        margin-top: 0;
      }
    }
  }
`;

const parseTitle = title => {
  const titleArray = title.split('\n');

  return titleArray.map(el => <h1 key={el}>{el}</h1>);
};

const generateCardClass = idx => {
  let gridPosition = idx > 7 ? idx % 8 : idx;

  const classObj = {
    0: 'large-vertical',
    1: 'large-horizontal',
    2: 'small-vertical',
    3: 'small-vertical',
    4: 'large-horizontal',
    5: 'large-vertical',
    6: 'small-vertical',
    7: 'small-vertical',
  };

  return classObj[gridPosition];
};

const CollectiveItemCard = ({ cardData, idx }) => {
  const { slug, image, subtitle, displayTitle } = cardData;

  return (
    <CollectiveItemCardWrapper
      className={`${generateCardClass(idx)}`}
      to={`/collective/${slug}`}
      key={`collective-item-${idx}`}
      imgsrc={image.file.url}
    >
      <div className="image-container" title={image.description} />
      <div className="description-container">
        <p>{subtitle}</p>
        {displayTitle && parseTitle(displayTitle.displayTitle)}
      </div>
    </CollectiveItemCardWrapper>
  );
};

export default CollectiveItemCard;
