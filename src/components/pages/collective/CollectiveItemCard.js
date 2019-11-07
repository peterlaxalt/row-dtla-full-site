import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { mediaMin } from '~/styles/mediaQueries';

import placeholderImg from '~/images/backup/backup_image.jpg';

const CollectiveItemCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  margin-bottom: 20px;
  ${mediaMin('tablet')} {
    margin-bottom: 40px;
  }
  ${mediaMin('tabletLandscape')} {
    transition: box-shadow 300ms ease;
    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    }
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
    background-position: center;
  }
  .description-container {
    padding: 20px;
    height: 172px;
    display: flex;
    flex-direction: column;

    .title-container {
      margin: 0;
      h2 {
        margin: 0;
        font-weight: bold;
        font-size: 32px;
        line-height: 36px;
        ${mediaMin('tabletLandscape')} {
          font-size: 40px;
          line-height: 44px;
        }
      }
    }
    span {
      margin: 0 0 16px 0;
    }
  }
`;

const parseTitle = title => {
  const titleArray = title.split('\n');

  return (
    <div className="title-container">
      {titleArray.map(el => (
        <h2 key={el}>{el}</h2>
      ))}
    </div>
  );
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
      imgsrc={image ? image.file.url : placeholderImg}
    >
      <div className="image-container" title={image ? image.description : 'Placeholder Image'} />
      <div className="description-container">
        <span>{subtitle}</span>
        {displayTitle && parseTitle(displayTitle.displayTitle)}
      </div>
    </CollectiveItemCardWrapper>
  );
};

export default CollectiveItemCard;
