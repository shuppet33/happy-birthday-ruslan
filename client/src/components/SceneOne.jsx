import {useState} from "react";
import {KeyCatcher} from "./help/KeyCatcher.jsx";
import {FadeOverlay} from "./FadeOverlay/FadeOverlay.jsx";
import {AudioBackground} from "./help/Audio.jsx";
import {Scene} from "./Scene/Scene.jsx";
import {SButtonNext} from "./Dialog/Dialog.styles.js";
import {SStarted} from "../all.styles.js";

const slides = [
    {
    backgroundImg: '../public/scene-1-5.png', imgSrc: '../public/ruslan-sleep-1.png', dialogue: {
        name: 'Руслан', text: 'хрррр... * Спит *',
    }
}, {
    backgroundImg: ['../public/scene-1-gif-1.png', '../public/scene-1-gif-2.png', '../public/scene-1-gif-3.png'],
    imgSrc: '../public/ruslan-sleep-4.png',
    dialogue: {
        name: 'Руслан', text: '...Ммм? Чёрт...',
    },
    speed: 600
}, {
    backgroundImg: ['../public/scene-1-gif-1.png', '../public/scene-1-gif-2.png', '../public/scene-1-gif-3.png'],
    imgSrc: '../public/ruslan-sleep-1.png',
    dialogue: {
        name: 'Руслан', text: 'Будильник... Кто-нибудь выключите, умоляю...',
    },
    speed: 600
}, {
    backgroundImg: ['../public/scene-1-gif-1.png', '../public/scene-1-gif-2.png', '../public/scene-1-gif-3.png'],
    imgSrc: '../public/ruslan-sleep-2.png',
    dialogue: {
        name: 'Руслан', text: 'Выключите...',
    },
    speed: 600
}, {
    backgroundImg: '../public/scene-1-5.png', imgSrc: '../public/ruslan-sleep-4.png', dialogue: {
        name: 'Руслан', text: 'Спасибо.. Пора вставать...в этот чёртов колледж',
    },
},]

export function SceneOne({state, setState}) {

    const [started, setStarted] = useState(false)
    const [slidesIndex, setSlidesIndex] = useState(0)
    const [audioStop, setAudioStop] = useState(false)


    if (state === true) {
        return (<>
            <FadeOverlay fadeType={'out'}/>
            <Scene props={{
                backgroundImg: '../public/scene-1-5.png', imgSrc: '../public/Teeest.png'
            }}>
            </Scene>
        </>)
    }

    if (audioStop) {

        return (<>
                <Scene props={slides[4]}>
                    <SButtonNext onClick={setState} />
                </Scene>
        </>)
    }

    return (<>
            {!started && <SStarted>
                <div onClick={() => setStarted(true)} className="button">Начать</div>
            </SStarted>}
            {started && <FadeOverlay fadeType={'in'}/>}

            {started && slidesIndex === 0 && <Scene props={slides[0]}>
                <SButtonNext onClick={() => setSlidesIndex(prev => prev + 1)} />
            </Scene>}

            {slidesIndex === 1 && <AudioBackground audioSrc={'../public/alarm-mp.mp3'} audioStop={audioStop}>
                <Scene props={slides[1]}>
                    <SButtonNext onClick={() => setSlidesIndex(prev => prev + 1)} />

                    <div onClick={() => setAudioStop(true)} className={'phone'}/>
                </Scene>
            </AudioBackground>}


            {!audioStop && slidesIndex === 2 &&
                <AudioBackground audioSrc={'../public/alarm-mp.mp3'} audioStop={audioStop}>
                    <Scene props={slides[2]}>
                        <SButtonNext onClick={() => setSlidesIndex(prev => prev + 1)} />

                        <div onClick={() => setAudioStop(true)} className={'phone'}/>
                    </Scene>
                </AudioBackground>}

            {!audioStop && slidesIndex === 3 &&
                <AudioBackground audioSrc={'../public/alarm-mp.mp3'} audioStop={audioStop}>
                    <Scene props={slides[3]}>
                        <div onClick={() => setAudioStop(true)} className={'phone'}/>
                    </Scene>
                </AudioBackground>}

    </>)
}