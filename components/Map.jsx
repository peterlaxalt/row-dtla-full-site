import Router from 'next/router';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import { mapOptions, ourBuildings, places, parks, neighborhoodOverlays /* neighborhoodLabels */ } from '../data/map';

import { slugifyString } from '../helpers/strings';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 3px solid #000;
`;

export default class Map extends React.Component {
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
    if (prevProps.activeFilter !== this.props.activeFilter) {
      this.drawMapFeatures();
    }
  }

  setUpMap = (map, maps) => {
    this.setState({
      map,
      maps
    });
    map.addListener('click', this.closeInfoWindows);
  };

  drawMapFeatures = () => {
    const { activeFilter } = this.props;
    switch (activeFilter) {
      case 'Our Buildings':
        this.clearOverlays(() => {
          this.drawBuildingsAndNeighborhoods();
        });
        break;
      case 'Restaurants':
        this.clearOverlays(() => {
          this.drawMarkers(places['RESTAURANTS']);
        });
        break;
      case 'Grab & Go Food':
        this.clearOverlays(() => {
          this.drawMarkers(places['GRAB & GO FOOD']);
        });
        break;
      case 'Event Spaces':
        this.clearOverlays(() => {
          this.drawMarkers(places['EVENT SPACES']);
        });
        break;
      case 'Bars':
        this.clearOverlays(() => {
          this.drawMarkers(places['BARS']);
        });
        break;
      case 'Cafes + Bakeries':
        this.clearOverlays(() => {
          this.drawMarkers(places['CAFES + BAKERIES']);
        });
        break;
      case 'Retail':
        this.clearOverlays(() => {
          this.drawMarkers(places['RETAIL']);
        });
        break;
      case 'Health + Fitness':
        this.clearOverlays(() => {
          this.drawMarkers(places['HEALTH + FITNESS']);
        });
        break;
      case 'Galleries + Museums':
        this.clearOverlays(() => {
          this.drawMarkers(places['GALLERIES + MUSEUMS']);
        });
        break;
      case 'Film, Theater And Culture':
        this.clearOverlays(() => {
          this.drawMarkers(places['FILM, THEATER AND CULTURE']);
        });
        break;
      case 'Bank And Convenience':
        this.clearOverlays(() => {
          this.drawMarkers(places['BANK AND CONVENIENCE']);
        });
        break;
      default:
        break;
    }
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

  drawBuildingsAndNeighborhoods = () => {
    const { map, maps, overlays } = this.state;
    if (map && maps) {
      const buildingsArray = [...overlays];
      ourBuildings.forEach(building => {
        const buildingPolygon = new maps.Polygon({
          paths: building.path,
          strokeColor: '#369BF7',
          strokeOpacity: '1',
          strokeWeight: 0.5,
          fillOpacity: '1',
          fillColor: '#369BF7',
          zIndex: 100
        });
        const buildingMarker = new maps.Marker({
          position: building.markerPos,
          url: 'http://www.google.com/',
          icon: {
            url: building.markerImg,
            scaledSize: new maps.Size(building.markerSize[0], building.markerSize[1]),
            anchor: new maps.Point(building.markerSize[0] / 2, building.markerSize[1] / 2)
          }
        });

        buildingPolygon.addListener('click', () => {
          Router.push(`/building?slug=${slugifyString(building.title)}`, building.url);
        });
        buildingMarker.addListener('click', () => {
          Router.push(`/building?slug=${slugifyString(building.title)}`, building.url);
        });

        buildingPolygon.setMap(map);
        buildingMarker.setMap(map);
        buildingsArray.push(buildingPolygon);
        buildingsArray.push(buildingMarker);
      });

      // NEIGHBORHOOD LABELS
      // const labels = {};

      // neighborhoodLabels.forEach(overlay => {
      //   const tempLabel = new maps.Marker({
      //     position: overlay.position,
      //     icon: 'none',
      //     label: { color: '#000000', fontWeight: 'bold', fontSize: '18px', text: overlay.label },
      //     optimized: false,
      //     visible: false
      //   });

      //   tempLabel.setMap(map);
      //   buildingsArray.push(tempLabel);
      //   labels[overlay.label] = tempLabel;
      // });

      neighborhoodOverlays.forEach(neighborhood => {
        const tempNeighborhood = new maps.Polygon({
          paths: neighborhood.path,
          strokeColor: '#369BF7',
          strokeOpacity: 0,
          fillOpacity: 0,
          strokeWeight: 0,
          fillColor: '#369BF7',
          zIndex: 1
        });

        tempNeighborhood.addListener('mouseover', function() {
          // labels[neighborhood.label].setOptions({ visible: true });
          this.setOptions({ fillOpacity: '0.5' });
        });
        tempNeighborhood.addListener('mouseout', function() {
          // labels[neighborhood.label].setOptions({ visible: false });
          this.setOptions({ fillOpacity: '0' });
        });
        tempNeighborhood.setMap(map);
        buildingsArray.push(tempNeighborhood);
      });

      this.setState({ overlays: buildingsArray });
    }
  };

  drawMarkers = data => {
    const { map, maps, overlays } = this.state;

    const markersArray = [...overlays];
    if (map && maps) {
      const service = new maps.places.PlacesService(map);
      Object.keys(data).forEach(key => {
        const buildingMarker = new maps.Marker({
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
        const tempInfoWindow = new maps.InfoWindow();

        buildingMarker.addListener('click', () => {
          this.closeInfoWindows();
          this.fetchInfoWindow(service, tempInfoWindow, buildingMarker, key);
        });
        buildingMarker.setMap(map);
        markersArray.push(buildingMarker);
      });
    }
    this.setState({ overlays: markersArray });
  };

  closeInfoWindows = () => {
    const { overlays } = this.state;
    for (let idx = 0; idx < overlays.length; idx++) {
      if (overlays[idx].content) {
        overlays[idx].close();
      }
    }
  };

  fetchInfoWindow = (service, infoWindow, marker, key) => {
    const { infoWindows, map, overlays } = this.state;

    const markersArray = [...overlays];
    if (infoWindows[key]) {
      let windowContent = infoWindows[key];
      infoWindow.setContent(windowContent);
      infoWindow.open(map, marker);
      markersArray.push(infoWindow);
      this.setState({ overlays: markersArray });
    } else {
      service.getDetails(
        {
          placeId: key,
          fields: ['name', 'rating', 'formatted_address', 'geometry', 'photos', 'url', 'website']
        },
        (place, status) => {
          if (status === 'OK') {
            let newWindow = {};
            newWindow[key] = this.generateInfoWindow(place);
            this.setState({ infoWindows: Object.assign(infoWindows, newWindow) });
            infoWindow.setContent(newWindow[key]);
            infoWindow.open(map, marker);
            markersArray.push(infoWindow);
            this.setState({ overlays: markersArray });
          }
        }
      );
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

  generateInfoWindow = ({ photos, name, url, formatted_address, rating }) => {
    return ReactDOMServer.renderToString(
      <div className="styled-info-window">
        <img src={`${photos[0].getUrl()}`} alt={name} />
        <h5>{name}</h5>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <span>{formatted_address}</span>
        {this.parseStars(rating)}
      </div>
    );
  };

  parseStars = numStars => {
    var stars = [];
    var intRating = parseInt(numStars);
    for (var i = 0; i < intRating; i++) {
      stars.push(
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
        </svg>
      );
    }
    return (
      <div className="star-row">
        <div className="number-rating">{numStars}</div>
        <div className="stars-rating">{stars}</div>
      </div>
    );
  };
  render() {
    return (
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBSsLXxJ5NSrSgFjFW7U5hxmGyHnE1po88', libraries: ['places'] }}
          defaultCenter={{
            lat: 40.726,
            lng: -74.006
          }}
          defaultZoom={16}
          options={mapOptions}
          placesLibrary={true}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.setUpMap(map, maps)}
        />
      </MapContainer>
    );
  }
}
