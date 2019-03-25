const buildings = [
  {
    title: '75 Varick',
    slug: '75-varick-street',
    yearConstructed: '1931',
    numFloors: 17,
    totalBuildingArea: 978795,
    floorSizes: '47,558 – 62,513 SF',
    CeilingHeights: ['Floors 2-16: 12′-4″', 'Floor 17: 12′-6″'],
    header: {
      headerLogo: '/static/images/logos/logo-75-varick-street-white.svg',
      headerLogoAlt: '75 Varick Street',
      headerBackground:
        '/static/images/buildings/1_75_Varick/1_Hero/_N1A0364.jpg'
    }
  },
  {
    title: '160 Varick',
    slug: '160-varick-street',
    yearConstructed: '1927-1928',
    numFloors: 12,
    totalBuildingArea: 343020,
    floorSizes: '3,388 – 29,096 SF',
    CeilingHeights: ['12′-4″'],
    header: {
      headerLogo: '/static/images/logos/logo-160-varick-street-white.svg',
      headerLogoAlt: '160 Varick Street',
      headerBackground:
        '/static/images/buildings/2_160_Varick/1_Hero/18KCJP_HudsonSqNeigh_002.jpg'
    }
  },
  {
    title: '345 Hudson',
    slug: '345-hudson-street',
    header: {
      headerLogo: '/static/images/logos/logo-345-hudson-street-white.svg',
      headerLogoAlt: '345 Hudson Street',
      headerBackground:
        '/static/images/buildings/3_345_Hudson/1_Hero/345Hudson_Tree_retouched.jpg'
    }
  },
  {
    title: '350 Hudson',
    slug: '350-hudson-street',
    header: {
      headerLogo: '/static/images/logos/logo-350-hudson-street-white.svg',
      headerLogoAlt: '350 Hudson Street',
      headerBackground:
        '/static/images/buildings/4_350_Hudson/1_Hero/18KCJP_350Hudson_Bldg 08.jpg'
    }
  },
  {
    title: '375 Hudson',
    slug: '375-hudson-street',
    header: {
      headerLogo: '/static/images/logos/logo-375-hudson-street-white.svg',
      headerLogoAlt: '375 Hudson Street',
      headerBackground:
        '/static/images/buildings/5_375_Hudson/1_Hero/18KCJP_375Hudson_Bldg 15.jpg'
    }
  },
  {
    title: '155 AoA',
    slug: '155-avenue-of-the-americas',
    header: {
      headerLogo: '/static/images/logos/logo-155-aoa-white.svg',
      headerLogoAlt: '155 Avenue of the Americas',
      headerBackground:
        '/static/images/buildings/6_155_AoA/1_Hero/18KCJP_155AA_Bldg-07_retouched.jpg'
    }
  },
  {
    title: '100 AoA',
    slug: '100-avenue-of-the-americas',
    header: {
      headerLogo: '/static/images/logos/logo-100-aoa-white.svg',
      headerLogoAlt: '100 Avenue of the Americas',
      headerBackground:
        '/static/images/buildings/7_100_AoA/1_Hero/18KCJP_100AA_Bldg-12.jpg'
    }
  },
  {
    title: '200 Hudson',
    slug: '200-hudson-street',
    header: {
      headerLogo: '/static/images/logos/logo-200-hudson-street-white.svg',
      headerLogoAlt: '200 Hudson Street',
      headerBackground:
        '/static/images/buildings/8_200_Hudson/1_Hero/18KCJP_200Hudson_Bldg_12.jpg'
    }
  },
  {
    title: '205 Hudson',
    slug: '205-hudson-street',
    header: {
      headerLogo: '/static/images/logos/logo-205-hudson-street-white.svg',
      headerLogoAlt: '205 Hudson Street',
      headerBackground:
        '/static/images/buildings/9_205_Hudson/1_Hero/17KCJP_205Hudson_Bldg 06.jpg'
    }
  },
  {
    title: '12-16 Vestry',
    slug: '12-16-vestry-street',
    header: {
      headerLogo: '/static/images/logos/logo-12-16-vestry-street.png',
      headerLogoAlt: '12-16 Vestry Street',
      headerBackground:
        '/static/images/buildings/10_12_16_Vestry/1_Hero/18KCJP_12_16Vestry_Bldg-06_retouch.jpg'
    }
  },
  {
    title: '225 Varick',
    slug: '225-varick-street',
    header: {
      headerLogo: '/static/images/logos/logo-225-varick-street-white.svg',
      headerLogoAlt: '225 Varick Street',
      headerBackground:
        '/static/images/buildings/11_225_Varick/1_Hero/18KCJP_225Varick_Bldg-15-Historic-Match.jpg'
    }
  },
  {
    title: '435 Hudson',
    slug: '435-hudson-street',
    header: {
      headerLogo: '/static/images/logos/logo-435-hudson-street-white.svg',
      headerLogoAlt: '435 Hudson Street',
      headerBackground:
        '/static/images/buildings/12_435_Hudson/1_Hero/17KCJP_435Hudson_Bldg 01(1).jpg'
    }
  }
];

const buildingsSlider = [
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/1_75_Varick.jpg',
    imgAlt: '75 Varick Street',
    titleImg: '/static/images/logos/logo-75-varick-street-white.svg',
    link: '/buildings/75-varick-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/2_160_Varick.jpg',
    imgAlt: '160 Varick Street',
    titleImg: '/static/images/logos/logo-160-varick-street-white.svg',
    link: '/buildings/160-varick-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/3_345_Hudson.jpg',
    imgAlt: '345 Hudson Street',
    titleImg: '/static/images/logos/logo-345-hudson-street-white.svg',
    link: '/buildings/345-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/4_350_Hudson.jpg',
    imgAlt: '350 Hudson Street',
    titleImg: '/static/images/logos/logo-350-hudson-street-white.svg',
    link: '/buildings/350-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/5_375_Hudson.jpg',
    imgAlt: '375 Hudson Street',
    titleImg: '/static/images/logos/logo-375-hudson-street-white.svg',
    link: '/buildings/375-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/6_155_AoA.jpg',
    imgAlt: '155 Avenue of the Americas',
    titleImg: '/static/images/logos/logo-155-aoa-white.svg',
    link: '/buildings/155-avenue-of-the-americas/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/7_100_AoA.jpg',
    imgAlt: '100 Avenue of the Americas',
    titleImg: '/static/images/logos/logo-100-aoa-white.svg',
    link: '/buildings/100-avenue-of-the-americas/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/8_200_Hudson.jpg',
    imgAlt: '200 Hudson Street',
    titleImg: '/static/images/logos/logo-200-hudson-street-white.svg',
    link: '/buildings/200-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/9_205_Hudson.jpg',
    imgAlt: '205 Hudson Street',
    titleImg: '/static/images/logos/logo-205-hudson-street-white.svg',
    link: '/buildings/205-hudson-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/10_12_16_Vestry.jpg',
    imgAlt: '12-16 Vestry Street',
    titleImg: '/static/images/logos/logo-12-16-vestry-street.png',
    link: '/buildings/12-16-vestry-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/11_225_Varick.jpg',
    imgAlt: '225 Varick Street',
    titleImg: '/static/images/logos/logo-225-varick-street-white.svg',
    link: '/buildings/225-varick-street/'
  },
  {
    imgUrl: '/static/images/buildings/Landing_Carousel/12_435_Hudson.jpg',
    imgAlt: '435 Hudson Street',
    titleImg: '/static/images/logos/logo-435-hudson-street-white.svg',
    link: '/buildings/435-hudson-street/'
  }
];

export { buildingsSlider, buildings };
