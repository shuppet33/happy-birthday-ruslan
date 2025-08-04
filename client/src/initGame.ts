type drawSpriteType = {
    drawWidth?: number,
    drawHeight?: number,
    spriteX?: number,
    spriteY?: number,
    spriteWidth?: number,
    spriteHeight?: number,
    drawX: number,
    drawY: number
}


export default function initGame(ctx) {

    ctx.imageSmoothingEnabled = false;

    const scale = 5

    const [apartment, apartmentObj] = loadSprite('/apartment-default.png', {
        drawX: 0, drawY: 0, drawWidth: 149 * scale, drawHeight: 168 * scale, spriteX: 0, spriteY: 0, spriteWidth: 149, spriteHeight: 168
    })

    const [ruslan, ruslanObj] = loadSprite('/sprite-ruslan-anims-2.png', {
        drawX: 115 * scale,
        drawY: 117 * scale,
        drawWidth: 13 * scale,
        drawHeight: 15 * scale,
        spriteX: 0,
        spriteY: 0,
        spriteWidth: 13,
        spriteHeight: 15
    })


    const anim = {
        // координаты кадров на спрайте
        ['move-down']: {
            1: {sx: 0, sy: 15 },
            2: {sx: 13, sy: 15 },
            3: {sx: 0, sy: 0},
        },
        ['move-up']: {
            1: {sx: 13 * 2, sy: 15 },
            2: {sx: 13 * 3, sy: 15 },
            3: {sx: 13, sy: 0},
        },
        ['move-right']: {
            1: {sx: 13 * 4, sy: 0},
            2: {sx: 13 * 5, sy: 0},
            3: {sx: 13 * 2, sy: 0},
        },
        ['move-left']: {
            1: {sx: 13 * 4, sy: 15},
            2: {sx: 13 * 5, sy: 15},
            3: {sx: 13 * 3, sy: 0},
        }
    }

    let currentFrame = 3 // начальный кадр
    let animTimer = null // таймер


    let ruslanX = ruslanObj.drawX;
    let ruslanY = ruslanObj.drawY;
    const moveSpeed = scale * 2; // шаг в пикселях


    const drawFrame = (frameNumber, nameAnim, prevX?:number, prevY ?:number) => {

        ctx.drawImage(apartment, apartmentObj.spriteX, apartmentObj.spriteY, apartmentObj.spriteWidth, apartmentObj.spriteHeight, apartmentObj.drawX, apartmentObj.drawY, apartmentObj.drawWidth, apartmentObj.drawHeight);

        const {sx, sy} = anim[nameAnim][frameNumber]
        const sw: number = ruslanObj.spriteWidth
        const sh: number = ruslanObj.spriteHeight
        const dw = sw * scale
        const dh = sh * scale


        ctx.drawImage(ruslan, sx, sy, sw, sh, ruslanX, ruslanY, dw, dh)
    }

    ruslan.onload = function () {
        drawFrame(currentFrame, 'move-down')
    }


    document.addEventListener('keydown', (e) => {


        if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key) && !animTimer) {
            animTimer = setInterval(() => {
                const prevX = ruslanX;
                const prevY = ruslanY;

                currentFrame++
                if (currentFrame > 2) currentFrame = 1

                if (e.key === 'ArrowDown') ruslanY += moveSpeed
                if (e.key === 'ArrowUp') ruslanY -= moveSpeed
                if (e.key === 'ArrowRight') ruslanX += moveSpeed
                if (e.key === 'ArrowLeft') ruslanX -= moveSpeed

                const direction = e.key.replace('Arrow', '').toLowerCase();
                drawFrame(currentFrame, `move-${direction}`, prevX, prevY)
            }, 75)
        }
    })

    document.addEventListener('keyup', (e) => {
        if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            clearInterval(animTimer)
            animTimer = null
            currentFrame = 3

            const direction = e.key.replace('Arrow', '').toLowerCase();
            drawFrame(currentFrame, `move-${direction}`)
        }
    })

    // загрузка спрайта
    function loadSprite(src: string, obj: drawSpriteType) {
        const sprite = new Image();
        sprite.src = src;

        const draw = () => {
            const {
                drawX = 0, drawY = 0, drawWidth, drawHeight,
                spriteX, spriteY, spriteWidth, spriteHeight
            } = obj;

            if (spriteX !== undefined && spriteY !== undefined && spriteWidth !== undefined && spriteHeight !== undefined && drawWidth !== undefined && drawHeight !== undefined) {
                ctx.drawImage(sprite, spriteX, spriteY, spriteWidth, spriteHeight, drawX, drawY, drawWidth, drawHeight);
            } else if (drawWidth !== undefined && drawHeight !== undefined) {
                ctx.drawImage(sprite, drawX, drawY, drawWidth, drawHeight);
            } else {
                ctx.drawImage(sprite, drawX, drawY);
            }
        }

            if (sprite.complete) {
                draw()
            } else {
                sprite.onload = draw()
            }

            return [sprite, obj]
        }
}