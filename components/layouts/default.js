import Head from 'next/head';
import Header from '../includes/Header';

const Layout = ({children, title}) => (
  <React.Fragment>
    <Head>
      <title>{title ? `${title} - Hudson Square Properties` : 'Hudson Square Properties'}</title>
    </Head>
    <Header />
    <div className='container'>
      {children}
    </div>
  </React.Fragment>
);

export default Layout;