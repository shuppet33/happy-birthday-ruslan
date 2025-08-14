
export default function Aaa() {
    return <div>AAAAAAA</div>
}

if (e.key === 'e' || e.key === 'E') {
    for (const obj in interactives) {
        if (isColliding(ruslanX, ruslanY, ruslanObj.drawWidth, ruslanObj.drawHeight, interactives[obj].x, interactives[obj].y, interactives[obj].width, interactives[obj].height)) {
            dialogVisible = true
            dialogContent = obj.content
            drawFrame(currentFrame, 'move-down')
            clearTimeout(dialogTimer)

            dialogTimer = setTimeout(() => {
                dialogVisible = false
                dialogContent = null
                drawFrame(currentFrame, 'move-down')
            }, 3000)
        }


    }
}

const interactives = {
    ['холодильник']: {
        x: 5 * scale,
        y: 6 * scale,
        width: 15 * scale,
        height: 26 * scale,
        content: 'писька',
    },
    ['плита']: {
        x: 5 * scale,
        y: 6 * scale,
        width: 15 * scale,
        height: 26 * scale,
        content: 'писька',
    },

}