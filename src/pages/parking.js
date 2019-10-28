import React, { useEffect, useContext } from 'react';
import styled from '@emotion/styled';

import Context from '~/config/Context';
import Layout from '~/components/layouts';
import SEO from '~/components/seo';

const Parking = props => {
  const context = useContext(Context);
  const { setDarkTheme } = context;

  useEffect(() => {
    setDarkTheme(true);
  }, []);

  return <Layout>Parking</Layout>;
};

export default Parking;
