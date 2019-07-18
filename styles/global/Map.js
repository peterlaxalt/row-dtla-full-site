import { createGlobalStyle } from 'styled-components';
import variables from '../Variables';

const { colors } = variables;

const MapStyles = createGlobalStyle`
    .gm-style-iw{
        border: 2px solid ${colors.babyBlue};
        button {
            display: none !important;
        }
    }
    .gm-style-iw-t{
        &::after{
            z-index: -1;
        }
    }
    .styled-info-window {
        padding: 15px;
        display: flex;
        flex-direction: column;
        max-height: 437px;
        min-height: 380px;
        max-width: 320px;
        font-size: 14px;
        overflow: hidden;
        img {
            width: 100%;
            max-height: 50%;
            object-fit: scale-down;
        }
        h5 {
            margin: 0.5em 0;
            font-size: 18px;
        }
        span {
            margin: 0.5em 0;
        }
        a {
            font-weight: 500;
            margin: 0.5em 0;
            color: ${colors.babyBlue};
            &:hover {
            text-decoration: underline;
            }
        }
        .star-row{
            display: flex;
            flex-direction: row;
            margin: 0.5em 0;
            .stars-rating {
                margin-left: 0.5em;
                svg {
                margin: 0 0.25em;
                }
            }
        }
    }
`;

export default MapStyles;
