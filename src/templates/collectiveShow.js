import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

import collectiveItem from '~/data/local/collectiveItem';

const CollectiveShow = ({ data }) => {
  // const { title } = data.contentfulCollectiveItem;
  const { descriptionBody, title } = collectiveItem;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <p>{descriptionBody.descriptionBody}</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
};

export default CollectiveShow;

// export const pageQuery = graphql`
//   query($slug: String!) {
//     contentfulCollectiveItem(slug: { eq: $slug }) {
//       id
//       addressLine1
//       addressLine2
//       descriptionBody {
//         descriptionBody
//       }
//       parking
//       instagram
//       timeCloseFriday
//       timeCloseMonday
//       timeCloseSaturday
//       timeCloseSunday
//       timeOpenWednesday
//       timeOpenTuesday
//       timeOpenThursday
//       timeOpenSunday
//       timeOpenSaturday
//       timeOpenMonday
//       timeOpenFriday
//       timeCloseWednesday
//       timeCloseTuesday
//       timeCloseThursday
//       subtitle
//       seoDescription {
//         seoDescription
//       }
//       email
//       facebook
//       website
//       title
//     }
//   }
// `;
