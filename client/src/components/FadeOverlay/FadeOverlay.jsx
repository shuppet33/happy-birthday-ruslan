import {SFadeOverlay} from "./FadeOverlay.styles.js";


export function FadeOverlay({children, fadeType}) {
    return(
        <SFadeOverlay $fadeType={fadeType}> {children} </SFadeOverlay>
    )
}