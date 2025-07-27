import {SDialogBox, SDialogWrapper, SImageDialog} from "./Dialog.styles.js";


export function Dialog({imgSrc, children}) {
    return (
        <SDialogWrapper>
            <SImageDialog $imgSrc={imgSrc} />
            <SDialogBox>
                {children}
            </SDialogBox>
        </SDialogWrapper>
    )
}