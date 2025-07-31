import {useEffect, useState} from 'react'
import {Cursor} from "./Cursor.jsx";


const audio2 = new Audio('../../public/speakAudio-2.mp3')
audio2.volume = 0.1


export function TypewriterText({ text }) {
    const [index, setIndex] = useState(0)
    const [isDone, setIsDone] = useState(false)
    const [visibleText, setVisibleText] = useState('')

    useEffect(() => {

        if (index >= text.length) {
            setIsDone(true)
            return;
        }

        const timeout = setTimeout(() => {
            setVisibleText(prev => prev + text[index])
            setIndex(prev => prev + 1)

            audio2.currentTime = 0
            audio2.play()

        }, 80)

        return () => clearTimeout(timeout)
    }, [index, text, isDone])

    return (
        <span>
            {visibleText}
            {!isDone && <Cursor />}
        </span>
    )
}