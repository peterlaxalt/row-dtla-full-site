const buildings = [
  {
    title: '75 Varick Street',
    slug: '75-varick-street',
    yearConstructed: '1929',
    numFloors: '17',
    totalBuildingArea: 1160297,
    floorSizes: '40,000 – 80,000 SF',
    about:
      '75 Varick Street, also known as One Hudson Square, is one of the premier locations in Hudson Square. At 17-stories, this landmark building designed by Ely Jacques Kahn and completed in 1929, offers prime views of downtown, the Hudson River and along Canal Street. The 1 million-square-foot building offers modern office spaces and large floor plates sought after by TAMI tenants. Floors range from 80,000 square feet in the building’s base to 40,000 square feet at the top. Slab-to-slab heights are 12 feet-1 inches on most office floors. A new building lobby designed by the architectural firm A+I, is home to Blue Bottle Coffee Cafe and rotating art exhibitions. Notable tenants include Horizon Media, Harry’s Razors and Intent Media. Construction of a rooftop amenity, open to tenants, is currently underway with completion anticipated in 2019.',
    CeilingHeights: [
      'Basement: 15′-1″ – 18′-4″',
      'Floors 2-16: 12′-4″',
      'Floor 17: 12′-6″'
    ],
    header: {
      headerLogo: '/static/images/logos/logo-75-varick-street-white.svg',
      headerLogoAlt: '75 Varick Street',
      headerBackground:
        '/static/images/buildings/1_75_Varick/1_Hero/75_Varick_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '160 Varick Street',
    slug: '160-varick-street',
    yearConstructed: '1927-1928',
    numFloors: '12',
    totalBuildingArea: 343020,
    floorSizes: '3,388 – 29,096 SF',
    CeilingHeights: ['12′-4″'],
    aboout:
      '160 Varick Street is conveniently situated in the heart of Hudson Square, between Charlton and Vandam Streets and close to the no.1, A, C and E subway stations. The building has an industrial history, as evidenced by its structure, large windows and high, loft-like ceilings. A newly renovated lobby designed by Studios Architecture, opened in the fall of 2018 featuring soft seating and rotating art installations. 160 Varick Street is home to WeWork and New York Public Radio.',
    header: {
      headerLogo: '/static/images/logos/logo-160-varick-street-white.svg',
      headerLogoAlt: '160 Varick Street',
      headerBackground:
        '/static/images/buildings/2_160_Varick/1_Hero/160_Varick_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '345 Hudson Street',
    slug: '345-hudson-street',
    yearConstructed: '1931',
    numFloors: '17',
    totalBuildingArea: 978795,
    floorSizes: '47,558 – 62,513 SF',
    CeilingHeights: ['Floors 2-16: 12′-4″', 'Floor 17: 12′-6″'],
    about:
      '345 Hudson Street occupies the entire block between King and Charlton Streets, with over 980,000 square feet across 17 stories. The property is conveniently located a short walk from the no.1 Houston Street subway station and Hudson River Park in the heart of Hudson Square. With floors averaging 60,000 square feet, the building creates a welcoming environment for media and communication tenants. Notable tenants include Viacom, CBS, Google, Hines & Daniel Wellington.',
    header: {
      headerLogo: '/static/images/logos/logo-345-hudson-street-white.svg',
      headerLogoAlt: '345 Hudson Street',
      headerBackground:
        '/static/images/buildings/3_345_Hudson/1_Hero/345_Hudson_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '350 Hudson Street',
    slug: '350-hudson-street',
    yearConstructed: '1927',
    numFloors: '9',
    totalBuildingArea: 324109,
    floorSizes: '38,950 – 39,176 SF',
    CeilingHeights: ['12′-0″ typical'],
    about:
      '350 Hudson Street occupies the entire block between Charlton and King Streets, with a total building size over 324,000 square feet. Tenants can enjoy a modern office environment coupled with the charm found only in pre-war buildings. A recently renovated lobby welcomes tenants and guests, while the 12-foot slab-to-slab height creates impressive office floors. An added ninth floor provides a spectacular terrace enjoyed by current tenant, Medidata. Popular “grab and go” retailers Dig Inn, Pret-a-Manger and Hale and Hearty Soups are on the ground floor.',
    header: {
      headerLogo: '/static/images/logos/logo-350-hudson-street-white.svg',
      headerLogoAlt: '350 Hudson Street',
      headerBackground:
        '/static/images/buildings/4_350_Hudson/1_Hero/350_Hudson_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '375 Hudson Street',
    slug: '375-hudson-street',
    yearConstructed: '1987',
    numFloors: '18 + Penthouse',
    totalBuildingArea: 1123659,
    floorSizes: '34,000 – 71,000 SF',
    CeilingHeights: ['11′-6″ typical'],
    about:
      '375 Hudson Street, originally known as the Saatchi & Saatchi building, was completed in 1987, designed in a collaborative effort between Emery Roth & Sons, Lee Harris Pomeroy Associates, and Skidmore, Owings and Merrill. The 18-story building is over 1.12 million square feet and features rotating lobby art exhibitions. In 2010, after a top-to-bottom “green” retro-fit, the building became the first existing office building in New York City to achieve LEED Gold certification for sustainability and energy efficiency. 375 Hudson Street is the downtown headquarters of media conglomerate Publicis and Turner Construction Company.',
    header: {
      headerLogo: '/static/images/logos/logo-375-hudson-street-white.svg',
      headerLogoAlt: '375 Hudson Street',
      headerBackground:
        '/static/images/buildings/5_375_Hudson/1_Hero/375_Hudson_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '155 AoA Street',
    slug: '155-avenue-of-the-americas',
    yearConstructed: '1929',
    numFloors: '15',
    totalBuildingArea: 223563,
    floorSizes: '12,500 – 15,300 SF',
    CeilingHeights: ['11′-5″ typical'],
    about:
      'Built in 1929, 155 Avenue of the Americas sits directly across from the newly re-opened Spring Street Park in Soho and is adjacent to the Spring Street station of the A, C and E subway lines. With floorplates of approximately 12,500 – 15,300 square feet, 155 Avenue of the Americas provides a boutique offering to smaller tenants looking for a full floor presence, especially desirable for creative and technology industries. A newly renovated building lobby designed by the architectural firm A+I, features rotating art exhibition, and a roof deck amenity will be open to all tenants in 2019. Soho favorite Café Altro Paradiso and Ducati occupy the ground level retail spaces. Office tenants include Accenture, New York University and Downtown Music Publishing.',
    header: {
      headerLogo: '/static/images/logos/logo-155-aoa-white.svg',
      headerLogoAlt: '155 Avenue of the Americas',
      headerBackground:
        '/static/images/buildings/6_155_AoA/1_Hero/155_AoA_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '100 AoA Street',
    slug: '100-avenue-of-the-americas',
    yearConstructed: '1930',
    numFloors: '17',
    totalBuildingArea: 378130,
    floorSizes: '17,529 – 25,519 SF',
    CeilingHeights: ['11′-6″ typical'],
    about:
      'Nestled on the northern border of Tribeca and well within walking distance of the no.1, A, C, and E subway lines at Canal Street, 200 Hudson Street offers tenants a premier office location. The total building area spans 380,971 square feet across 12 floors. Upper floors offer spectacular views of both downtown and the Hudson River. Individual floor plates range from 32,140 to 32,243 square feet, while the slab-to- slab heights are 11 feet-5 inches. Prominent tenants of the building include French media conglomerate Havas.',
    header: {
      headerLogo: '/static/images/logos/logo-100-aoa-white.svg',
      headerLogoAlt: '100 Avenue of the Americas',
      headerBackground:
        '/static/images/buildings/7_100_AoA/1_Hero/100_AoA_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '200 Hudson Street',
    slug: '200-hudson-street',
    yearConstructed: '1926',
    numFloors: '12',
    totalBuildingArea: 380971,
    floorSizes: '32,140 – 32,243 SF',
    CeilingHeights: ['11′-5″ typical'],
    about:
      'Nestled on the northern border of Tribeca and well within walking distance of the no.1, A, C, and E subway lines at Canal Street, 200 Hudson Street offers tenants a premier office location. The total building area spans 380,971 square feet across 12 floors. Upper floors offer spectacular views of both downtown and the Hudson River. Individual floor plates range from 32,140 to 32,243 square feet, while the slab-to- slab heights are 11 feet-5 inches. Prominent tenants of the building include French media conglomerate Havas.',
    header: {
      headerLogo: '/static/images/logos/logo-200-hudson-street-white.svg',
      headerLogoAlt: '200 Hudson Street',
      headerBackground:
        '/static/images/buildings/8_200_Hudson/1_Hero/200_Hudson_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '205 Hudson Street',
    slug: '205-hudson-street',
    yearConstructed: '1928',
    numFloors: '12',
    totalBuildingArea: 395108,
    floorSizes: '31,201 – 31,580 SF',
    CeilingHeights: ['13′-0″'],
    about:
      '205 Hudson Street’s prominent location within the northern portion of Tribeca promises one of Manhattan’s most exciting office environments. Rising 12 stories, 205 Hudson is located at the intersection of Canal and Hudson Streets, well within walking distance of the no.1, A, C, and E subway lines. 205 Hudson’s floor plates offer between 31,201 and 31,580 square feet per floor, while ceiling heights measure 13 feet. Long, wide, and newly replaced windows afford abundant natural light, as well as stunning views of Midtown Manhattan and landmarked townhomes to the north. Notable tenants include WeWork and event space Tribeca Rooftop.',
    header: {
      headerLogo: '/static/images/logos/logo-205-hudson-street-white.svg',
      headerLogoAlt: '205 Hudson Street',
      headerBackground:
        '/static/images/buildings/9_205_Hudson/1_Hero/205_Hudson_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '12-16 Vestry Street',
    slug: '12-16-vestry-street',
    yearConstructed: '1882',
    numFloors: '7',
    totalBuildingArea: 59527,
    floorSizes: '8,196 – 8,214 SF',
    CeilingHeights: ['12′-0″ typical'],
    about:
      'Ideal for smaller businesses preferring a full floor presence, 12-16 Vestry is conveniently located just below Canal Street on a charming cobblestone section of Vestry Street in Tribeca. 12-16 Vestry’s seven stories offer floorplates of approximately 8,200 square feet. Twelve-foot ceiling heights, boutique floor plates, and above-standard 140 lb. per square foot floor load capacities create a truly unique environment in a market dominated by larger assets.',
    header: {
      headerLogo: '/static/images/logos/logo-12-16-vestry-street.png',
      headerLogoAlt: '12-16 Vestry Street',
      headerBackground:
        '/static/images/buildings/10_12_16_Vestry/1_Hero/12_16_Vestry_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '225 Varick Street',
    slug: '225-varick-street',
    yearConstructed: '1926',
    numFloors: '12',
    totalBuildingArea: 376089,
    floorSizes: '30,243 – 31,639 SF',
    CeilingHeights: ['13′-0″ typical'],
    about:
      '225 Varick Street, situated on the southern edge of the West Village, is located between West Houston and Clarkson Streets. Conveniently located across from the no. 1 subway entrance at Houston Street, 225 Varick’s loft-like office spaces are ideal for TAMI tenants with expansive open views up Seventh Avenue and towards the Hudson River. A new building lobby, designed by the architectural firm A+I, includes rotating art exhibitions. Tenants of the building include Shake Shack’s corporate offices and innovation kitchen as well as Squarespace.',
    header: {
      headerLogo: '/static/images/logos/logo-225-varick-street-white.svg',
      headerLogoAlt: '225 Varick Street',
      headerBackground:
        '/static/images/buildings/11_225_Varick/1_Hero/225_Varick_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
  },
  {
    title: '435 Hudson Street',
    slug: '435-hudson-street',
    yearConstructed: '1931',
    numFloors: '9',
    totalBuildingArea: 287586,
    floorSizes: '30,755 – 31,579 SF',
    CeilingHeights: ['14′-5″ – 16′-0″'],
    about:
      '435 Hudson Street, located in the West Village between Morton and Leroy Streets, provides tenants with one of Manhattan’s most unique office environments. Slab-to-slab heights range from 14 feet-5 inches to over 16 feet at the top of the building, creating a loft-style office environment sought after by a wide variety of tenants. Lower views overlook landmarked West Village townhomes, while the upper floors provide views north, west towards the Hudson River or east towards Soho. A building repositioning will provide tenants with a renovated lobby and roof deck amenity in 2019, both designed by the architectural firm A+I. Notable tenants include @Radical Media and Adidas.',
    header: {
      headerLogo: '/static/images/logos/logo-435-hudson-street-white.svg',
      headerLogoAlt: '435 Hudson Street',
      headerBackground:
        '/static/images/buildings/12_435_Hudson/1_Hero/435_Hudson_Hero.jpg'
    },
    sliderArray: [{ imgUrl: '', imgAlt: '' }]
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
