import styled from "styled-components";

export const SDialogWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: end;
    gap: 10px;
`

export const SImageDialog = styled.div`
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    
    background-image: url(${({$imgSrc}) => $imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
`

export const SDialogBox = styled.div`
    width: 100%;
    height: 200px;
    max-width: 962px;
    
    position: relative;
    
    background-color: rgba(0, 0, 0, 0.8);
    border: 10px solid #100f0f;
    color: #efefef;
    padding: 20px;
    font-family: "Tiny5", sans-serif;
    font-size: 32px;
    box-sizing: border-box;
    backdrop-filter: blur(4px);
    flex-shrink: 0;
    word-wrap: break-word;
`

export const SButtonNext = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 20px;
    border: 10px solid black;
    cursor: pointer;
`

