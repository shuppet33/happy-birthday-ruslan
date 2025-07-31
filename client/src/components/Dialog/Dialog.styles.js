import styled, {keyframes} from "styled-components";

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
export const SDialogBoxWrapper = styled.div`
    flex-shrink: 0;
    width: 100%;
`


export const SDialogBox = styled.div`
    width: 100%;
    height: 210px;
    max-width: 970px;
    
    position: relative;
    
    background-color: rgba(0, 0, 0, 0.8);
    border: 10px solid #100f0f;
    color: #efefef;
    padding: 20px;
    font-size: 32px;
    box-sizing: border-box;
    backdrop-filter: blur(4px);
    flex-shrink: 0;
    word-wrap: break-word;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const levitate = keyframes`
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-10px);
    }
`;
export const SButtonNext = styled.div`
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 50px;
    height: 35px;
    cursor: pointer;
    background-image: url('./arrow-next.svg');
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    animation:
            ${fadeIn} 0.5s ease forwards,      
            ${levitate} 2s ease-in-out infinite;
`

