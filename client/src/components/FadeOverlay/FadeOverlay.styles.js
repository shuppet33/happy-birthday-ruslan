import styled, {css, keyframes} from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`


export const SFadeOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    pointer-events: none;
    z-index: 999;

    opacity: ${({$fadeType}) => ($fadeType === 'in' ? 1 : 0)};
    animation: ${({$fadeType}) => $fadeType === 'in' ? css`${fadeIn} 3s ease forwards` : css`${fadeOut} 3s ease forwards`};
`