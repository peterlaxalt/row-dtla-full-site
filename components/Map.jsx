import { GoogleMap, Polygon, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';
import React, { useState, useRef, useEffect } from 'react';
import MapMarker from './MapMarker';
import { ourBuildings, places } from '../data/map';

const generateBuildings = () => {
  return ourBuildings.map(el => {
    return (
      <React.Fragment key={el.url}>
        <Polygon
          path={el.path}
          onClick={() => {
            window.location.href = el.url;
          }}
          options={{
            strokeColor: '#369BF7',
            strokeOpacity: '1',
            strokeWeight: 0.5,
            fillOpacity: '1',
            fillColor: '#369BF7'
          }}
        />
        <Marker
          position={el.markerPos}
          icon={{
            url: el.markerImg,
            // eslint-disable-next-line
            scaledSize: new google.maps.Size(90, 60),
            // eslint-disable-next-line
            anchor: new google.maps.Point(45, 30)
          }}
          onClick={() => {
            window.location.href = el.url;
          }}
        />
      </React.Fragment>
    );
  });
};

const Map = withScriptjs(
  withGoogleMap(props => {
    const { activeFilter } = props;

    const mapRef = useRef(null);

    const polyRef = useRef(null);

    const [neighborhood, setNeighborhood] = useState({
      soho: false,
      tribeca: false,
      hudsonSquare: false,
      westVillage: false
    });

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
      if (activeFilter === 'Our Buildings') {
        setMarkers([]);
      } else {
        generateInterests(places[activeFilter.toUpperCase()]);
      }
    }, [activeFilter]);

    const toggleNeighborhoodVisibility = (section, ref) => {
      neighborhood[section] = !neighborhood[section];
      if (ref) {
        ref.current.props.options.fillOpacity = neighborhood[section] ? 1 : 0;
      }
      setNeighborhood(neighborhood);
    };

    const generateInterests = data => {
      const newMarkers = Object.keys(data).map(key => {
        return (
          <MapMarker
            key={data[key].name + Math.random()}
            position={data[key].position}
            name={data[key].name}
            locationID={key}
            mapRef={mapRef}
          />
        );
      });
      setMarkers(newMarkers);
    };

    return (
      <GoogleMap
        className="google-map"
        ref={mapRef}
        defaultOptions={{
          mapTypeId: 'roadmap',
          center: {
            lat: 40.726,
            lng: -74.006
          },
          zoom: 16,
          minZoom: 15.5,
          maxZoom: 18,
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          clickableIcons: false,
          panControl: false,
          zoomControl: true,
          rotateControl: false,
          scrollWheel: false,
          gestureHandling: 'greedy',
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
        {markers}
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
        {activeFilter === 'Our Buildings' ? (
          <React.Fragment>
            <Polygon
              ref={polyRef}
              path={[
                { lat: 40.7290705, lng: -74.0105223 },
                { lat: 40.727603, lng: -74.0106457 },
                { lat: 40.7262451, lng: -74.0108174 },
                { lat: 40.7258874, lng: -74.0108495 },
                { lat: 40.72481, lng: -74.0092724 },
                { lat: 40.7241352, lng: -74.0083496 },
                { lat: 40.7234522, lng: -74.0073894 },
                { lat: 40.7221187, lng: -74.0054582 },
                { lat: 40.7222569, lng: -74.0054582 },
                { lat: 40.7255256, lng: -74.0041064 },
                { lat: 40.727729, lng: -74.0032052 },
                { lat: 40.7283306, lng: -74.0032159 },
                { lat: 40.7285908, lng: -74.0057479 },
                { lat: 40.7288347, lng: -74.0082156 },
                { lat: 40.7290705, lng: -74.0105223 }
              ]}
              options={{
                strokeColor: '#369BF7',
                strokeOpacity: 1,
                fillOpacity: 0.5,
                strokeWeight: 1,
                fillColor: '#369BF7',
                zIndex: 100
              }}
              onMouseOver={() => {
                toggleNeighborhoodVisibility('westVillage');
              }}
              onMouseOut={() => {
                toggleNeighborhoodVisibility('westVillage');
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            />

            <Polygon
              path={[
                { lat: 40.725722, lng: -74.0108732 },
                { lat: 40.7208632, lng: -74.0119053 },
                { lat: 40.7166754, lng: -74.0128118 },
                { lat: 40.7143314, lng: -74.013359 },
                { lat: 40.7136788, lng: -74.0136379 },
                { lat: 40.7125646, lng: -74.0111461 },
                { lat: 40.7114382, lng: -74.0086651 },
                { lat: 40.7126601, lng: -74.007646 },
                { lat: 40.7139389, lng: -74.006557 },
                { lat: 40.716472, lng: -74.0044434 },
                { lat: 40.7179279, lng: -74.0032005 },
                { lat: 40.7193838, lng: -74.0019899 },
                { lat: 40.7209491, lng: -74.0041141 },
                { lat: 40.7235186, lng: -74.0078585 },
                { lat: 40.725722, lng: -74.0108732 }
              ]}
              options={{
                strokeColor: '#369BF7',
                strokeOpacity: 1,
                fillOpacity: 0.5,
                strokeWeight: 1,
                fillColor: '#369BF7',
                zIndex: 100
              }}
              visible={neighborhood.tribeca}
              onMouseOver={() => {
                toggleNeighborhoodVisibility('tribeca');
              }}
              onMouseOut={() => {
                toggleNeighborhoodVisibility('tribeca');
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            />
            <Polygon
              path={[
                { lat: 40.7291478, lng: -74.0104954 },
                { lat: 40.7289445, lng: -74.008457 },
                { lat: 40.7287656, lng: -74.0064614 },
                { lat: 40.7284079, lng: -74.0028458 },
                { lat: 40.7301803, lng: -74.0020089 },
                { lat: 40.7324892, lng: -74.0005391 },
                { lat: 40.7347249, lng: -73.9988654 },
                { lat: 40.7373751, lng: -73.9969449 },
                { lat: 40.7408625, lng: -74.0053671 },
                { lat: 40.7395375, lng: -74.0063756 },
                { lat: 40.73944, lng: -74.0063648 },
                { lat: 40.7393912, lng: -74.0097766 },
                { lat: 40.7387246, lng: -74.0098839 },
                { lat: 40.7377084, lng: -74.009723 },
                { lat: 40.7333388, lng: -74.0100932 },
                { lat: 40.7291478, lng: -74.0104954 }
              ]}
              options={{
                strokeColor: '#369BF7',
                strokeOpacity: neighborhood.hudsonSquare ? 1 : 0,
                fillOpacity: neighborhood.hudsonSquare ? 0.5 : 0,
                strokeWeight: 1,
                fillColor: '#369BF7',
                zIndex: 100
              }}
              onMouseOver={() => {
                toggleNeighborhoodVisibility('hudsonSquare');
              }}
              onMouseOut={() => {
                toggleNeighborhoodVisibility('hudsonSquare');
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            />
            <Polygon
              path={[
                { lat: 40.718539143984586, lng: -74.00055265797914 },
                { lat: 40.72142829484371, lng: -74.00452447927046 },
                { lat: 40.72196626947563, lng: -74.00527377436038 },
                { lat: 40.7221769026183, lng: -74.00533979911671 },
                { lat: 40.72419801719893, lng: -74.00452983847248 },
                { lat: 40.72429558844961, lng: -74.00470686426746 },
                { lat: 40.72552440112135, lng: -74.00452983847248 },
                { lat: 40.72548984529114, lng: -74.00401485434162 },
                { lat: 40.72796882287908, lng: -74.00297959016177 },
                { lat: 40.728027768853494, lng: -74.0028776662192 },
                { lat: 40.72817614986819, lng: -74.00277842448565 },
                { lat: 40.72815664371261, lng: -74.00262037740742 },
                { lat: 40.727937120933824, lng: -74.00219658838307 },
                { lat: 40.72537061344838, lng: -73.99696391003329 },
                { lat: 40.72500083016842, lng: -73.99549485275327 },
                { lat: 40.72349492854898, lng: -73.99669713793094 },
                { lat: 40.7223909071738, lng: -73.99717714534745 },
                { lat: 40.721722349286765, lng: -73.99774835666972 }
              ]}
              options={{
                strokeColor: '#369BF7',
                strokeOpacity: neighborhood.soho ? 1 : 0,
                fillOpacity: neighborhood.soho ? 0.5 : 0,
                strokeWeight: 1,
                fillColor: '#369BF7',
                zIndex: 100
              }}
              onMouseOver={() => {
                toggleNeighborhoodVisibility('soho');
              }}
              onMouseOut={() => {
                toggleNeighborhoodVisibility('soho');
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            />
            {generateBuildings()}
          </React.Fragment>
        ) : (
          ''
        )}
      </GoogleMap>
    );
  })
);

class MapContainer extends React.Component {
  render() {
    const { activeFilter } = this.props;
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSsLXxJ5NSrSgFjFW7U5hxmGyHnE1po88&libraries=places&callback=initMap"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
        activeFilter={activeFilter}
      />
    );
  }
}

export default MapContainer;
