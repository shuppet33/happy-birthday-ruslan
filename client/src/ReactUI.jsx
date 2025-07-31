import {useState} from "react";
import {KeyCatcher} from "./components/help/KeyCatcher.jsx";
import {SceneOne} from './components/SceneOne.jsx'
import {SceneTwo} from './components/SceneTwo.jsx'




export default function ReactUI() {


    const [scenes, setScenes] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    })

    if (scenes.one) {
        return <SceneTwo />
    }


    return (<>
        <KeyCatcher>
            <SceneOne state={scenes.one} setState={() => setScenes({
                one: true,
                two: false,
                three: false,
                four: false,
                five: false
            })} />
        </KeyCatcher>
    </>)
}



