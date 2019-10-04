const title = 'Hudson Square Properties';
const pageTitle = page => `${title} | ${page}`;

const pageTitles = {
  home: title,
  availabilities: pageTitle('Office Space Availabilities'),
  buildings: pageTitle('Prime Real Estate Buildings'),
  building: building => `${building} - ${title}`,
  contact: pageTitle('Contact'),
  listing: listing => `${listing} - ${title}`,
  neighborhood: pageTitle('Location'),
  'neighborhood-map': pageTitle('Neighborhood Map'),
  news: pageTitle('Past and Present News Articles'),
  newsArticle: article => `${article} - ${title}`,
  retail: pageTitle('Retail'),
  story: pageTitle('The Joint Venture Story')
};

const pageDescriptions = {
  home:
    "A detailed map of Hudson Square Properties' building portfolio and the surrounding neighborhood gems within walking distance.",
  availabilities:
    'The current listings available at Hudson Square Properties. Find out more about retail and office spaces.',
  buildings:
    'Discover the prime real estate building portfolio of Hudson Square Properties and the tenants that reside there from a multitude of industries.',
  building:
    'Discover the prime real estate building portfolio of Hudson Square Properties and the tenants that reside there from a multitude of industries.',
  contact: 'Contact the leasing agents for Hudson Square Properties or inquire about retail space.',
  listing: 'Hudson Square Properties Listing',
  neighborhood:
    'Hudson Square has transformed from a Printing District to housing an array of high-profile companies. Join us as the area becomes a vibrant destination.',
  'neighborhood-map':
    "A detailed map of Hudson Square Properties' building portfolio and the surrounding neighborhood gems within walking distance.",
  news:
    'Watch and learn from past and present news articles for Hudson Square Properties, the neighborhood and its current tenants.',
  newsArticle: 'Hudson Square Properties News Article',
  retail:
    'Hudson Square is set to be the next big New York City focal point with Hudson Square Properties offering an active retail leasing environment.',
  story:
    'Hudson Square Properties is a joint venture of Trinity Church Wall Street and Norges Bank Real Estate Management with Hines, the operating partner.'
};

export { pageDescriptions, pageTitles };
