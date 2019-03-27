const buildings = [
  {
    title: '75 Varick Street',
    slug: '75-varick-street',
    yearConstructed: '1929',
    numFloors: '17',
    totalBuildingArea: 1160297,
    floorSizes: '40,000 – 80,000 SF',
    CeilingHeights: ['Basement: 15′-1″ – 18′-4″', 'Floors 2-16: 12′-4″', 'Floor 17: 12′-6″'],
    header: {
      headerLogo: '/static/images/logos/logo-75-varick-street-white.svg',
      headerLogoAlt: '75 Varick Street',
      headerBackground: '/static/images/buildings/1_75_Varick/1_Hero/75_Varick_Hero.jpg' 
    }
  },
  {
    title: '160 Varick Street',
    slug: '160-varick-street',
    yearConstructed: '1927-1928',
    numFloors: '12',
    totalBuildingArea: 343020,
    floorSizes: '3,388 – 29,096 SF',
    CeilingHeights: ['12′-4″'],
    header: {
      headerLogo: '/static/images/logos/logo-160-varick-street-white.svg',
      headerLogoAlt: '160 Varick Street',
      headerBackground: '/static/images/buildings/2_160_Varick/1_Hero/160_Varick_Hero.jpg'
    }
  },
  {
    title: '345 Hudson Street',
    slug: '345-hudson-street',
    yearConstructed: '1931',
    numFloors: '17',
    totalBuildingArea: 978795,
    floorSizes: '47,558 – 62,513 SF',
    CeilingHeights: ['Floors 2-16: 12′-4″', 'Floor 17: 12′-6″'],
    header: {
      headerLogo: '/static/images/logos/logo-345-hudson-street-white.svg',
      headerLogoAlt: '345 Hudson Street',
      headerBackground: '/static/images/buildings/3_345_Hudson/1_Hero/345_Hudson_Hero.jpg'
    }
  },
  {
    title: '350 Hudson Street',
    slug: '350-hudson-street',
    yearConstructed: '1927',
    numFloors: '9',
    totalBuildingArea: 324109,
    floorSizes: '38,950 – 39,176 SF',
    CeilingHeights: ['12′-0″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-350-hudson-street-white.svg',
      headerLogoAlt: '350 Hudson Street',
      headerBackground: '/static/images/buildings/4_350_Hudson/1_Hero/350_Hudson_Hero.jpg'
    }
  },
  {
    title: '375 Hudson Street',
    slug: '375-hudson-street',
    yearConstructed: '1987',
    numFloors: '18 + Penthouse',
    totalBuildingArea: 1123659,
    floorSizes: '34,000 – 71,000 SF',
    CeilingHeights: ['11′-6″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-375-hudson-street-white.svg',
      headerLogoAlt: '375 Hudson Street',
      headerBackground: '/static/images/buildings/5_375_Hudson/1_Hero/375_Hudson_Hero.jpg'
    }
  },
  {
    title: '155 AoA Street',
    slug: '155-avenue-of-the-americas',
    yearConstructed: '1929',
    numFloors: '15',
    totalBuildingArea: 223563,
    floorSizes: '12,500 – 15,300 SF',
    CeilingHeights: ['11′-5″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-155-aoa-white.svg',
      headerLogoAlt: '155 Avenue of the Americas',
      headerBackground: '/static/images/buildings/6_155_AoA/1_Hero/155_AoA_Hero.jpg'
    }
  },
  {
    title: '100 AoA Street',
    slug: '100-avenue-of-the-americas',
    yearConstructed: '1930',
    numFloors: '17',
    totalBuildingArea: 378130,
    floorSizes: '17,529 – 25,519 SF',
    CeilingHeights: ['11′-6″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-100-aoa-white.svg',
      headerLogoAlt: '100 Avenue of the Americas',
      headerBackground: '/static/images/buildings/7_100_AoA/1_Hero/100_AoA_Hero.jpg'
    }
  },
  {
    title: '200 Hudson Street',
    slug: '200-hudson-street',
    yearConstructed: '1926',
    numFloors: '12',
    totalBuildingArea: 380971,
    floorSizes: '32,140 – 32,243 SF',
    CeilingHeights: ['11′-5″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-200-hudson-street-white.svg',
      headerLogoAlt: '200 Hudson Street',
      headerBackground: '/static/images/buildings/8_200_Hudson/1_Hero/200_Hudson_Hero.jpg'
    }
  },
  {
    title: '205 Hudson Street',
    slug: '205-hudson-street',
    yearConstructed: '1928',
    numFloors: '12',
    totalBuildingArea: 395108,
    floorSizes: '31,201 – 31,580 SF',
    CeilingHeights: ['13′-0″'],
    header: {
      headerLogo: '/static/images/logos/logo-205-hudson-street-white.svg',
      headerLogoAlt: '205 Hudson Street',
      headerBackground: '/static/images/buildings/9_205_Hudson/1_Hero/205_Hudson_Hero.jpg'
    }
  },
  {
    title: '12-16 Vestry Street',
    slug: '12-16-vestry-street',
    yearConstructed: '1882',
    numFloors: '7',
    totalBuildingArea: 59527,
    floorSizes: '8,196 – 8,214 SF',
    CeilingHeights: ['12′-0″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-12-16-vestry-street.png',
      headerLogoAlt: '12-16 Vestry Street',
      headerBackground: '/static/images/buildings/10_12_16_Vestry/1_Hero/12_16_Vestry_Hero.jpg'
    }
  },
  {
    title: '225 Varick Street',
    slug: '225-varick-street',
    yearConstructed: '1926',
    numFloors: '12',
    totalBuildingArea: 376089,
    floorSizes: '30,243 – 31,639 SF',
    CeilingHeights: ['13′-0″ typical'],
    header: {
      headerLogo: '/static/images/logos/logo-225-varick-street-white.svg',
      headerLogoAlt: '225 Varick Street',
      headerBackground: '/static/images/buildings/11_225_Varick/1_Hero/225_Varick_Hero.jpg'
    }
  },
  {
    title: '435 Hudson Street',
    slug: '435-hudson-street',
    yearConstructed: '1931',
    numFloors: '9',
    totalBuildingArea: 287586,
    floorSizes: '30,755 – 31,579 SF',
    CeilingHeights: ['14′-5″ – 16′-0″'],
    header: {
      headerLogo: '/static/images/logos/logo-435-hudson-street-white.svg',
      headerLogoAlt: '435 Hudson Street',
      headerBackground: '/static/images/buildings/12_435_Hudson/1_Hero/435_Hudson_Hero.jpg'
    }
  }
];

const buildingsSlider = [
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/1_75_Varick',
    imgAlt: '75 Varick Street',
    titleImg: '/static/images/logos/logo-75-varick-street-white.svg',
    link: '/buildings/75-varick-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/2_160_Varick',
    imgAlt: '160 Varick Street',
    titleImg: '/static/images/logos/logo-160-varick-street-white.svg',
    link: '/buildings/160-varick-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/3_345_Hudson',
    imgAlt: '345 Hudson Street',
    titleImg: '/static/images/logos/logo-345-hudson-street-white.svg',
    link: '/buildings/345-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/4_350_Hudson',
    imgAlt: '350 Hudson Street',
    titleImg: '/static/images/logos/logo-350-hudson-street-white.svg',
    link: '/buildings/350-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/5_375_Hudson',
    imgAlt: '375 Hudson Street',
    titleImg: '/static/images/logos/logo-375-hudson-street-white.svg',
    link: '/buildings/375-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/6_155_AoA',
    imgAlt: '155 Avenue of the Americas',
    titleImg: '/static/images/logos/logo-155-aoa-white.svg',
    link: '/buildings/155-avenue-of-the-americas/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/7_100_AoA',
    imgAlt: '100 Avenue of the Americas',
    titleImg: '/static/images/logos/logo-100-aoa-white.svg',
    link: '/buildings/100-avenue-of-the-americas/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/8_200_Hudson',
    imgAlt: '200 Hudson Street',
    titleImg: '/static/images/logos/logo-200-hudson-street-white.svg',
    link: '/buildings/200-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/9_205_Hudson',
    imgAlt: '205 Hudson Street',
    titleImg: '/static/images/logos/logo-205-hudson-street-white.svg',
    link: '/buildings/205-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/10_12_16_Vestry',
    imgAlt: '12-16 Vestry Street',
    titleImg: '/static/images/logos/logo-12-16-vestry-street.png',
    link: '/buildings/12-16-vestry-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/11_225_Varick',
    imgAlt: '225 Varick Street',
    titleImg: '/static/images/logos/logo-225-varick-street-white.svg',
    link: '/buildings/225-varick-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/12_435_Hudson',
    imgAlt: '435 Hudson Street',
    titleImg: '/static/images/logos/logo-435-hudson-street-white.svg',
    link: '/buildings/435-hudson-street/'
  }
];

export { buildingsSlider, buildings };
