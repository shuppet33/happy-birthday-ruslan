import styled from "styled-components";


export const SAnimatedBackground = styled.div`
    width: 1280px;
    height: 800px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${({$backgroundImg}) => $backgroundImg});
    z-index: -1;
    transition: background-image 0.2s ease;
`