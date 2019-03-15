import Head from 'next/head';
import Header from '../includes/Header';

const Layout = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>
        {title
          ? `${title} - Hudson Square Properties`
          : 'Hudson Square Properties'}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <div className="container">{children}</div>
  </React.Fragment>
);

export default Layout;
