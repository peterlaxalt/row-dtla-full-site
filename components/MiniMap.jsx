import GoogleMapReact from 'google-map-react';
import React from 'react';
import styled from 'styled-components';
import { miniMapOptions, ourBuildings, parks } from '../data/map';

const MapContainer = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  border: 3px solid #000;
`;

export default class MiniMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      maps: null,
      overlays: [],
      infoWindows: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.maps !== this.state.maps) {
      this.drawParks();
      this.drawMapFeatures();
    }
    if (prevProps.building !== this.props.building) {
      this.drawMapFeatures();
    }
  }

  setUpMap = (map, maps) => {
    this.setState({
      map,
      maps
    });
  };

  drawMapFeatures = () => {
    const { building } = this.props;
    let buildingData;
    for (let idx = 0; idx < ourBuildings.length; idx++) {
      if (ourBuildings[idx].title === building) {
        buildingData = ourBuildings[idx];
        break;
      }
    }
    this.clearOverlays(() => this.drawBuilding(buildingData));
  };

  drawParks = () => {
    const { map, maps } = this.state;
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
    }
  };

  drawBuilding = building => {
    const { map, maps, overlays } = this.state;
    if (map && maps) {
      const buildingsArray = [...overlays];
      const tempBuilding = new maps.Polygon({
        paths: building.path,
        strokeColor: '#369BF7',
        strokeOpacity: '1',
        strokeWeight: 0.5,
        fillOpacity: '1',
        fillColor: '#369BF7',
        zIndex: 100
      });
      const tempMarker = new maps.Marker({
        position: building.markerPos,
        icon: {
          url: building.markerImg,
          scaledSize: new maps.Size(building.markerSize[0], building.markerSize[1]),
          anchor: new maps.Point(building.markerSize[0] / 2, building.markerSize[1] / 2)
        }
      });
      tempBuilding.addListener('click', () => {
        window.location.href = building.url;
      });
      tempBuilding.setMap(map);
      tempMarker.setMap(map);
      buildingsArray.push(tempBuilding);
      buildingsArray.push(tempMarker);

      this.setState({ overlays: buildingsArray });
    }
  };

  clearOverlays = callback => {
    const { overlays } = this.state;
    const overlaysCopy = [...overlays];
    while (overlaysCopy.length > 0) {
      const overlay = overlaysCopy.pop();
      overlay.setMap(null);
    }
    this.setState({ overlays: overlaysCopy }, callback);
  };

  render() {
    const { mapCenter } = this.props;
    return (
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBSsLXxJ5NSrSgFjFW7U5hxmGyHnE1po88', libraries: ['places'] }}
          center={mapCenter}
          defaultZoom={17}
          options={miniMapOptions}
          placesLibrary={true}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.setUpMap(map, maps)}
        />
      </MapContainer>
    );
  }
}
