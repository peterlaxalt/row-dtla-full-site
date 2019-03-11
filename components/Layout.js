import Header from './Header';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  margin-top: 60px;
`;

const Layout = ({ children }) => (
  <LayoutDiv>
    <Header />
    {children}
  </LayoutDiv>
);

export default Layout;
