import {useEffect, useRef} from "react";

export function KeyCatcher({children, onKeyUp}) {
    const divRef = useRef(null)
    useEffect(() => {
        divRef.current.focus()
    }, [])

    return (
        <div className={'keyCatcher'} ref={divRef} tabIndex={0} onKeyUp={onKeyUp}>{children}</div>
    )
}