import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mapOptions, ourBuildings, places, parks, neighborhoodOverlays } from '../data/map';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Map = ({ activeFilter }) => {
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    // console.log('filter - updated');
    drawMapFeatures();
  }, [activeFilter]);

  useEffect(() => {
    // console.log('maps - updated');
    drawParks();
    drawMapFeatures();
  }, [maps]);

  const setUpMap = (map, maps) => {
    setMap(map);
    setMaps(maps);
  };

  const drawMapFeatures = () => {
    switch (activeFilter) {
      case 'Our Buildings':
        clearOverlays();
        drawNeighborhoods();
        drawBuildings();
        break;
      case 'Restaurants':
        clearOverlays();
        drawMarkers(places['RESTAURANTS']);
        break;
      case 'Grab & Go Food':
        clearOverlays();
        drawMarkers(places['GRAB & GO FOOD']);
        break;
      case 'Event Spaces':
        clearOverlays();
        drawMarkers(places['EVENT SPACES']);
        break;
      case 'Bars':
        clearOverlays();
        drawMarkers(places['BARS']);
        break;
      case 'Cafes + Bakeries':
        clearOverlays();
        drawMarkers(places['CAFES + BAKERIES']);
        break;
      case 'Retail':
        clearOverlays();
        drawMarkers(places['RETAIL']);
        break;
      case 'Health + Fitness':
        clearOverlays();
        drawMarkers(places['HEALTH + FITNESS']);
        break;
      case 'Galleries + Museums':
        clearOverlays();
        drawMarkers(places['GALLERIES + MUSEUMS']);
        break;
      case 'Film, Theater And Culture':
        clearOverlays();
        drawMarkers(places['FILM, THEATER AND CULTURE']);
        break;
      case 'Bank And Convenience':
        clearOverlays();
        drawMarkers(places['BANK AND CONVENIENCE']);
        break;
      default:
        break;
    }
  };

  const drawParks = () => {
    if (map && maps) {
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
    } else {
      // console.log('maps not setup');
    }
  };

  const drawBuildings = () => {
    if (map && maps) {
      const buildingsArray = overlays.slice(0);
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
        buildingsArray.push(tempBuilding);
        buildingsArray.push(tempMarker);
      });
      if (overlays !== buildingsArray) {
        // console.log('buildings');
        setOverlays(buildingsArray);
      }
    }
  };

  const drawMarkers = data => {
    const markersArray = overlays.slice(0);
    if (map && maps) {
      Object.keys(data).forEach(key => {
        const tempMarker = new maps.Marker({
          icon: {
            path: 'M0,4a4,4 0 1,0 8,0a4,4 0 1,0 -8,0',
            fillColor: '#369bf7',
            fillOpacity: 0.95,
            scale: 1.5,
            strokeColor: '#000000',
            strokeWeight: 1,
            anchor: new maps.Point(-1, 4),
            labelOrigin: new maps.Point(4, 15)
          },
          position: data[key].position,
          label: { color: '#000000', fontWeight: 'bold', fontSize: '12px', text: data[key].name }
        });
        tempMarker.setMap(map);
        markersArray.push(tempMarker);
      });
    }
    if (overlays !== markersArray) {
      // console.log('markers');
      setOverlays(markersArray);
    }
  };

  const drawNeighborhoods = () => {
    if (map && maps) {
      const neighborhoodArray = overlays.slice(0);
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
        neighborhoodArray.push(tempNeighborhood);
      });
      if (overlays !== neighborhoodArray) {
        // console.log('neighborhoods');
        // console.log(neighborhoodArray.length);
        setOverlays(neighborhoodArray);
      }
    }
  };

  const clearOverlays = () => {
    if (overlays.length > 0) {
      const overlaysCopy = overlays.slice(0);
      // debugger;
      while (overlaysCopy.length > 0) {
        const overlay = overlaysCopy.pop();
        overlay.setMap(null);
      }
      // console.log('clear');
      // console.log(overlaysCopy.length);
      setOverlays(overlaysCopy);
      // console.log('overlays', overlays.length);
    }
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
