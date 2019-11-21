import React from 'react';
import { graphql } from 'gatsby';

import SEO from '~/components/seo';
import HomeSlider from '~/components/includes/sliders/HomeSlider';

const IndexPage = ({ data }) => {
  const { allContentfulHomeSlides } = data;

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HomeSlider slideArray={allContentfulHomeSlides.nodes} />
    </>
  );
};

export const query = graphql`
  {
    allContentfulHomeSlides(sort: { order: ASC, fields: order }) {
      nodes {
        order
        contentful_id
        linkName
        linkUrl
        sectionName
        style
        title
        body
        autoplay
        videoUrl
        videoPlaceholder {
          file {
            url
          }
        }
        heroImage {
          description
          title
          file {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
