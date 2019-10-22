/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import Context from '~/config/Context';

const ContextProvider = props => {
  const [CTAActive, setCTAActive] = useState(true);
  const [CTAViewed, setCTAViewed] = useState(false);

  const closeCTA = () => {
    setCTAActive(false);
    setCTAViewed(false);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        CTAActive,
        CTAViewed,
        closeCTA,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
