import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import styled from 'styled-components';
import { colors } from '../styles/Colors';
import { FaStar } from 'react-icons/fa';

const StyledInfoWindow = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  max-height: 437px;
  min-height: 380px;
  max-width: 320px;
  font-size: 14px;
  img {
    width: 100%;
    max-height: 50%;
    object-fit: scale-down;
  }
  h5 {
    margin: 0.5em 0;
    font-size: 18px;
  }
  span {
    margin: 0.5em 0;
  }
  a {
    font-weight: 500;
    margin: 0.5em 0;
    color: ${colors.babyBlue};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StarRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5em 0;
  .stars-rating {
    margin-left: 0.5em;
    svg {
      margin: 0 0.25em;
    }
  }
`;

export default class MapMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      moreInfo: null
    };
  }

  toggleShowInfo = id => {
    const { showInfo } = this.state;
    if (showInfo) {
      this.setState({ showInfo: !showInfo });
    } else {
      this.fetchPOIData(id);
    }
  };

  fetchPOIData = id => {
    const { showInfo, moreInfo } = this.state;
    const { mapRef } = this.props;
    // console.log(mapRef);
    if (moreInfo) {
      this.setState({ showInfo: !showInfo });
      return;
    }
    // eslint-disable-next-line no-undef
    const service = new google.maps.places.PlacesService(
      mapRef.current.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    );
    service.getDetails(
      {
        placeId: id,
        fields: ['name', 'rating', 'formatted_address', 'geometry', 'photos', 'url', 'website']
      },
      (place, status) => {
        if (status === 'OK') {
          this.setState({ moreInfo: place, showInfo: !showInfo });
        }
      }
    );
  };

  parseStars = numStars => {
    var stars = [];
    var intRating = parseInt(numStars);
    for (var i = 0; i < intRating; i++) {
      stars.push(<FaStar />);
    }
    return (
      <StarRow>
        <div className="number-rating">{numStars}</div>
        <div className="stars-rating">{stars}</div>
      </StarRow>
    );
  };

  closeMoreInfo = () => {
    this.setState({
      showInfo: false
    });
  };

  render() {
    const { showInfo, moreInfo } = this.state;
    const { name, position, locationID } = this.props;
    return (
      <Marker
        key={name + Math.random()}
        position={position}
        onClick={() => this.toggleShowInfo(locationID)}
        icon={{
          path: 'M0,4a4,4 0 1,0 8,0a4,4 0 1,0 -8,0',
          fillColor: '#369bf7',
          fillOpacity: 0.95,
          scale: 1.5,
          strokeColor: '#000000',
          strokeWeight: 1,
          // eslint-disable-next-line no-undef
          anchor: new google.maps.Point(-1, 4),
          // eslint-disable-next-line no-undef
          labelOrigin: new google.maps.Point(4, 15)
        }}
        label={{ color: '#000000', fontWeight: 'bold', fontSize: '12px', text: name }}
      >
        {showInfo ? (
          <InfoWindow onCloseClick={this.toggleShowInfo}>
            <StyledInfoWindow>
              <img src={moreInfo.photos[0].getUrl()} alt={`${moreInfo.name}`} />
              <h5>{moreInfo.name}</h5>
              <a href={moreInfo.url} target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <span>{moreInfo.formatted_address}</span>
              {this.parseStars(moreInfo.rating)}
            </StyledInfoWindow>
          </InfoWindow>
        ) : (
          ''
        )}
      </Marker>
    );
  }
}
