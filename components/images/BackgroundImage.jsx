import styled from 'styled-components';

const BackgroundImage = styled.div`
  opacity: 0;
  transition: 1.5s opacity ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url("${props.srcPath}_2000.jpg")`};
  &.active {
    opacity: 1;
  }
`;

export default BackgroundImage;
