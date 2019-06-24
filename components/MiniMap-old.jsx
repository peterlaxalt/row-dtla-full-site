import { GoogleMap, Polygon, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../styles/MediaQueries';

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  ${mediaMin.tabletLandscape`
    width: 35%;
    height: unset;
  `}
`;

const MiniMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBSsLXxJ5NSrSgFjFW7U5hxmGyHnE1po88&callback=initMap',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <MapContainer />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={17}
      center={props.mapCenter}
      defaultOptions={{
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        clickableIcons: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        scrollWheel: false,
        gestureHandling: 'none',
        styles: [
          {
            featureType: 'landscape',
            stylers: [{ color: '#ffffff' }]
          },

          {
            featureType: 'landscape.natural',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { visibility: 'on' }]
          },

          {
            featureType: 'landscape.man_made',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#9EA7BA' }]
          },

          {
            featureType: 'administrative',
            stylers: [{ visibility: 'off' }]
          },

          {
            featureType: 'transit',
            stylers: [{ visibility: 'off' }]
          },

          {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },

          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#afc47b' }, { gamma: 1 }]
          },

          {
            featureType: 'water',
            stylers: [{ color: '#9dcdfb' }]
          },

          {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },

          {
            featureType: 'road.local',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },

          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }]
          },

          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#369bf7' }, { weight: 1.5 }]
          }
        ]
      }}
    >
      <Polygon
        path={[
          { lat: 40.7184216261342, lng: -74.01321547415961 },
          { lat: 40.719714545794865, lng: -74.01293834397211 },
          { lat: 40.71979094505884, lng: -74.01346897632334 },
          { lat: 40.72000846184406, lng: -74.01343142539713 },
          { lat: 40.72008164490171, lng: -74.01396250278208 },
          { lat: 40.720045053382925, lng: -74.01397859603617 },
          { lat: 40.72025683975959, lng: -74.01575161200884 },
          { lat: 40.72029851329959, lng: -74.01576502305392 },
          { lat: 40.72037067961197, lng: -74.0164114354265 },
          { lat: 40.72075488767634, lng: -74.01634438020113 },
          { lat: 40.720349911895426, lng: -74.0130108639164 },
          { lat: 40.720865238238176, lng: -74.0129022344513 },
          { lat: 40.72120332682348, lng: -74.0157220851022 },
          { lat: 40.721564152698214, lng: -74.01564027772724 },
          { lat: 40.72127142650452, lng: -74.01316728101551 },
          { lat: 40.721462511804624, lng: -74.01312168346226 },
          { lat: 40.72151536508867, lng: -74.01363934980213 },
          { lat: 40.721619038716206, lng: -74.0136339853841 },
          { lat: 40.721547890165674, lng: -74.01310827241718 },
          { lat: 40.72158123949646, lng: -74.0131048656458 },
          { lat: 40.72152838626472, lng: -74.01256842384282 },
          { lat: 40.72586942837177, lng: -74.01167032091121 },
          { lat: 40.72591882647569, lng: -74.01165316189241 },
          { lat: 40.72582532297728, lng: -74.01142182136488 },
          { lat: 40.725738425586435, lng: -74.01123205507707 },
          { lat: 40.725083589953975, lng: -74.01136427725845 },
          { lat: 40.72235402448196, lng: -74.01190690848443 },
          { lat: 40.72213923388924, lng: -74.01194893538036 },
          { lat: 40.72045481324066, lng: -74.01229854020971 },
          { lat: 40.72009134736867, lng: -74.01238437089819 },
          { lat: 40.71923249902427, lng: -74.01259295379839 },
          { lat: 40.71892959809357, lng: -74.01266537344179 },
          { lat: 40.718182588115575, lng: -74.0128406115794 },
          { lat: 40.718361484799125, lng: -74.01324562514066 }
        ]}
        options={{
          strokeColor: '#afc47b',
          strokeOpacity: '1',
          strokeWeight: 1,
          fillOpacity: '0.8',
          fillColor: '#afc47b'
        }}
      />
      <Polygon
        path={[
          { lat: 40.72598948929491, lng: -74.01162749702223 },
          { lat: 40.726267966031564, lng: -74.01157117063292 },
          { lat: 40.726228328903, lng: -74.01116347486266 },
          { lat: 40.72582484191721, lng: -74.01123053008803 },
          { lat: 40.725902400861024, lng: -74.0114326957854 }
        ]}
        options={{
          strokeColor: '#afc47b',
          strokeOpacity: '1',
          strokeWeight: 1,
          fillOpacity: '0.8',
          fillColor: '#afc47b'
        }}
      />
      <Polygon
        path={[
          { lat: 40.72634785588899, lng: -74.01160025901373 },
          { lat: 40.728184930218816, lng: -74.01145920175054 },
          { lat: 40.72847957919068, lng: -74.01498466198626 },
          { lat: 40.7287011327784, lng: -74.01497929756823 },
          { lat: 40.72863812220008, lng: -74.01443749134722 },
          { lat: 40.73071241279282, lng: -74.01415139307073 },
          { lat: 40.73046037773949, lng: -74.01128679384283 },
          { lat: 40.73293143772852, lng: -74.01101613696977 },
          { lat: 40.733041190970454, lng: -74.01368225273058 },
          { lat: 40.73302086630968, lng: -74.01407385524675 },
          { lat: 40.73336683972301, lng: -74.01408446398466 },
          { lat: 40.73332504733709, lng: -74.01096158916766 },
          { lat: 40.733979495303245, lng: -74.01093476707752 },
          { lat: 40.73402827377584, lng: -74.01205593044574 },
          { lat: 40.73436972208279, lng: -74.01207738811786 },
          { lat: 40.734294016820265, lng: -74.01082152484912 },
          { lat: 40.73683034386111, lng: -74.01058900810972 },
          { lat: 40.73807005174718, lng: -74.0104876962231 },
          { lat: 40.73804122109483, lng: -74.0105437677235 },
          { lat: 40.73837858420091, lng: -74.01050889900631 },
          { lat: 40.73913662879431, lng: -74.01044989040798 },
          { lat: 40.73911427371545, lng: -74.01015484741635 },
          { lat: 40.738801301822505, lng: -74.01019239834255 },
          { lat: 40.737931476101195, lng: -74.01010924986309 },
          { lat: 40.73748555398023, lng: -74.01007639881902 },
          { lat: 40.73631134085674, lng: -74.01018118726762 },
          { lat: 40.73432463712033, lng: -74.01034673581086 },
          { lat: 40.73382204191015, lng: -74.01038334578965 },
          { lat: 40.731200319065664, lng: -74.01063984991777 },
          { lat: 40.72907650700861, lng: -74.01084925795345 },
          { lat: 40.72751260361459, lng: -74.01099882211236 },
          { lat: 40.72729184183658, lng: -74.01101902583281 },
          { lat: 40.72631862552336, lng: -74.01115652517211 }
        ]}
        options={{
          strokeColor: '#afc47b',
          strokeOpacity: '1',
          strokeWeight: 1,
          fillOpacity: '0.8',
          fillColor: '#afc47b'
        }}
      />
      {/* 75 Varick */}
      {props.building === '75 Varick Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.723557, lng: -74.0075246 },
              { lat: 40.7232298, lng: -74.0070592 },
              { lat: 40.7232115, lng: -74.007082 },
              { lat: 40.7231647, lng: -74.007015 },
              { lat: 40.723184, lng: -74.0069922 },
              { lat: 40.7228435, lng: -74.0065121 },
              { lat: 40.7228537, lng: -74.0064691 },
              { lat: 40.7237034, lng: -74.0063337 },
              { lat: 40.7237319, lng: -74.0065738 },
              { lat: 40.7237176, lng: -74.0065751 },
              { lat: 40.7237806, lng: -74.0072228 },
              { lat: 40.7238091, lng: -74.0072188 },
              { lat: 40.7238335, lng: -74.0074763 },
              { lat: 40.723557, lng: -74.0075246 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7232, lng: -74.006834 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_75varick.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(70, 60)
            }}
            options={{ width: 1, height: 1 }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 160 Varick */}
      {props.building === '160 Varick Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.7264989, lng: -74.005476 },
              { lat: 40.7264562, lng: -74.0049838 },
              { lat: 40.7267581, lng: -74.0049383 },
              { lat: 40.7267626, lng: -74.0049919 },
              { lat: 40.7267721, lng: -74.0049919 },
              { lat: 40.7267774, lng: -74.0050844 },
              { lat: 40.7268054, lng: -74.0050824 },
              { lat: 40.7268038, lng: -74.0050562 },
              { lat: 40.7270467, lng: -74.0050281 },
              { lat: 40.7270772, lng: -74.0053768 },
              { lat: 40.7264989, lng: -74.005476 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7265, lng: -74.00520104864643 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_160varick.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 345 Hudson */}
      {props.building === '345 Hudson Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.7275325, lng: -74.0087478 },
              { lat: 40.7274105, lng: -74.007506 },
              { lat: 40.7279533, lng: -74.0074148 },
              { lat: 40.728005, lng: -74.0074162 },
              { lat: 40.7280137, lng: -74.0076032 },
              { lat: 40.7279746, lng: -74.0076119 },
              { lat: 40.7280508, lng: -74.0083106 },
              { lat: 40.727496, lng: -74.008388 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7275, lng: -74.0079126462723 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_345hudson.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(70, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 350 Hudson */}
      {props.building === '350 Hudson Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.72796622362224, lng: -74.00705308673002 },
              { lat: 40.72791629446597, lng: -74.0065225626164 },
              { lat: 40.72734701330833, lng: -74.0066065525732 },
              { lat: 40.72739960783976, lng: -74.00714165327167 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.72745, lng: -74.00683183172748 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_350hudson.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 375 Hudson */}
      {props.building === '375 Hudson Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.728798983379484, lng: -74.00845255876578 },
              { lat: 40.728304044571274, lng: -74.00853973055877 },
              { lat: 40.72819130779852, lng: -74.0073789768108 },
              { lat: 40.72868878819373, lng: -74.00729549305521 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.728275, lng: -74.0079126462723 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_375hudson.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(80, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 155 AoA */}
      {props.building === '155 Avenue of the Americas' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.7253163, lng: -74.0049756 },
              { lat: 40.7252652, lng: -74.0049803 },
              { lat: 40.7252415, lng: -74.004702 },
              { lat: 40.7255118, lng: -74.0046625 },
              { lat: 40.7255521, lng: -74.0051198 },
              { lat: 40.7253325, lng: -74.0051526 },
              { lat: 40.7253163, lng: -74.0049756 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7252, lng: -74.00491859392105 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_155aoa.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(70, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 100 AoA */}
      {props.building === '100 Avenue of the Americas' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.72301887001688, lng: -74.00428798059124 },
              { lat: 40.72336444034136, lng: -74.00399394342799 },
              { lat: 40.723395061389844, lng: -74.00399338864031 },
              { lat: 40.723518519786246, lng: -74.00467283229216 },
              { lat: 40.72328656822274, lng: -74.00476627775885 },
              { lat: 40.72325630874218, lng: -74.00476602172768 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7231, lng: -74.00443931779097 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_100aoa.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(70, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 200 Hudson */}
      {props.building === '200 Hudson Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.7226507, lng: -74.0074606 },
              { lat: 40.7228168, lng: -74.0074197 },
              { lat: 40.7229393, lng: -74.0072755 },
              { lat: 40.7232594, lng: -74.0077261 },
              { lat: 40.7232594, lng: -74.0077704 },
              { lat: 40.7233051, lng: -74.0078347 },
              { lat: 40.723265, lng: -74.0078408 },
              { lat: 40.7232647, lng: -74.0078498 },
              { lat: 40.7227239, lng: -74.0079502 },
              { lat: 40.7226933, lng: -74.0079514 },
              { lat: 40.7226507, lng: -74.0074606 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7227, lng: -74.00759 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_200hudson.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 205 Hudson */}
      {props.building === '205 Hudson Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.723390979386, lng: -74.00814394779098 },
              { lat: 40.72362881194272, lng: -74.0081117612828 },
              { lat: 40.72371723665093, lng: -74.00815467662704 },
              { lat: 40.7239362181715, lng: -74.00846674700034 },
              { lat: 40.723953496492186, lng: -74.0086571838404 },
              { lat: 40.72347583957513, lng: -74.00873557847524 },
              { lat: 40.723446115958566, lng: -74.00873572048096 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.72345, lng: -74.00843808931745 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_205hudson.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 12-16 Vestry */}
      {props.building === '12-16 Vestry Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.7226471, lng: -74.0074471 },
              { lat: 40.7226252, lng: -74.0071762 },
              { lat: 40.7227111, lng: -74.0071601 },
              { lat: 40.7227833, lng: -74.0070709 },
              { lat: 40.7229246, lng: -74.0072741 },
              { lat: 40.7228092, lng: -74.0074082 },
              { lat: 40.7226748, lng: -74.0074398 },
              { lat: 40.7226471, lng: -74.0074471 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7225, lng: -74.00711614588306 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_12-16vestry.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 225 Varick */}
      {props.building === '225 Varick Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.729323364378345, lng: -74.00587243102257 },
              { lat: 40.729285567461446, lng: -74.00542482465823 },
              { lat: 40.72871044297344, lng: -74.0055115405197 },
              { lat: 40.72875922530883, lng: -74.00595008169364 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7288, lng: -74.00568490983818 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_225varick.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}

      {/* 435 Hudson */}
      {props.building === '435 Hudson Street' ? (
        <React.Fragment>
          <Polygon
            path={[
              { lat: 40.73033373864783, lng: -74.00700118816252 },
              { lat: 40.73038379013507, lng: -74.00756948119755 },
              { lat: 40.730659707810325, lng: -74.00752857751007 },
              { lat: 40.73065665352461, lng: -74.00749087779968 },
              { lat: 40.73093309695983, lng: -74.00744805186002 },
              { lat: 40.7309259709087, lng: -74.00736956505989 },
              { lat: 40.73094630840458, lng: -74.00736691503732 },
              { lat: 40.73090602369806, lng: -74.00691841324135 },
              { lat: 40.730878668207765, lng: -74.00691745405629 }
            ]}
            options={{
              strokeColor: '#369BF7',
              strokeOpacity: '1',
              strokeWeight: 0.5,
              fillOpacity: '1',
              fillColor: '#369BF7'
            }}
          />
          <Marker
            position={{ lat: 40.7304, lng: -74.00719139560374 }}
            icon={{
              url: '/static/images/logos/HSP_BuildingLockUps_435hudson.svg',
              // eslint-disable-next-line
              scaledSize: new google.maps.Size(60, 60)
            }}
          />
        </React.Fragment>
      ) : (
        ''
      )}
    </GoogleMap>
  );
});

export default MiniMap;
