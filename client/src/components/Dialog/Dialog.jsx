import {SDialogBox, SDialogBoxWrapper, SDialogWrapper, SImageDialog} from "./Dialog.styles.js";


export function Dialog({imgSrc, children}) {
    return (
        <SDialogWrapper>
            <SImageDialog $imgSrc={imgSrc} />
            <SDialogBoxWrapper>
                <SDialogBox>
                    {children}
                </SDialogBox>
            </SDialogBoxWrapper>
        </SDialogWrapper>
    )
}