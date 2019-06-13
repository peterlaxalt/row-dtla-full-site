import React, { useState } from 'react';
import Map from '../components/Map';
import styled from 'styled-components';
import variables from '../styles/Variables';
import CopyrightFooter from '../components/CopyrightFooter';

const { colors } = variables;

const MapContainer = styled.div`
  padding: 45px 40px 0 40px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const MapCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  border: 3px solid #000;
`;
const SelectCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  justify-content: flex-start;
  align-items: start;
`;

const SelectOption = styled.button`
  background: none;
  color: ${props => (props.active ? colors.babyBlue : '#000')};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const selectOptions = [
  'Our Buildings',
  'Restaurants',
  'Grab & Go Food',
  'Event Spaces',
  'Bars',
  'Cafes + Bakeries',
  'Retail',
  'Health + Fitness',
  'Galleries + Museums',
  'Film, Theater And Culture',
  'Bank And Convenience'
];

const MapPage = () => {
  const [activeFilter, setSelection] = useState('Our Buildings');

  const generateSelections = () => {
    return selectOptions.map(option => {
      return (
        <SelectOption onClick={() => setSelection(option)} key={option} active={activeFilter === option}>
          {option}
        </SelectOption>
      );
    });
  };

  return (
    <MapContainer>
      <ContentRow>
        <SelectCol>{generateSelections()}</SelectCol>
        <MapCol>
          <Map activeFilter={activeFilter} />
        </MapCol>
      </ContentRow>
      <CopyrightFooter />
    </MapContainer>
  );
};

export default MapPage;
