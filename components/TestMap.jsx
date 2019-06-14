import GoogleMapReact from 'google-map-react';
import React from 'react';
import styled from 'styled-components';
import { mapOptions, ourBuildings, /*places ,*/ parks, neighborhoodOverlays } from '../data/map';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Map = (/* { activeFilter } */) => {
  const setUpMap = (map, maps) => {
    drawParks(map, maps);
    drawBuildings(map, maps);
    drawNeighborhoods(map, maps);
  };

  const drawParks = (map, maps) => {
    parks.forEach(park => {
      const tempPark = new maps.Polygon({
        paths: park,
        strokeColor: '#afc47b',
        strokeOpacity: '1',
        strokeWeight: 1,
        fillOpacity: '0.8',
        fillColor: '#afc47b'
      });
      tempPark.setMap(map);
    });
  };

  const drawBuildings = (map, maps) => {
    ourBuildings.forEach(building => {
      const tempBuilding = new maps.Polygon({
        paths: building.path,
        strokeColor: '#369BF7',
        strokeOpacity: '1',
        strokeWeight: 0.5,
        fillOpacity: '1',
        fillColor: '#369BF7'
      });
      const tempMarker = new maps.Marker({
        position: building.markerPos,
        icon: { url: building.markerImg, scaledSize: new maps.Size(90, 60), anchor: new maps.Point(45, 30) }
      });
      tempBuilding.setMap(map);
      tempMarker.setMap(map);
    });
  };

  const drawNeighborhoods = (map, maps) => {
    neighborhoodOverlays.forEach(neighborhood => {
      const tempNeighborhood = new maps.Polygon({
        paths: neighborhood.path,
        strokeColor: '#369BF7',
        strokeOpacity: 0,
        fillOpacity: 0,
        strokeWeight: 0,
        fillColor: '#369BF7',
        zIndex: 100
      });
      maps.event.addListener(tempNeighborhood, 'mouseover', function() {
        this.setOptions({ fillOpacity: '0.5' });
      });
      maps.event.addListener(tempNeighborhood, 'mouseout', function() {
        this.setOptions({ fillOpacity: '0' });
      });
      tempNeighborhood.setMap(map);
    });
  };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBSsLXxJ5NSrSgFjFW7U5hxmGyHnE1po88' }}
        defaultCenter={{
          lat: 40.726,
          lng: -74.006
        }}
        defaultZoom={16}
        options={mapOptions}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => setUpMap(map, maps)}
      />
    </MapContainer>
  );
};

export default Map;
