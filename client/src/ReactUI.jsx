import {useState} from "react";
import {SceneOne} from './components/SceneOne.jsx'
import {SceneTwo} from './components/SceneTwo.jsx'
import {SStarted} from "./all.styles.js";
import {FadeOverlay} from "./components/FadeOverlay/FadeOverlay.jsx";





export default function ReactUI() {

    const [started, setStarted] = useState(false)
    const [scenes, setScenes] = useState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false
    })

    if (scenes.one) {
        return (
            <>
                <FadeOverlay fadeType={'in'}/>
                <SceneTwo />
            </>
        )
    }


    return (<>
        {!started && <SStarted>
            <div onClick={() => setStarted(true)} className="button">Начать</div>
        </SStarted>}

        {started && <FadeOverlay fadeType={'in'}/>}
        {started && (
            <>
                <FadeOverlay fadeType={'in'}/>
                <SceneOne state={scenes.one} setState={() => setScenes({
                    one: true,
                    two: false,
                    three: false,
                    four: false,
                    five: false
                })} />
            </>)}
    </>)
}



