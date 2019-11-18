/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';

import Context from '~/context/Context';

const ContextProvider = props => {
  const [CTAActive, setCTAActive] = useState(false);
  const [CTAViewed, setCTAViewed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const [activeFilters, setActiveFilters] = useState({ collective: 'ALL', events: 'ALL', news: 'ALL' });

  const updateActiveFilters = useCallback(
    (property, value) => {
      setActiveFilters({ ...activeFilters, [property]: value });
    },
    [activeFilters]
  );

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
        activeFilters,
        updateActiveFilters
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
