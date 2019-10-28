import React from 'react';
import styled from '@emotion/styled';

const FilterMenu = styled.div`
  width: 100%;
  display: flex;
  background-color: #000;
  justify-content: center;
  height: 32px;
`;

const FilterButton = styled.button`
  color: #fff;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-bottom: ${props => (props.active ? '4px solid #fff' : '4px solid transparent')};
`;

const Filter = ({ filters, activeFilter, setFilter }) => {
  const generateFilters = () => {
    return filters.map(filter => {
      return (
        <FilterButton
          active={activeFilter === filter}
          onClick={() => {
            setFilter(filter);
          }}
          key={filter}
        >
          {filter}
        </FilterButton>
      );
    });
  };
  return <FilterMenu>{generateFilters()}</FilterMenu>;
};

export default Filter;
