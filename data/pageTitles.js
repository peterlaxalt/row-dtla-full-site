const title = 'Hudson Square Properties';
const pageTitle = page => `${title} - ${page}`;

const pageTitles = {
  home: title,
  availabilities: pageTitle('Office Space Availabilities'),
  buildings: pageTitle('Prime Real Estate Buildings'),
  building: building => `${building} - ${title}`,
  contact: pageTitle('Contact'),
  listing: listing => `${listing} - ${title}`,
  map: pageTitle('Neighborhood Map'),
  'neighborhood-map': pageTitle('Location'),
  news: pageTitle('Past and Present News Articles'),
  newsArticle: article => `${article} - ${title}`,
  retail: pageTitle('Retail'),
  story: pageTitle('The Joint Venture Story')
};

export default pageTitles;
