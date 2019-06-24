const filters = {
  'Our Buildings': {},
  Restaurants: {},
  'Grab & Go Food': {},
  'Event Spaces': {},
  Bars: {},
  'Cafes + Bakeries': {},
  Retail: {},
  'Health + Fitness': {},
  'Galleries + Museums': {},
  'Film, Theater And Culture': {},
  'Bank And Convenience': {}
};

const mapOptions = {
  mapTypeId: 'roadmap',
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
};

const miniMapOptions = {
  mapTypeId: 'roadmap',
  minZoom: 15.5,
  maxZoom: 18,
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
};

const ourBuildings = [
  {
    title: '75 Varick Street',
    url: '/buildings/75-varick-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_75varick.svg',
    markerSize: [70, 60],
    markerPos: { lat: 40.72319941908921, lng: -74.00591966546449 },
    path: [
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
    ]
  },
  {
    title: '160 Varick Street',
    url: '/buildings/160-varick-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_160varick.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.72665096689796, lng: -74.00434789098176 },
    path: [
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
    ]
  },
  {
    title: '345 Hudson Street',
    url: '/buildings/345-hudson-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_345hudson.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.727750149473366, lng: -74.00936876382929 },
    path: [
      { lat: 40.7275325, lng: -74.0087478 },
      { lat: 40.7274105, lng: -74.007506 },
      { lat: 40.7279533, lng: -74.0074148 },
      { lat: 40.728005, lng: -74.0074162 },
      { lat: 40.7280137, lng: -74.0076032 },
      { lat: 40.7279746, lng: -74.0076119 },
      { lat: 40.7280508, lng: -74.0083106 },
      { lat: 40.727496, lng: -74.008388 }
    ]
  },
  {
    title: '350 Hudson Street',
    url: '/buildings/350-hudson-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_350hudson.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.727573788575, lng: -74.00603768266114 },
    path: [
      { lat: 40.72796622362224, lng: -74.00705308673002 },
      { lat: 40.72791629446597, lng: -74.0065225626164 },
      { lat: 40.72734701330833, lng: -74.0066065525732 },
      { lat: 40.72739960783976, lng: -74.00714165327167 }
    ]
  },
  {
    title: '375 Hudson Street',
    url: '/buildings/375-hudson-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_375hudson.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.72837464106847, lng: -74.0066599551526 },
    path: [
      { lat: 40.728798983379484, lng: -74.00845255876578 },
      { lat: 40.728304044571274, lng: -74.00853973055877 },
      { lat: 40.72819130779852, lng: -74.0073789768108 },
      { lat: 40.72868878819373, lng: -74.00729549305521 }
    ]
  },
  {
    title: '155 Avenue of the Americas',
    url: '/buildings/155-avenue-of-the-americas/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_155aoa.svg',
    markerSize: [120, 60],
    markerPos: { lat: 40.72529720093036, lng: -74.00584456361207 },
    path: [
      { lat: 40.7253163, lng: -74.0049756 },
      { lat: 40.7252652, lng: -74.0049803 },
      { lat: 40.7252415, lng: -74.004702 },
      { lat: 40.7255118, lng: -74.0046625 },
      { lat: 40.7255521, lng: -74.0051198 },
      { lat: 40.7253325, lng: -74.0051526 },
      { lat: 40.7253163, lng: -74.0049756 }
    ]
  },
  {
    title: '100 Avenue of the Americas',
    url: '/buildings/100-avenue-of-the-americas/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_100aoa.svg',
    markerSize: [120, 60],
    markerPos: { lat: 40.72334577810744, lng: -74.00324818528566 },
    path: [
      { lat: 40.72301887001688, lng: -74.00428798059124 },
      { lat: 40.72336444034136, lng: -74.00399394342799 },
      { lat: 40.723395061389844, lng: -74.00399338864031 },
      { lat: 40.723518519786246, lng: -74.00467283229216 },
      { lat: 40.72328656822274, lng: -74.00476627775885 },
      { lat: 40.72325630874218, lng: -74.00476602172768 }
    ]
  },
  {
    title: '200 Hudson Street',
    url: '/buildings/200-hudson-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_200hudson.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.72287417567417, lng: -74.00855895913514 },
    path: [
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
    ]
  },
  {
    title: '205 Hudson Street',
    url: '/buildings/205-hudson-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_205hudson.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.72374, lng: -74.00923 },
    path: [
      { lat: 40.723390979386, lng: -74.00814394779098 },
      { lat: 40.72362881194272, lng: -74.0081117612828 },
      { lat: 40.72371723665093, lng: -74.00815467662704 },
      { lat: 40.7239362181715, lng: -74.00846674700034 },
      { lat: 40.723953496492186, lng: -74.0086571838404 },
      { lat: 40.72347583957513, lng: -74.00873557847524 },
      { lat: 40.723446115958566, lng: -74.00873572048096 }
    ]
  },
  {
    title: '12-16 Vestry Street',
    url: '/buildings/12-16-vestry-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_12-16vestry.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.722268405576976, lng: -74.00689598954591 },
    path: [
      { lat: 40.7226471, lng: -74.0074471 },
      { lat: 40.7226252, lng: -74.0071762 },
      { lat: 40.7227111, lng: -74.0071601 },
      { lat: 40.7227833, lng: -74.0070709 },
      { lat: 40.7229246, lng: -74.0072741 },
      { lat: 40.7228092, lng: -74.0074082 },
      { lat: 40.7226748, lng: -74.0074398 },
      { lat: 40.7226471, lng: -74.0074471 }
    ]
  },
  {
    title: '225 Varick Street',
    url: '/buildings/225-varick-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_225varick.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.728939703779844, lng: -74.00497552789125 },
    path: [
      { lat: 40.729323364378345, lng: -74.00587243102257 },
      { lat: 40.729285567461446, lng: -74.00542482465823 },
      { lat: 40.72871044297344, lng: -74.0055115405197 },
      { lat: 40.72875922530883, lng: -74.00595008169364 }
    ]
  },
  {
    title: '435 Hudson Street',
    url: '/buildings/435-hudson-street/',
    markerImg: '/static/images/logos/HSP_BuildingLockUps_435hudson.svg',
    markerSize: [90, 60],
    markerPos: { lat: 40.73056982183632, lng: -74.00652584470186 },
    path: [
      { lat: 40.73033373864783, lng: -74.00700118816252 },
      { lat: 40.73038379013507, lng: -74.00756948119755 },
      { lat: 40.730659707810325, lng: -74.00752857751007 },
      { lat: 40.73065665352461, lng: -74.00749087779968 },
      { lat: 40.73093309695983, lng: -74.00744805186002 },
      { lat: 40.7309259709087, lng: -74.00736956505989 },
      { lat: 40.73094630840458, lng: -74.00736691503732 },
      { lat: 40.73090602369806, lng: -74.00691841324135 },
      { lat: 40.730878668207765, lng: -74.00691745405629 }
    ]
  }
];

const neighborhoodLabelsData = [
  {
    positionData: { lat: 40.72639151526946, lng: -74.00744877688078 },
    label: 'HUDSON SQUARE'
  },
  {
    positionData: { lat: 40.723192, lng: -74.010072 },
    label: 'TRIBECA'
  },
  {
    positionData: { lat: 40.731618485731126, lng: -74.00665819269221 },
    label: 'WEST VILLAGE'
  },
  {
    positionData: { lat: 40.723636, lng: -74.001179 },
    label: 'SOHO'
  }
];

const neighborhoodOverlays = [
  {
    name: 'westVillage',
    path: [
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
    ]
  },
  {
    name: 'tribeca',
    path: [
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
    ]
  },
  {
    name: 'hudsonSquare',
    path: [
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
    ]
  },
  {
    name: 'soho',
    path: [
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
    ]
  }
];

const places = {
  RESTAURANTS: {
    ChIJn_RrhTNZwokRpwLrOqB2Mnw: { position: { lat: 40.725117, lng: -74.007875 }, name: 'Whitmans' },
    ChIJ4594sIxZwokRrTNHEMnX6MY: { position: { lat: 40.724489, lng: -74.005737 }, name: 'Amelia’s Diner' },
    ChIJ5QAkFvNZwokRM9nZI3ypnFk: { position: { lat: 40.725769, lng: -74.007954 }, name: 'Union Bar & Kitchen' },
    ChIJ7UcN1vJZwokRhdf9LtldRPQ: { position: { lat: 40.726487, lng: -74.006971 }, name: 'Mae Mae' },
    ChIJu7pIuopZwokRvIsndYhPg4U: { position: { lat: 40.719607, lng: -74.00563369999998 }, name: 'Frenchette' },
    'ChIJaTJH1uxZwokRbKmafyGI-sk': { position: { lat: 40.73140799999999, lng: -74.00699199999997 }, name: 'Kish-Kash' },
    ChIJZRslaJRZwokRgVlMzbgFTus: {
      position: { lat: 40.7343945, lng: -74.0027101 },
      name: 'While We Were Young Kitchen & Cocktails'
    },
    'ChIJja0-KpdZwokRuOHSWneCBxE': { position: { lat: 40.732629, lng: -73.99766799999998 }, name: 'Amelie Wine Bar' },
    ChIJt_loX5JZwokRZkK8Zu2O_X4: {
      position: { lat: 40.72981679999999, lng: -74.00351599999999 },
      name: "Jack's Wife Freda"
    },
    ChIJN03iU5RZwokR84lClGFMbTo: {
      position: { lat: 40.7354258, lng: -74.00314100000003 },
      name: 'Sant Ambroeus West Village'
    },
    ChIJiU1zGvNZwokRRmxoONWMGnc: { position: { lat: 40.7260206, lng: -74.00846899999999 }, name: 'Giorgione' },
    ChIJS7q7to1ZwokRWbN1t_AXYME: {
      position: { lat: 40.72609200000001, lng: -74.00240819999999 },
      name: 'Blue Ribbon Sushi'
    },
    ChIJPQ65gIxZwokRYYV9buM_BYw: { position: { lat: 40.72381669999999, lng: -74.00337919999998 }, name: 'Pera Soho' },
    ChIJf4befPRZwokRH2WqZhtiGuo: { position: { lat: 40.72371709999999, lng: -74.00974229999997 }, name: 'The Greek' },
    ChIJETquaPVZwokRVYYGSKrg4E0: { position: { lat: 40.7198044, lng: -74.00837619999999 }, name: "Bubby's" },
    'ChIJ4d_4j5RZwokRdzbjwe-QqxQ': { position: { lat: 40.7339742, lng: -74.00426270000003 }, name: 'Westville West' },
    ChIJ_Y7rMCBawokR0mnRmN5kL2o: { position: { lat: 40.7169003, lng: -74.00556310000002 }, name: 'atera' },
    ChIJe_ZBhY1ZwokRGAEwGLWYpA8: { position: { lat: 40.727729, lng: -74.002906 }, name: 'Charlie Bird' },
    ChIJEwHZcZNZwokR810IgyQhoZM: { position: { lat: 40.73270050000001, lng: -74.00431659999998 }, name: 'Buvette' },
    'ChIJHWNcKe1ZwokRzBgOs-cjQSU': { position: { lat: 40.7311103, lng: -74.0069618 }, name: 'Hudson Clearwater' },
    ChIJSZUDUh9awokRaEQdwtjY7Pg: { position: { lat: 40.7143487, lng: -74.00721469999996 }, name: "Hank's Juicy Beef" },
    ChIJn9skCvNZwokRk7K5S6cBxe0: { position: { lat: 40.72572359999999, lng: -74.00926549999997 }, name: 'Houseman' },
    'ChIJwUWsZpFZwokRhNINc_5-u9I': { position: { lat: 40.73128769999999, lng: -74.000315 }, name: 'Red Bamboo' },
    ChIJPRCpXpRZwokRtFAFKuIuG7M: {
      position: { lat: 40.73476259999999, lng: -74.00323759999998 },
      name: "Mary's Fish Camp"
    },
    ChIJt7fMLIlZwokRCRtM9bNDg78: { position: { lat: 40.7226041, lng: -73.9982235 }, name: 'Balthazar' },
    'ChIJ9w3lJqlZwokRzz-ZByrUFXk': { position: { lat: 40.7306106, lng: -74.0071557 }, name: 'EN Japanese Brasserie' },
    'ChIJke-X5L9ZwokRvFn8bmeiNBs': {
      position: { lat: 40.7389011, lng: -74.00567960000001 },
      name: 'High Street on Hudson'
    },
    ChIJx3LV_bWAj4ARlW17cSsmwp4: { position: { lat: 40.7341954, lng: -74.00645989999998 }, name: 'RedFarm' },
    ChIJm3rL5YxZwokRWk_MgQ_fuAk: { position: { lat: 40.7254266, lng: -74.0046926 }, name: 'Café Altro Paradiso' },
    ChIJa8NEw_JZwokRkUBcmHh8xOg: { position: { lat: 40.727247, lng: -74.00753900000001 }, name: 'Westville Hudson' },
    ChIJr7FOf5NZwokRu3CDYtzVmuQ: { position: { lat: 40.73314480000001, lng: -74.00361620000001 }, name: 'Via Carota' },
    ChIJ52zVPfNZwokRmHrrJBCTr6Q: { position: { lat: 40.7255997, lng: -74.00787860000003 }, name: 'Adoro Lei' },
    'ChIJh-7I5DtZwokRYbQIexg-Qko': { position: { lat: 40.725462, lng: -74.00725 }, name: 'Nonna Beppa' },
    'ChIJf6tT54pZwokRI5EU-NKF7sE': { position: { lat: 40.72075480000001, lng: -74.00488459999997 }, name: 'Pepolino' },
    'ChIJQ_fi-YxZwokReMQT2EyhQtE': { position: { lat: 40.725309, lng: -74.00384300000002 }, name: 'Aquagrill' },
    ChIJb7FRCYtZwokRC3tJHKjos7w: { position: { lat: 40.7219528, lng: -74.00397599999997 }, name: 'MAMO' },
    ChIJmy2pnY1ZwokRvWDMouRmdl4: { position: { lat: 40.727565, lng: -74.00345600000003 }, name: 'King' },
    ChIJQz2MefRZwokRyAe89nlm_Nk: { position: { lat: 40.72402039999999, lng: -74.0099664 }, name: 'China Blue' },
    ChIJlbeHNO1ZwokRMmA4nr55vBw: { position: { lat: 40.7303199, lng: -74.0065674 }, name: 'The Clam' },
    ChIJiyUQ1exZwokRTjx9d3tpTZg: { position: { lat: 40.73145509999999, lng: -74.00642149999999 }, name: 'Takashi' },
    ChIJOcWh7JJZwokRFTcYcqWcm_E: { position: { lat: 40.7297538, lng: -74.00461159999998 }, name: 'Spunto Thin Crust' },
    'ChIJw4UQHpNZwokRFoesUz-GbeY': { position: { lat: 40.7310188, lng: -74.0048433 }, name: 'Snack Taverna' }
  },
  'GRAB & GO FOOD': {
    ChIJm5EYP41ZwokR57_u5F4y4Us: { position: { lat: 40.72723, lng: -74.005255 }, name: 'Little Italy Pizzeria & Deli' },
    ChIJQfLbt_JZwokR5CgFbFPo0Fo: {
      position: { lat: 40.7275431, lng: -74.00707510000001 },
      name: 'Hale and Hearty Soups'
    },
    ChIJ9wkmyPJZwokRINn2zgV3Xvg: { position: { lat: 40.72782400000001, lng: -74.00704300000001 }, name: 'Dig Inn' },
    ChIJIbitGJJZwokR9VenUP8f_0E: {
      position: { lat: 40.7292098, lng: -74.00101689999997 },
      name: 'by CHLOE. West Village'
    },
    ChIJbVjFt_JZwokRWHeKp3VkJeA: {
      position: { lat: 40.72766470000001, lng: -74.00678449999998 },
      name: 'Pret A Manger'
    },
    ChIJk0szpPJZwokRQ0Tuv1t1N34: { position: { lat: 40.7284824, lng: -74.00791879999997 }, name: 'Le Pain Quotidien' },
    ChIJpSE_JI1ZwokRaYoe_vePq6w: {
      position: { lat: 40.72655479999999, lng: -74.0053714 },
      name: 'Essen Fast Slow Food'
    },
    ChIJO0_02_JZwokR_7PuZ38C4MU: { position: { lat: 40.7268575, lng: -74.00759149999999 }, name: 'Just Salad' },
    ChIJy5ELovJZwokRY8JOVZbnN7Q: { position: { lat: 40.728616, lng: -74.00795829999998 }, name: 'Chalait' },
    ChIJlTkor5NZwokRssoIkYdJOcc: { position: { lat: 40.731215, lng: -74.00316399999997 }, name: "Murray's Cheese Bar" },
    ChIJk0szpPJZwokRf4tw9yWAokk: { position: { lat: 40.7285513, lng: -74.00742819999999 }, name: 'Juice Press' },
    ChIJlQoSZqhZwokRnga8ClYl1m4: { position: { lat: 40.7291643, lng: -74.00558510000002 }, name: 'Shake Shack' },
    ChIJq6JWQ41ZwokRAsIKyN8KrgU: { position: { lat: 40.728188, lng: -74.005044 }, name: 'Chipotle Mexican Grill' },
    ChIJa4hOSpJZwokR3s6b9dVffR8: { position: { lat: 40.7305402, lng: -74.0022667 }, name: 'Dos Toros Taqueria' },
    'ChIJ_VoV6IhZwokRRj26x-Xm-Ow': { position: { lat: 40.7213353, lng: -74.00970110000003 }, name: 'sweetgreen' },
    ChIJsTlZU4tZwokRWPJMHrcgKnE: { position: { lat: 40.7235093, lng: -74.00644349999999 }, name: 'The Mill' },
    ChIJp4eoppJZwokRpJ6QCjck6I0: {
      position: { lat: 40.72900309999999, lng: -74.00563039999997 },
      name: 'Getting Hungry'
    }
  },
  'EVENT SPACES': {
    ChIJ84m3kPRZwokROFqq5MahX0Q: { position: { lat: 40.7234427, lng: -74.00834909999998 }, name: 'Tribeca Rooftop' },
    ChIJqUo0iZJZwokRz3Kh2odq2rU: {
      position: { lat: 40.7293723, lng: -74.00418150000002 },
      name: 'Alger House in the Village'
    },
    ChIJcVNgxo1ZwokRMIgLMm_S2Es: {
      position: { lat: 40.7264492, lng: -74.00179800000001 },
      name: 'The Lofts at Prince'
    },
    ChIJTX6hP5NZwokRy2zpDDqtNvs: {
      position: { lat: 40.73737759999999, lng: -74.00175050000001 },
      name: 'Little Owl The Venue'
    },
    ChIJp2ElgJNZwokRaQGaYtRF4d4: {
      position: { lat: 40.73318920000001, lng: -74.0035317 },
      name: 'Little Owl The Townhouse'
    },
    ChIJzzax34tZwokR8OTNZljyN0I: { position: { lat: 40.7217054, lng: -74.0008082 }, name: 'Soho Lofts' },
    ChIJpbfBMopZwokRxQO9o47tUI0: {
      position: { lat: 40.72054, lng: -74.00134100000002 },
      name: 'The Farm SoHo - Coworking Office Space NYC'
    },
    'ChIJZYD-nYpZwokRNgOoYzC4U1Y': { position: { lat: 40.7186604, lng: -74.00469570000001 }, name: 'Bouley Botanical' },
    ChIJL5kujvRZwokRTIFYbOpnXXs: { position: { lat: 40.7235993, lng: -74.00872470000002 }, name: 'Tribeca 360°' },
    ChIJGbYwqYpZwokRBKCzTpWyS5s: { position: { lat: 40.7191046, lng: -74.00602529999998 }, name: 'Town Stages' },
    'ChIJgTezeYpZwokRmJl_pSp-hlY': { position: { lat: 40.7185516, lng: -74.0029576 }, name: '393 NYC' }
  },
  BARS: {
    ChIJu55raJRZwokReRL9b1tLmQo: { position: { lat: 40.734295, lng: -74.00269200000002 }, name: 'Smalls Jazz Club' },
    ChIJN0f2iJFZwokRt53h0ISm3eE: { position: { lat: 40.729685, lng: -74.000472 }, name: 'The Up & Up' },
    'ChIJjY7y6ZJZwokRXF5CA_X4l-I': { position: { lat: 40.730118, lng: -74.005045 }, name: 'Little Branch' },
    ChIJ2a47oB9awokRj5umaLKRd1s: {
      position: { lat: 40.71673990000001, lng: -74.0080577 },
      name: "Tiny's & The Bar Upstairs"
    },
    ChIJI5ohrZRZwokROgkceyTyVOI: { position: { lat: 40.7341939, lng: -74.00649399999998 }, name: 'Decoy' },
    'ChIJtSjFCfNZwokRMW-KSzp4o4c': { position: { lat: 40.72584440000001, lng: -74.00949229999998 }, name: 'Ear Inn' },
    'ChIJpbS_EfNZwokRxdeX-qWkOl0': { position: { lat: 40.7257668, lng: -74.00860949999998 }, name: 'Lazy Point' },
    'ChIJ5X5PM-1ZwokRqc7NcYmU65M': { position: { lat: 40.730384, lng: -74.006554 }, name: 'LELABAR' },
    ChIJK27hlI1ZwokRSwY94KjJ4PY: { position: { lat: 40.7271061, lng: -74.00221299999998 }, name: '142 Sullivan' },
    'ChIJZQELoYxZwokR-y4Vo_dVctI': {
      position: { lat: 40.7237873, lng: -74.00508530000002 },
      name: 'Artifakt Bar and Lounge'
    },
    ChIJZ4UT7o1ZwokRpAOpubL6UC4: { position: { lat: 40.727089, lng: -74.00205549999998 }, name: 'Local' },
    ChIJLztrVJNZwokRTmcQJheGNR4: { position: { lat: 40.7334327, lng: -74.00608139999997 }, name: 'Solo Empleados' },
    'ChIJwfjyaetZwokRTDXEUa-gpOQ': { position: { lat: 40.7349704, lng: -74.00803459999997 }, name: 'The Otheroom' },
    ChIJd8khjJJZwokRPx0UD3pEMuE: {
      position: { lat: 40.72936569999999, lng: -74.00378969999997 },
      name: 'Blue Ribbon Downing Street Bar'
    },
    ChIJL7u0rIpZwokRmbw3wEvmxTg: { position: { lat: 40.7192036, lng: -74.00654939999998 }, name: 'Terra' },
    'ChIJ1Z3-Oh5awokR6ReR4JZHAfA': { position: { lat: 40.7189227, lng: -74.00995940000001 }, name: 'Terroir Tribeca' },
    ChIJUw68EZJZwokRJ15RD_T4OTw: { position: { lat: 40.72887799999999, lng: -74.00166200000001 }, name: 'Dante NYC' },
    ChIJiextKI1ZwokRKTNKS2BGVRs: { position: { lat: 40.726232, lng: -74.0060077 }, name: 'City Winery' },
    'ChIJ_-JwoItZwokRoptvAsv5Waw': {
      position: { lat: 40.72216249999999, lng: -74.00348919999999 },
      name: 'Lucky Strike'
    },
    ChIJpY0DE45ZwokRqJG5ofXh4c4: { position: { lat: 40.72657529999999, lng: -73.99986139999999 }, name: 'Pegu Club' },
    ChIJUSRJA_NZwokRmv6F7Po9LdU: { position: { lat: 40.7264254, lng: -74.00871139999998 }, name: 'Bar Hugo' },
    ChIJX5URYPNZwokRlEaFrdshgP4: {
      position: { lat: 40.7244354, lng: -74.00806899999998 },
      name: 'Arlo Roof Top (A.R.T.)'
    },
    ChIJxTvKX41ZwokRT53xgEZGScI: { position: { lat: 40.7284492, lng: -74.00512409999999 }, name: 'Sound Of Brazil' },
    'ChIJAwTF3IxZwokRV37b-jNKkU8': { position: { lat: 40.7252839, lng: -74.00549810000001 }, name: 'Bar d’Eau' },
    ChIJfeW5nZJZwokRxFwjLpeBhrk: {
      position: { lat: 40.72871529999999, lng: -74.00457799999998 },
      name: 'The Brooklyneer'
    },
    'ChIJMbIUbItZwokR-4F2xuu6JFs': { position: { lat: 40.7224678, lng: -74.00481279999997 }, name: 'Jimmy' },
    ChIJjQlQe4xZwokRirW3QHPewpo: { position: { lat: 40.7240067, lng: -74.0030701 }, name: 'The Gordon Bar' },
    ChIJ7UcN1vJZwokRhdf9LtldRPQ: { position: { lat: 40.7264619, lng: -74.00697969999999 }, name: 'Mae Mae Café & Bar' },
    ChIJkYlCnpJZwokRuQzFWh0dgRE: { position: { lat: 40.728801, lng: -74.00471900000002 }, name: 'Houston Hall' }
  },
  'CAFES + BAKERIES': {
    ChIJiR2mx_JZwokRwvQNkTjxjOg: { position: { lat: 40.727631, lng: -74.007483 }, name: 'Starbucks' },
    ChIJ95Cz24xZwokR7UvY056lTb0: { position: { lat: 40.725778, lng: -74.005556 }, name: 'Starbucks' },
    ChIJISgzNo1ZwokRg5ZO8ZTBKkw: { position: { lat: 40.727424, lng: -74.005954 }, name: 'Seven Grams Caffè' },
    ChIJn7pORZJZwokRSjiJ7fyALss: { position: { lat: 40.7300129, lng: -74.0028476 }, name: 'Bluestone Lane' },
    ChIJG16qlhlZwokRXg0efJNcIM0: { position: { lat: 40.7234, lng: -74.00667 }, name: 'Blue Bottle Coffee' },
    ChIJNRSB1_JZwokRYW_A3fPF5nA: { position: { lat: 40.7267631, lng: -74.00700010000003 }, name: 'La Colombe' },
    ChIJXTz9tfJZwokRVOEBKxnSGQY: {
      position: { lat: 40.72766470000001, lng: -74.00678449999998 },
      name: 'Gregorys Coffee'
    },
    ChIJ2cijhR9awokRQBdGxQzz0wQ: { position: { lat: 40.7169103, lng: -74.00675939999996 }, name: 'Arcade Bakery' },
    ChIJ0wOsOZRZwokRY1t9B6VG3e8: {
      position: { lat: 40.7348028, lng: -74.00189390000003 },
      name: 'Dominique Ansel Kitchen'
    },
    ChIJOzyVqZZZwokRbNBEKeJZADs: { position: { lat: 40.7332972, lng: -74.00056589999997 }, name: 'Joe Coffee Company' },
    'ChIJQT7-qZRZwokRA7oVNv2nPEY': { position: { lat: 40.733684, lng: -74.0061116 }, name: 'Starbucks' },
    ChIJ1fPJMu1ZwokR9bAptiISZfs: {
      position: { lat: 40.7305602, lng: -74.00653410000001 },
      name: 'Merriweather Coffee + Kitchen'
    },
    'ChIJ9Tr8spNZwokRK7Th-8nYiQs': {
      position: { lat: 40.7308397, lng: -74.00264249999998 },
      name: 'Pasticceria Rocco'
    },
    ChIJM767a4xZwokRXyq8NCoE33I: {
      position: { lat: 40.7243185, lng: -74.00230479999999 },
      name: 'Ladurée New York Soho'
    },
    ChIJZZ0c4L1ZwokRrke5d3wnd3w: { position: { lat: 40.72372839999999, lng: -74.00843709999998 }, name: 'maman' },
    ChIJJ6jpYL9ZwokRJ2OK83QOrrQ: { position: { lat: 40.7278193, lng: -74.00685929999997 }, name: 'Jacques Torres' }
  },
  RETAIL: {
    ChIJv_keOY1ZwokRlNuvMTH8bkw: { position: { lat: 40.727521, lng: -74.00519 }, name: 'ARROJO Studio Soho' },
    'ChIJK4-sv_RZwokR_-YWAnNmIls': {
      position: { lat: 40.7229375, lng: -74.00782090000001 },
      name: 'ARROJO Studio TriBeCa'
    },
    ChIJezFF74xZwokRWBSN9o0ANCY: { position: { lat: 40.7254584, lng: -74.00498110000001 }, name: 'Ducati New York' },
    ChIJRfP4AqNZwokRDsAFGNO1bbI: { position: { lat: 40.7355734, lng: -74.00199909999998 }, name: 'Idlewild Books' },
    ChIJrbgwr5NZwokRnAaQ0MVcsNM: { position: { lat: 40.7312736, lng: -74.00315610000001 }, name: 'bookbook' },
    'ChIJlUFgV5JZwokRib-u8_AsHds': { position: { lat: 40.7302497, lng: -74.00336419999996 }, name: 'House of Oldies' },
    'ChIJZ-a2kI5ZwokRjwGGZ7bLypo': {
      position: { lat: 40.72463250000001, lng: -73.99998449999998 },
      name: 'DIOR Soho Store'
    },
    ChIJmXAB1o1ZwokRxo0dH1kgHfU: { position: { lat: 40.725784, lng: -74.00069480000002 }, name: 'Coach' },
    ChIJq6reMIxZwokRuz27w0YZqO4: {
      position: { lat: 40.72510510000001, lng: -74.00172099999997 },
      name: 'KARL LAGERFELD'
    },
    ChIJO5XMjY5ZwokRXZ8XCiVL9aA: {
      position: { lat: 40.7247415, lng: -73.99936079999998 },
      name: 'Louis Vuitton New York SoHo'
    },
    ChIJoWf_go5ZwokR849wL5oCSw8: { position: { lat: 40.7250048, lng: -74.00056760000001 }, name: 'Ted Baker SoHo' },
    ChIJxzJcc4xZwokRCosButOyGl8: {
      position: { lat: 40.72519599999999, lng: -73.99939999999998 },
      name: 'Polo Ralph Lauren'
    },
    'ChIJc4J-H4xZwokRRkoSIYHI830': {
      position: { lat: 40.7242622, lng: -74.00083919999997 },
      name: 'CHANEL New York Soho'
    },
    ChIJf8SmVo5ZwokRzePoVONGWTA: { position: { lat: 40.725273, lng: -73.99964299999999 }, name: 'Marc Jacobs' },
    ChIJJXyVGmhZwokRnQwJrAVs158: { position: { lat: 40.7233317, lng: -74.00195719999999 }, name: 'Gucci' },
    ChIJV3Ws9I5ZwokRJX_PJBN3pYI: { position: { lat: 40.725058, lng: -73.99902900000001 }, name: 'Apple SoHo' },
    ChIJM3EfLe1ZwokR8Pq_Kf_Ywas: { position: { lat: 40.730751, lng: -74.00655799999998 }, name: 'Zoomies' },
    ChIJNwHvhvRZwokR4HrlskyYAtk: { position: { lat: 40.7238094, lng: -74.00920739999998 }, name: 'La Garçonne' },
    ChIJdd0pXvNZwokRz8BpXhB0XAc: { position: { lat: 40.7242469, lng: -74.00809040000001 }, name: 'Concepts NYC' }
  },
  'HEALTH + FITNESS': {
    'ChIJxQfx-4xZwokR39Iby7aaIiI': { position: { lat: 40.72584, lng: -74.004285 }, name: 'CVS Pharmacy' },
    'ChIJhWOHuPJZwokRHxhy5M-iL_w': { position: { lat: 40.728011, lng: -74.007457 }, name: 'Hudson Square Pharmacy' },
    ChIJM8LZY_NZwokRJOREfXxL5yQ: { position: { lat: 40.724303, lng: -74.008362 }, name: 'Cryofuel' },
    'ChIJ84-3q-tZwokRhzuKwGLfeVU': { position: { lat: 40.725687, lng: -74.008896 }, name: 'J TRAIN' },
    ChIJqbkiw_JZwokRusfU4MtLto8: {
      position: { lat: 40.727165, lng: -74.007692 },
      name: 'Real Pilates - (Hudson Square)'
    },
    ChIJYzd3_YxZwokRP_JqqpyHKRs: { position: { lat: 40.72611, lng: -74.003495 }, name: 'Physique 57' },
    ChIJWy4lY_NZwokRZl7kCchqH94: { position: { lat: 40.7245092, lng: -74.0087489 }, name: 'DOGPOUND' },
    ChIJKRegTu1ZwokRk1NX9pKAUE0: { position: { lat: 40.7299148, lng: -74.0072654 }, name: 'Equinox Printing House' },
    'ChIJ1csLDO1ZwokR7-pV_9aA0WM': { position: { lat: 40.730811, lng: -74.009276 }, name: 'Gotham Gym' },
    ChIJXz7QpZJZwokR4bOhE8El95M: { position: { lat: 40.7292515, lng: -74.0055726 }, name: 'New York Sports Clubs' },
    ChIJnUkYY4tZwokReW2LpghyQ0I: {
      position: { lat: 40.7171015, lng: -74.00680019999999 },
      name: 'NYC Elite Gymnastics'
    },
    ChIJY30kFe1ZwokRiHlkAvLc12M: {
      position: { lat: 40.730222, lng: -74.00795319999997 },
      name: 'SoulCycle - West Village'
    },
    ChIJN1WPxJNZwokR6jWhU3ee4zc: {
      position: { lat: 40.7314306, lng: -74.00147620000001 },
      name: 'CityMD West Village'
    },
    ChIJgx_u75FZwokR1Ak1AU1B6lc: { position: { lat: 40.72842490000001, lng: -73.99986519999999 }, name: 'CVS' }
  },
  'GALLERIES + MUSEUMS': {
    ChIJmamBZtVZwokR6phs86DKbP0: { position: { lat: 40.725775, lng: -74.005332 }, name: 'Color Factory' },
    ChIJG5_ZTo1ZwokRYO2dYyekiQk: { position: { lat: 40.72783, lng: -74.005976 }, name: 'Geary Contemporary' },
    ChIJBaxdorhZwokR09a9ldotesc: { position: { lat: 40.718939, lng: -74.0036996 }, name: 'Alexander and Bonin' },
    'ChIJW-84fIpZwokR8Eh2JD2QKkk': {
      position: { lat: 40.718826, lng: -74.00332579999997 },
      name: 'Artists Space Books & Talks'
    },
    ChIJL__x3YlZwokRWkmi33szuw8: {
      position: { lat: 40.7182131, lng: -73.9990856 },
      name: 'The Camera Club of New York'
    },
    'ChIJkUq6gcdZwokRToV8-OuJrSY': { position: { lat: 40.71913079999999, lng: -74.00396189999998 }, name: 'Bortolami' },
    ChIJdWA_r4tZwokRPgHkRNHAKog: { position: { lat: 40.721435, lng: -74.00305600000002 }, name: 'Jeffrey Deitch' },
    ChIJAZnLuY5ZwokRG2WuctcRsbo: { position: { lat: 40.7235042, lng: -73.99938629999997 }, name: 'Judd Foundation' },
    'ChIJz83U3vJZwokRwHuQbIh8-yY': {
      position: { lat: 40.7268741, lng: -74.00775920000001 },
      name: 'Kate Werble Gallery'
    },
    ChIJoxlkfSBawokR29n3UXzcWQg: { position: { lat: 40.7179662, lng: -74.00359860000003 }, name: 'Lubov' },
    ChIJcXGe4Y5ZwokRLx5OK09ZMrA: { position: { lat: 40.720383, lng: -73.99942850000002 }, name: 'Peter Freeman Inc.' },
    ChIJXWJZyYtZwokROFkwxSs1ZJE: {
      position: { lat: 40.72111820000001, lng: -74.00190299999997 },
      name: 'Ronald Feldman Gallery'
    },
    ChIJeaNd3IhZwokRU25epwuJ4aY: {
      position: { lat: 40.7214782, lng: -73.99707089999998 },
      name: 'Storefront for Art and Architecture'
    },
    ChIJDTWukItZwokREUciPmdlVy0: {
      position: { lat: 40.72244610000001, lng: -74.00295729999999 },
      name: 'The Drawing Center'
    },
    ChIJ7ylTgiBawokRk5BP2BzEJ2E: {
      position: { lat: 40.7170321, lng: -74.0030557 },
      name: 'The National Exemplar Gallery'
    },
    ChIJWaqbDolZwokRWK8vbWSAfMk: {
      position: { lat: 40.7276164, lng: -74.00815439999997 },
      name: "Children's Museum of the Arts"
    },
    ChIJsblxMfNZwokRBLOhQZRjwtE: { position: { lat: 40.7255619, lng: -74.006935 }, name: 'New York City Fire Museum' },
    ChIJIwbwb45ZwokRbUztx3kE1IY: {
      position: { lat: 40.7261985, lng: -73.99958049999998 },
      name: 'Walter de Maria: The New York Earth Room'
    }
  },
  'FILM, THEATER AND CULTURE': {
    'ChIJY9HQ64xZwokRzE_DJ9Q-3GM': { position: { lat: 40.725122, lng: -74.004835 }, name: 'HERE Arts' },
    ChIJzRIEPo1ZwokRN9eigVZqU_c: { position: { lat: 40.726996, lng: -74.005132 }, name: 'The Greene Space' },
    ChIJpQbEGo1ZwokR3HzSkTO1_m8: { position: { lat: 40.726533, lng: -74.004374 }, name: 'Soho Playhouse' },
    ChIJQ1RTt49ZwokRgYgqG6DdK2w: {
      position: { lat: 40.7259225, lng: -73.9973541 },
      name: 'Angelika Film Center & Café - New York'
    },
    'ChIJjSKIz5NZwokRTS3NUw8-59o': { position: { lat: 40.7312056, lng: -74.00167220000003 }, name: 'IFC Center' },
    ChIJW3q6Yo1ZwokRwnpMeNyWLFs: { position: { lat: 40.72832220000001, lng: -74.00450710000001 }, name: 'Film Forum' },
    ChIJoX0fIZNZwokR7He1ZJCM8Dc: { position: { lat: 40.731278, lng: -74.00531799999999 }, name: 'Cherry Lane Theatre' },
    'Eh1NaW5ldHRhIExuLCBOZXcgWW9yaywgTlksIFVTQSIuKiwKFAoSCbExKCqSWcKJEX6uF20ge-JeEhQKEgk7CD_TpU_CiRFi_nfhBo8LyA': {
      position: { lat: 40.73025679999999, lng: -74.00102559999999 },
      name: 'Minetta Lane'
    },
    'ChIJm0HEXpNZwokR8-qsn35JqBo': {
      position: { lat: 40.7332808, lng: -74.00571919999999 },
      name: 'Lucille Lortel Theatre'
    },
    'EiJCYXJyb3cgU3QsIE5ldyBZb3JrLCBOWSAxMDAxNCwgVVNBIi4qLAoUChIJZTMfNpNZwokRwUDWgIMvNV4SFAoSCTsIP9OlT8KJEWL-d-EGjwvI': {
      position: { lat: 40.731644, lng: -74.00600509999998 },
      name: 'Barrow Street'
    },
    'ChIJaSATiIpZwokRPrpfx9FD-uw': { position: { lat: 40.719313, lng: -74.00352699999996 }, name: 'Soho Rep.' },
    ChIJiextKI1ZwokRKTNKS2BGVRs: { position: { lat: 40.726232, lng: -74.0060077 }, name: 'City Winery' },
    ChIJMbfknu5ZwokRaRXuCuQIWmE: {
      position: { lat: 40.73303629999999, lng: -74.01100509999998 },
      name: 'Pier 45 at Hudson River Park'
    },
    ChIJRfP4AqNZwokRDsAFGNO1bbI: { position: { lat: 40.7355734, lng: -74.00199909999998 }, name: 'Idlewild Books' }
  },
  'BANK AND CONVENIENCE': {
    'ChIJmx18YI5ZwokRYGtMDj9AT-E': { position: { lat: 40.725388, lng: -73.999222 }, name: 'Warby Parker' },
    'ChIJZd0F3oxZwokRiaEouMZKQ-0': { position: { lat: 40.725824, lng: -74.005079 }, name: 'Trader Joes' },
    'ChIJhWOHuPJZwokRqALceiwG-Fo': { position: { lat: 40.727502, lng: -74.007612 }, name: 'Chase Bank' },
    ChIJ08V4Xo1ZwokRkROgxn7wTYQ: { position: { lat: 40.727988, lng: -74.005067 }, name: 'Citibank' },
    ChIJpXcroZJZwokRm6EkhvYYgdk: { position: { lat: 40.7287798, lng: -74.00550659999999 }, name: 'HSBC Bank' },
    ChIJY8cCOI1ZwokRaIP9wVtDVE0: { position: { lat: 40.72731150000001, lng: -74.00574899999998 }, name: 'TD Bank' },
    ChIJ8xNU3exZwokRxUB9Eja0bm4: { position: { lat: 40.7321288, lng: -74.00789739999999 }, name: 'Brooklyn Fare' },
    ChIJiyWSiYtZwokRoefl4pFH9JU: { position: { lat: 40.7232463, lng: -74.00256230000002 }, name: 'Sunrise Mart' },
    ChIJZZK744tZwokRl_mXIy4F7KI: { position: { lat: 40.7229593, lng: -74.0027179 }, name: 'Gourmet Garage' },
    'ChIJuXvxrZNZwokR3XPZK9SvN-U': {
      position: { lat: 40.73102360000001, lng: -74.00309709999999 },
      name: "Murray's Cheese"
    },
    ChIJ1csLDO1ZwokRiPwnF5nU3bU: { position: { lat: 40.7307358, lng: -74.00916870000003 }, name: "Le Du's Wines" },
    'ChIJty_d1exZwokRbGd_NAo-lYk': {
      position: { lat: 40.7314316, lng: -74.0068339 },
      name: 'Golden Rule Wine & Liquor'
    },
    ChIJFZvam5RZwokRFTN9DvQICqs: {
      position: { lat: 40.73386800000001, lng: -74.00472819999999 },
      name: 'Village Apothecary'
    },
    'ChIJhWOHuPJZwokRHxhy5M-iL_w': { position: { lat: 40.727878, lng: -74.0073395 }, name: 'Hudson Square Pharmacy' }
  }
};

const parks = [
  [
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
  ],
  [
    { lat: 40.72598948929491, lng: -74.01162749702223 },
    { lat: 40.726267966031564, lng: -74.01157117063292 },
    { lat: 40.726228328903, lng: -74.01116347486266 },
    { lat: 40.72582484191721, lng: -74.01123053008803 },
    { lat: 40.725902400861024, lng: -74.0114326957854 }
  ],
  [
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
  ]
];
export {
  filters,
  miniMapOptions,
  mapOptions,
  ourBuildings,
  places,
  parks,
  neighborhoodOverlays,
  neighborhoodLabelsData
};
