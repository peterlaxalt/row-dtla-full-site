import ClickSlider from '../components/ClickSlider';
import ScrollUp from '../components/ScrollUp';
import BrandSpinner from '../components/BrandSpinner';
import { buildingsSlider } from '../data/buildings';
import Context from '../config/Context';

const Buildings = () => (
  <Context.Consumer>
    {context => (
      <div>
        <ClickSlider
          imgArray={buildingsSlider}
          autoPlay={true}
          windowWidth={context.state.windowDimensions.width}
        />
        <BrandSpinner />
        <ScrollUp />
      </div>
    )}
  </Context.Consumer>
);

export default Buildings;
