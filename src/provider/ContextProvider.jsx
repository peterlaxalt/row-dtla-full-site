/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import Context from '~/config/Context';

const ContextProvider = props => {
  const [CTAActive, setCTAActive] = useState(true);
  const [CTAViewed, setCTAViewed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

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
        darkTheme,
        setDarkTheme,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
