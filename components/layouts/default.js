import Head from 'next/head';
import Header from '../includes/Header';
import { withRouter } from 'next/router';
import { buildingsSlugMap } from '~/data/buildings';
import { stringifySlug } from '~/helpers/strings';
import pageTitles from '../../data/pageTitles';

const Layout = props => {
  const { pathname, query } = props.router;
  const title = pathname === '/' ? 'home' : pathname.replace('/', '');
  let pageTitle;

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

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Layout);
