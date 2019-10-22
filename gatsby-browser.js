/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import RootLayout from '~/components/layouts/root';

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
