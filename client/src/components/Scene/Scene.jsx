import {useState} from "react";
import {Layout} from "../Layout/Layout.jsx";
import {Dialog} from "../Dialog/Dialog.jsx";
import {TypewriterText} from "../TypewriterText/TypewriterText.jsx";


export function Scene({props, children}) {

    const [wait, setWait] = useState('')
    const [isDoneText, setIsDoneText] = useState(false)

    const timeout = setTimeout(() => setWait(props.dialogue.text), 900)

    if (isDoneText) {
        clearTimeout(timeout)
    }


    return (<Layout backgroundSize={props.backgroundSize} backgroundImg={props.backgroundImg} speed={props.speed}>
        {(props.imgSrc || props.text) && <Dialog imgSrc={props.imgSrc}>

            <div>{props.dialogue.name}:</div>

            <div>{wait && <TypewriterText isDone={isDoneText} setIsDone={() => setTimeout(() => setIsDoneText(true), 500)} text={wait}/>}</div>

            {isDoneText && children}
        </Dialog>}
    </Layout>)
}