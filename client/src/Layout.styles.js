import styled from "styled-components";
import {keyframes} from "motion";

export const SLayoutWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`

export const SLayout = styled.div`
    width: 1280px;
    height: 800px;
    display: flex;
    align-items: end;
    padding: 10px 10px 10px 10px;

    background-image: url(${({$backgroundImg}) => $backgroundImg});
    background-color: ${({$backgroundColor}) => $backgroundColor};
    background-size: cover;
    background-repeat: no-repeat;
]
`