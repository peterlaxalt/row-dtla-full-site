import { createGlobalStyle } from 'styled-components';
import { colors } from '../Colors';

const MapStyles = createGlobalStyle`
    .gm-style-iw{
        border: 2px solid ${colors.babyBlue};
        button {
            display: none;
        }
    }
    .gm-style-iw-t{
        &::after{
            z-index: -1;
        }
    }
`;

export default MapStyles;
