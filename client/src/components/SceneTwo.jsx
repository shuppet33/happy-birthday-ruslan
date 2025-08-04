import {useEffect, useRef} from "react";
import {Scene} from './Scene/Scene.jsx'
import {styled} from "styled-components";
import initGame from "../initGame.js";


const slides = [
    {
        backgroundImg: '../public/apartment-ruslan.png',
        backgroundSize: 'contain',
    }
]

const SGameWrapper = styled.div`
    width: 1280px;
    height: 840px;
    display: flex;
    padding: 10px 10px 10px 10px;
    
    background-color: #DED9CD;
`

const SGame = styled.div`
    
`




export function SceneTwo() {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return;

        const ctx = canvas.getContext('2d')
        if (!ctx) return;

        initGame(ctx)

    }, [])


    return (<>
            <SGameWrapper>
                <SGame>
                    <canvas
                        width={745}
                        height={840}
                        ref={canvasRef}
                        style={{
                            border: '1px solid black',
                            display: 'block',
                        }}
                    ></canvas>
                </SGame>
            </SGameWrapper>
        </>)
}



