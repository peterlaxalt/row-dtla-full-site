import Head from 'next/head';
import Header from '../includes/Header';
import { withRouter } from 'next/router';
import { buildingsSlugMap } from '~/data/buildings';
import { stringifySlug } from '~/helpers/strings';
import { pageDescriptions, pageTitles } from '../../data/pageTitles';

const Layout = props => {
  const { pathname, query } = props.router;
  const title = pathname === '/' ? 'home' : pathname.replace('/', '');

  let pageDescription, pageTitle;

  switch (title) {
    case 'building': {
      let buildingTitle = buildingsSlugMap[query.slug].title;
      pageTitle = pageTitles.building(buildingTitle);
      break;
    }
    case 'listing': {
      let listingTitle = stringifySlug(query.suite_floor_slug);
      pageTitle = pageTitles.listing(listingTitle);
      break;
    }
    case 'newsarticle': {
      let articleTitle = query.slug ? stringifySlug(query.slug) : query.title;
      pageTitle = pageTitles.newsArticle(articleTitle);
      break;
    }
    default: {
      pageTitle = pageTitles[title];
    }
  }

  pageDescription = pageDescriptions[title] || 'Hudson Square Properties';

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Layout);
