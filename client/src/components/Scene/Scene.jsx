import {useState} from "react";
import {Layout} from "../Layout/Layout.jsx";
import {Dialog} from "../Dialog/Dialog.jsx";
import {TypewriterText} from "../TypewriterText/TypewriterText.jsx";



export function Scene({props, children}) {

    const [wait, setWait] = useState('')
    const timeout = setTimeout(() => setWait(props.dialogue.text), 700)


    return (<Layout backgroundImg={props.backgroundImg} speed={props.speed}>
        {(props.imgSrc || props.text) &&
            <Dialog imgSrc={props.imgSrc}>
                <div>{props.dialogue.name}:</div>
                <div>{wait && <TypewriterText text={wait}/>}</div>
                {children}
            </Dialog>}
    </Layout>)
}