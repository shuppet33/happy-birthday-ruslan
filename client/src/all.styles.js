import styled from "styled-components";

export const SStarted = styled.div`
    width: 1280px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0D0C0C;

    box-shadow: 0 4px 4px #0000008f;
    
    .button {
        font-size: 48px;
        color: #fff;
        background-color: #000;
        border-bottom: 10px solid #2D2D2D;
        padding: 42px 105px;
        cursor: pointer;
        box-shadow: 0 0 200px;
        
        &:hover, &:active {
            border-bottom: 0;
            background-color: #9E42AA;
            transition: 1s ease;
        }
    }
`