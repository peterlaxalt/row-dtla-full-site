import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';

import Context from '~/config/Context';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';
import HomeSlider from '~/components/includes/sliders/HomeSlider';

const IndexPage = ({ data }) => {
  const context = useContext(Context);
  const { allContentfulHomeSlides } = data;
  const { setDarkTheme } = context;

  useEffect(() => {
    setDarkTheme(false);
  }, []);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HomeSlider slideArray={allContentfulHomeSlides.nodes} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulHomeSlides {
      nodes {
        contentful_id
        linkName
        linkUrl
        sectionName
        style
        title
        body
        videoUrl
        heroImage {
          description
          title
          file {
            url
          }
          resolutions {
            src
            srcSet
          }
        }
      }
    }
  }
`;

export default IndexPage;
