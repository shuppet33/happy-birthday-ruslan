import {Layout} from "./Layout/Layout.jsx";
import {Dialog} from "./Dialog/Dialog.jsx";
import {TypewriterText} from "./TypewriterText/TypewriterText.jsx";
import {useState} from "react";


export function SceneOne({props, children}) {

    const [wait, setWait] = useState('')
    const timeout = setTimeout(() => setWait(props.text), 700)


    return (<Layout backgroundImg={props.backgroundImg} speed={props.speed}>
        {(props.imgSrc || props.text) &&
            <Dialog imgSrc={props.imgSrc}>
                <TypewriterText text={wait}/>
                {children}
            </Dialog>}
    </Layout>)
}