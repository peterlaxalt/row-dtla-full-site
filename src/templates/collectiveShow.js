import React from 'react';
// import { Link, graphql } from 'gatsby';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const CollectiveShow = ({ data }) => {
  const { title } = data.contentfulCollectiveItem;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default CollectiveShow;

// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulCollectiveItem(slug: {eq: "13-bonaparte-5"}) {
//     id
//     displayTitle {
//       displayTitle
//     }
//     addressLine1
//     addressLine2
//     descriptionBody {
//       descriptionBody
//     }
//     parking
//     instagram
//     timeCloseFriday
//     timeCloseMonday
//     timeCloseSaturday
//     timeCloseSunday
//     timeOpenWednesday
//     timeOpenTuesday
//     timeOpenThursday
//     timeOpenSunday
//     timeOpenSaturday
//     timeOpenMonday
//     timeOpenFriday
//     timeCloseWednesday
//     timeCloseTuesday
//     timeCloseThursday
//     subtitle
//     seoDescription {
//       seoDescription
//     }
//     email
//     facebook
//     website
//   }
//   }
// `;
