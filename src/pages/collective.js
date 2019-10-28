import React, { useState, useEffect, useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Masonry from 'react-masonry-component';

import Context from '~/config/Context';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import Filter from '~/components/includes/sub-header/Filter';

import { mediaMin } from '~/styles/mediaQueries';

import collectiveItemsStub from '~/data/local/collectiveItems';

const CollectiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .masonry {
    margin: 48px 0;
  }
`;

const CollectiveItemCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-bottom: 20px;
  width: 100%;
  ${mediaMin('tablet')} {
    margin-bottom: 40px;
  }
  &.small-vertical {
    ${mediaMin('tablet')} {
      width: calc(25% - 40px);
    }

    .image-container {
      height: 100%;
      padding-bottom: 100%;
    }
  }
  &.large-vertical {
    ${mediaMin('tablet')} {
      width: calc(50% - 40px);
    }
    .image-container {
      height: 100%;
      padding-bottom: 100%;
    }
  }
  &.large-horizontal {
    ${mediaMin('tablet')} {
      width: calc(50% - 40px);
    }
    .image-container {
      height: 50%;
      padding-bottom: 50%;
    }
  }

  .image-container {
    background-image: ${props => `url(${props.imgSrc})`};
    background-size: cover;
  }

  .description-container {
    padding: 20px;
    height: 180px;
    h1 {
      margin: 0;
    }
  }
`;

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

const parseTitle = title => {
  const titleArray = title.split('\n');

  return titleArray.map(el => <h1 key={el}>{el}</h1>);
};

const masonryOptions = {
  transitionDuration: '.25s',
  itemSelector: '.grid-item',
  columnWidth: '.small-vertical',
  gutter: 40,
};

const CollectivePage = ({ data }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'DINE', 'SHOP', 'LIFESTYLE', 'POP-UP'];
  // const collectiveItems = data.allContentfulCollectiveItem.nodes;
  const context = useContext(Context);
  const { setDarkTheme } = context;

  const generateCollectiveItems = collectiveItems => {
    return collectiveItems.map((collectiveItem, idx) => {
      // console.log(collectiveItem);
      const { displayTitle, image, slug, subtitle } = collectiveItem;

      return (
        <CollectiveItemCard
          className={`${generateCardClass(idx)} grid-item`}
          to={`/collective/${slug}`}
          key={`collective-item-${idx}`}
          imgSrc={image.file.url}
        >
          <div className="image-container" title={image.description} />
          <div className="description-container">
            <p>{subtitle}</p>
            {displayTitle && parseTitle(displayTitle.displayTitle)}
          </div>
        </CollectiveItemCard>
      );
    });
  };

  useEffect(() => {
    setDarkTheme(false);
  }, []);

  return (
    <Layout>
      <SEO title="Collective" />
      <CollectiveWrapper>
        <Filter title={'Discover\nROW DTLA'} filters={filters} activeFilter={filter} setFilter={setFilter} />
        <Masonry
          className="masonry"
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {generateCollectiveItems(collectiveItemsStub)}
        </Masonry>
      </CollectiveWrapper>
    </Layout>
  );
};

export default CollectivePage;

// export const query = graphql`
//   query CollectiveEntriesQuery {
//     allContentfulCollectiveItem {
//       nodes {
//         title
//         subtitle
//         slug
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `;
