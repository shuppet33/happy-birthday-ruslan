import {FadeOverlay} from "./components/FadeOverlay/FadeOverlay.jsx";
import {KeyCatcher} from "./components/help/KeyCatcher.jsx";
import {useState} from "react";
import {SceneOne} from "./components/SceneOne.jsx";
import {SButtonNext} from "./components/Dialog/Dialog.styles.js";
import {SStarted} from "./all.styles.js";
import {AudioBackground} from "./components/help/Audio.jsx";

const slides = [{
    backgroundImg: '../public/scene-1-5.png', imgSrc: '../public/Teeest.png', text: 'хрррр... * Спит *'
}, {
    backgroundImg: ['../public/scene-1-gif-1.png', '../public/scene-1-gif-2.png', '../public/scene-1-gif-3.png'], imgSrc: '../public/Teeest.png', text: '...?', speed: 600
}, {
    backgroundImg: ['../public/scene-1-gif-1.png', '../public/scene-1-gif-2.png', '../public/scene-1-gif-3.png'], imgSrc: '../public/Teeest.png', text: 'Черт.. Будильник... Кто-нибудь выключите, умоляю...', speed: 600
}, {
    backgroundImg: ['../public/scene-1-gif-1.png', '../public/scene-1-gif-2.png', '../public/scene-1-gif-3.png'], imgSrc: '../public/Teeest.png', text: 'Выключите...', speed: 600
},]


export default function ReactUI() {

    const [started, setStarted] = useState(false)
    const [loading, setLoading] = useState({
        sceneOne: {
            fadeOverlay: true, scene: true
        }
    })
    const [slidesIndex, setSlidesIndex] = useState(0)
    const [audioStop, setAudioStop] = useState(false)


    const nextSlide = (e) => {
        setSlidesIndex(prev => prev + 1)
    }

    if (audioStop) {
        return <div>аххахахахах лошара</div>
    }


    return (<>
        <KeyCatcher>
            {!started && <SStarted>
                <div onClick={() => setStarted(true)} className="button">Начать</div>
            </SStarted>}
            {started && <FadeOverlay fadeType={'in'}/>}
            {started && slidesIndex === 0 && <SceneOne props={slides[0]}>
                <SButtonNext onClick={nextSlide}>
                    далеe
                </SButtonNext>
            </SceneOne>}

            {slidesIndex === 1 && <AudioBackground audioSrc={'../public/alarm-mp.mp3'} audioStop={audioStop}>
                <SceneOne props={slides[1]}>
                    <SButtonNext onClick={nextSlide}>
                        далеe
                    </SButtonNext>

                    <div onClick={() => setAudioStop(true)} className={'phone'}/>
                </SceneOne>
            </AudioBackground>}


            {!audioStop && slidesIndex === 2 && <AudioBackground audioSrc={'../public/alarm-mp.mp3'} audioStop={audioStop}>
                <SceneOne props={slides[2]}>
                    <SButtonNext onClick={nextSlide}>
                        далеe
                    </SButtonNext>

                    <div onClick={() => setAudioStop(true)} className={'phone'}/>
                </SceneOne>
            </AudioBackground>}

            {!audioStop && slidesIndex === 3 && <AudioBackground audioSrc={'../public/alarm-mp.mp3'} audioStop={audioStop}>
                <SceneOne props={slides[3]}>
                    <SButtonNext onClick={nextSlide}>
                        далеe
                    </SButtonNext>

                    <div onClick={() => setAudioStop(true)} className={'phone'}/>
                </SceneOne>
            </AudioBackground>}
            
        </KeyCatcher>
    </>)
}



