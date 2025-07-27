import {useEffect, useRef} from "react";


export function AudioBackground({audioStop, audioSrc, children}) {

    let audioRef = useRef(null)

    useEffect(() => {
        if (!audioSrc) return

        const audio = new Audio(audioSrc)
        audio.volume = 0.1
        audio.loop = true
        audio.play()

        audioRef.current = audio

        return () => {
            audio.pause()
            audio.currentTime = 0
        }
    }, [audioSrc])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (audioStop) {
            audio.pause()
        } else {
            audio.currentTime = 0
            audio.play()
        }
    }, [audioStop])

    return <>{children}</>

}