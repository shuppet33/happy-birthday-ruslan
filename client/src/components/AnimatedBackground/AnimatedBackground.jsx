import {SAnimatedBackground} from "./AnimatedBackground.styles.js";
import {useState} from "react";


export function AnimatedBackground({frames, speed}) {

    const [frameIndex, useFrameIndex] = useState(0);

    const isArray = Array.isArray(frames);

    const currentFrame = isArray ? frames[frameIndex] : frames;





    return <SAnimatedBackground $backgroundImg={frames[frameIndex]} />
}