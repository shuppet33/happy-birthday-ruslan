const scale = 5
const walls = [
    {x: 0, y: 30, width: 149 * scale, height: 3 * scale},
    {x: 0, y: 30, width: 3 * scale, height: 174 * scale},
    {x: 0, y: (171 * scale) + 30, width: 174 * scale, height: 3 * scale},
    {x: 146 * scale, y: 30, width: 3 * scale, height: 174 * scale},
    {x: 0, y: (75 * scale) + 30, width: 92 * scale, height: 3 * scale},
    {x: 89 * scale, y: (75 * scale) + 30, width: 3 * scale, height: 24 * scale},
    {x: 89 * scale, y: (119 * scale) + 30, width: 60 * scale, height: 3 * scale},
    {x: 113 * scale, y: (52 * scale) + 30, width: 40 * scale, height: 3 * scale},
    {x: 90 * scale, y: 30, width: 3 * scale, height: 55 * scale},
    {x: 100 * scale, y: (11 * scale) + 30, width: 8 * scale, height: 14 * scale},
    {x: 143 * scale, y: (37 * scale) + 30, width: 2 * scale, height: 13 * scale},
    {x: 138 * scale, y: (20 * scale) + 30, width: 4 * scale, height: 10 * scale},
    {x: 130 * scale, y: (49 * scale) + 30, width: 15 * scale, height: 2 * scale},
    {x: 90 * scale, y: (11 * scale) + 30, width: 149 * scale, height: 3 * scale},
    {x: 0, y: (16 * scale) + 30, width: 90 * scale, height: 3 * scale},
    {x: 5 * scale, y: (56 * scale) + 30, width: 16 * scale, height: 2 * scale},
    {x: 25 * scale, y: (57 * scale) + 30, width: 25 * scale, height: 16 * scale},
    {x: 73 * scale, y: (42 * scale) + 30, width: 15 * scale, height: 11 * scale},
    {x: 0, y: (92 * scale) + 30, width: 73 * scale, height: 3 * scale},
    {x: 73 * scale, y: (83 * scale) + 30, width: 16 * scale, height: 3 * scale},
    {x: 53 * scale, y: (159 * scale) + 30, width: 15 * scale, height: 10 * scale},
    {x: 11 * scale, y: (159 * scale) + 30, width: 15 * scale, height: 10 * scale},
    {x: 27 * scale, y: (162 * scale) + 30, width: 25 * scale, height: 7 * scale},
    {x: 13 * scale, y: (125 * scale) + 30, width: 10 * scale, height: 29 * scale},
    {x: 99 * scale, y: (141 * scale) + 30, width: 45 * scale, height: 27 * scale},
    {x: 113 * scale, y: (109 * scale) + 30, width: 31 * scale, height: 8 * scale},
];


const anim = {
    // координаты кадров на спрайте
    ['move-down']: {
        1: {sx: 0, sy: 15}, 2: {sx: 13, sy: 15}, 3: {sx: 0, sy: 0},
    }, ['move-up']: {
        1: {sx: 13 * 2, sy: 15}, 2: {sx: 13 * 3, sy: 15}, 3: {sx: 13, sy: 0},
    }, ['move-right']: {
        1: {sx: 13 * 4, sy: 0}, 2: {sx: 13 * 5, sy: 0}, 3: {sx: 13 * 2, sy: 0},
    }, ['move-left']: {
        1: {sx: 13 * 4, sy: 15}, 2: {sx: 13 * 5, sy: 15}, 3: {sx: 13 * 3, sy: 0},
    }
}
let dialogVisible = false
let dialogContent = null
let dialogTimer = null
const interactives = [
    {
        name: 'туалет',
        x: 100 * scale,
        y: (27 * scale) + 30,
        width: 3 * scale,
        height: 3 * scale,
        content: 'туалет',
        state: false
    },
    {
        name: 'душ',
        x: 140 * scale,
        y: (47 * scale) + 30,
        width: 3 * scale,
        height: 3 * scale,
        content: 'душ',
        state: false
    },
    {
        name: 'умывальник',
        x: 135 * scale,
        y: (14 * scale) + 30,
        width: 3 * scale,
        height: 7 * scale,
        content: 'умывальник',
        state: false
    },
    {
        name: 'шкаф',
        x: 59 * scale,
        y: (156 * scale) + 30,
        width: 3 * scale,
        height: 3 * scale,
        content: 'шкаф',
        state: false
    },
    {
        name: 'гладильная доска',
        x: 23 * scale,
        y: (125 * scale) + 30,
        width: 3 * scale,
        height: 29 * scale,
        content: 'гладильная доска',
        state: false
    },
    {
        name: 'холодильник',
        x: 6 * scale,
        y: (20 * scale) + 30,
        width: 13 * scale,
        height: 3 * scale,
        content: 'холодильник',
        state: false
    },
    {
        name: 'микроволновка',
        x: 26 * scale,
        y: (20 * scale) + 30,
        width: 13 * scale,
        height: 3 * scale,
        content: 'микроволновка',
        state: false
    },
    {
        name: 'чашка с водой',
        x: 35 * scale,
        y: (54 * scale) + 30,
        width: 18 * scale,
        height: 16 * scale,
        content: 'чашка с водой',
        state: false
    },
]
let interactivesStep = 0
const correctOrder = [
    'туалет',
    'душ',
    'умывальник',
    'шкаф',
    'гладильная доска',
    'холодильник',
    'микроволновка',
    'чашка с водой',
];



function initGameSceneTwo(ctx, img) {

    ctx.imageSmoothingEnabled = false;

    const [
        apartment,
        ruslan,
        dialogWindow,
        dialogWindowCross,
        dialogWindowCheck,
        dialogToilet,
        dialogShower,
        dialogToothbrush,
        dialogCloth,
        dialogIroningboard,
        dialogFridge,
        dialogMicrowave,
        dialogCup] = img
    const apartmentObj= {
        drawX: 0,
        drawY: 30,
        drawWidth: 149 * scale,
        drawHeight: 174 * scale,
        spriteX: 0,
        spriteY: 0,
        spriteWidth: 149,
        spriteHeight: 174,
    };
    const ruslanObj = {
        drawX: 115 * scale,
        drawY: 129 * scale,
        drawWidth: 13 * scale,
        drawHeight: 15 * scale,
        spriteX: 0,
        spriteY: 0,
        spriteWidth: 13,
        spriteHeight: 15
    };
    let currentFrame = 3 // начальный кадр
    let animTimer = null // таймер
    let ruslanX = ruslanObj.drawX;
    let ruslanY = ruslanObj.drawY;
    const moveSpeed = scale * 2; // шаг в пикселях



    drawFrame(currentFrame, 'move-down');



    function drawFrame(frameNumber, nameAnim) {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.drawImage(apartment, apartmentObj.spriteX, apartmentObj.spriteY, apartmentObj.spriteWidth, apartmentObj.spriteHeight, apartmentObj.drawX, apartmentObj.drawY, apartmentObj.drawWidth, apartmentObj.drawHeight);

        const {sx, sy} = anim[nameAnim][frameNumber];
        const sw = ruslanObj.spriteWidth;
        const sh = ruslanObj.spriteHeight;
        const dw = sw * scale;
        const dh = sh * scale;

        ctx.drawImage(ruslan, sx, sy, sw, sh, ruslanX, ruslanY, dw, dh);


        if (dialogVisible) {
            ctx.drawImage(dialogWindow, ruslanX - dw / 2, ruslanY - dh - 30)

            if (dialogContent) {
                ctx.drawImage(dialogWindowCheck, ruslanX - dw / 2 + 5, ruslanY - dh - 19, 25 * scale, 13 * scale)
            } else {
                ctx.drawImage(dialogWindowCross, ruslanX - dw / 2 + 5, ruslanY - dh - 19, 25 * scale, 13 * scale)
            }
        }
    }



    document.addEventListener('keydown', (e) => {

        if (e.key === 'b' || e.key === 'B') {
            dbugger(ctx)
            return
        }

        if (e.key === 'e' || e.key === 'E') {
            for (const obj of interactives) {
                if (isColliding(ruslanX, ruslanY, ruslanObj.drawWidth, ruslanObj.drawHeight, obj.x, obj.y, obj.width, obj.height)) {


                    if (interactivesStep === correctOrder.length) {
                        break;
                    }

                    if (obj.name === correctOrder[interactivesStep]) {
                        dialogContent = true;
                        obj.state = true
                        interactivesStep++
                    }

                    dialogVisible = true
                    drawFrame(currentFrame, 'move-down')
                    clearTimeout(dialogTimer)



                    dialogTimer = setTimeout(() => {
                        dialogVisible = false
                        dialogContent = false
                        drawFrame(currentFrame, 'move-down')
                    }, 2000)
                    break;
                }

            }
        }

        if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key) && !animTimer) {
            animTimer = setInterval(() => {
                currentFrame++
                if (currentFrame > 2) currentFrame = 1

                let nextX = ruslanX;
                let nextY = ruslanY;

                if (e.key === 'ArrowDown') nextY += moveSpeed;
                if (e.key === 'ArrowUp') nextY -= moveSpeed;
                if (e.key === 'ArrowRight') nextX += moveSpeed;
                if (e.key === 'ArrowLeft') nextX -= moveSpeed;

                if (!isBlocked(nextX, nextY, ruslanObj.drawWidth, ruslanObj.drawHeight)) {
                    ruslanX = nextX;
                    ruslanY = nextY;
                }

                const direction = e.key.replace('Arrow', '').toLowerCase();
                drawFrame(currentFrame, `move-${direction}`)
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



}




export default async function initGameSceneTwoContext(ctx) {
    const [
        apartment,
        ruslan,
        dialogWindow,

        dialogWindowCross,
        dialogWindowCheck,

        dialogToilet,
        dialogShower,
        dialogToothbrush,
        dialogCloth,
        dialogIroningboard,
        dialogFridge,
        dialogMicrowave,
        dialogCup

    ] = await Promise.all([
        loadImage('/apartment-default.png'),
        loadImage('/sprite-ruslan-anims-2.png'),
        loadImage('./dialog-window.png'),
        loadImage('./dialog-window-cross.png'),
        loadImage('./dialog-window-check.png'),

        loadImage('./dialog-window-toilet.png'),
        loadImage('./dialog-window-shower.png'),
        loadImage('./dialog-window-toothbrush.png'),
        loadImage('./dialog-window-cloth.png'),
        loadImage('./dialog-window-ironingboard.png'),
        loadImage('./dialog-window-fridge.png'),
        loadImage('./dialog-window-microwave.png'),
        loadImage('./dialog-window-cup.png'),


    ]);

    initGameSceneTwo(ctx, [apartment, ruslan, dialogWindow, dialogWindowCross, dialogWindowCheck]);
}

function loadImage(src) {
    return new Promise(resolve => {
        const img = new Image()
        img.src = src
        if (img.complete) {
            resolve(img)
        } else {
            img.onload = () => resolve(img)
        }
    })
}

function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
}

function isBlocked(x, y, width, height) {
    for (const wall of walls) {
        if (isColliding(x, y, width, height, wall.x, wall.y, wall.width, wall.height)) return true
    }
    return false
}

function dbugger(ctx) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 30, 149 * scale, 3 * scale);
    ctx.fillRect(90 * scale, (11 * scale) + 30, 149 * scale, 3 * scale);
    ctx.fillRect(0, 30, 3 * scale, 174 * scale);
    ctx.fillRect(0, (171 * scale) + 30, 174 * scale, 3 * scale);
    ctx.fillRect(146 * 5, 30, 3 * scale, 174 * scale);
    ctx.fillRect(0, (75 * scale) + 30, 92 * scale, 3 * scale);
    ctx.fillRect(89 * scale, (75 * scale) + 30, 3 * scale, 24 * scale);
    ctx.fillRect(89 * scale, (119 * scale) + 30, 60 * scale, 3 * scale);
    ctx.fillRect(113 * scale, (52 * scale) + 30, 40 * scale, 3 * scale);
    ctx.fillRect(90 * scale, 30, 3 * scale, 55 * scale);
    ctx.fillRect(0, (16 * scale) + 30, 90 * scale, 3 * scale);
    ctx.fillRect(0, (92 * scale) + 30, 73 * scale, 3 * scale);
    ctx.fillRect(73 * scale, (83 * scale) + 30, 16 * scale, 3 * scale);


    ctx.fillStyle = 'red'
    ctx.fillRect(100 * scale, (8 * scale) + 30, 10 * scale, 14 * scale)
    ctx.fillRect(143 * scale, (37 * scale) + 30, 2 * scale, 13 * scale);
    ctx.fillRect(138 * scale, (20 * scale) + 30, 6 * scale, 10 * scale);
    ctx.fillRect(130 * scale, (50 * scale) + 30, 15 * scale, 2 * scale);
    ctx.fillRect(5 * scale, (56 * scale) + 30, 16 * scale, 2 * scale);
    ctx.fillRect(25 * scale, (57 * scale) + 30, 25 * scale, 16 * scale);
    ctx.fillRect(73 * scale, (42 * scale) + 30, 15 * scale, 11 * scale);
    ctx.fillRect(53 * scale, (159 * scale) + 30, 15 * scale, 10 * scale);
    ctx.fillRect(27 * scale, (162 * scale) + 30, 25 * scale, 7 * scale);
    ctx.fillRect(11 * scale, (159 * scale) + 30, 15 * scale, 10 * scale);
    ctx.fillRect(13 * scale, (125 * scale) + 30, 10 * scale, 29 * scale);
    ctx.fillRect(99 * scale, (141 * scale) + 30, 45 * scale, 27 * scale);
    ctx.fillRect(113 * scale, (109 * scale) + 30, 31 * scale, 8 * scale);



    ctx.fillStyle = 'green'
    ctx.fillRect(140 * scale, (47 * scale) + 30, 3 * scale, 3 * scale);
    ctx.fillRect(135 * scale, (14 * scale) + 30, 3 * scale, 7 * scale);
    ctx.fillRect(100 * scale, (27 * scale) + 30, 3 * scale, 3 * scale);
    ctx.fillRect(59 * scale, (156 * scale) + 30, 3 * scale, 3 * scale);
    ctx.fillRect(23 * scale, (125 * scale) + 30, 3 * scale, 29 * scale);
    ctx.fillRect(6 * scale, (20 * scale) + 30, 13 * scale, 3 * scale);
    ctx.fillRect(26 * scale, (20 * scale) + 30, 13 * scale, 3 * scale);
    ctx.fillRect(35 * scale, (54 * scale) + 30, 18 * scale, 16 * scale);
}


