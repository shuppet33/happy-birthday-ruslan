import {useEffect, useState} from "react";
import {SLayout, SLayoutWrapper} from "./Layout.styles.js";



export function Layout({children, backgroundImg, backgroundColor, speed = 500}) {

    const [frameIndex, setFrameIndex] = useState(0);

    const isArray = Array.isArray(backgroundImg);

    const currentFrame = isArray ? backgroundImg[frameIndex] : backgroundImg;


    useEffect(() => {
        if (!isArray || backgroundImg.length <= 1) return

        const timer = setInterval(() => {
            setFrameIndex(prev => (prev + 1) % backgroundImg.length)

            return () => clearInterval(timer)

        }, speed)
    }, [backgroundImg, speed])


    return(
        <SLayoutWrapper className={'backgroundBlack'}>
            <SLayout $backgroundImg={currentFrame} $backgroundColor={backgroundColor}>
                {children}
            </SLayout>
        </SLayoutWrapper>
    )
}