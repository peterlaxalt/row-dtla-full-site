/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import Context from '~/config/Context';

const ContextProvider = props => {
  const [CTAActive, setCTAActive] = useState(false);
  const [CTAViewed, setCTAViewed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const closeCTA = () => {
    setCTAActive(false);
    setCTAViewed(true);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        CTAActive,
        CTAViewed,
        closeCTA,
        activeSlide,
        setActiveSlide,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
