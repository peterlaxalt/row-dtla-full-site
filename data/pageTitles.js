const title = 'Hudson Square Properties';
const pageTitle = page => `${title} - ${page}`;

const pageTitles = {
  home: title,
  map: pageTitle('Neighborhood Map'),
  buildings: pageTitle('Prime Real Estate Buildings'),
  building: building => `${building} - ${title}`,
  retail: pageTitle('Retail'),
  'neighborhood-map': pageTitle('Location'),
  story: pageTitle('The Joint Venture Story'),
  availabilities: pageTitle('Office Space Availabilities'),
  contact: pageTitle('Contact'),
  news: pageTitle('Past and Present News Articles'),
  newsArticle: article => `${article} - ${title}`
};

export default pageTitles;
