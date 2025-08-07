
const scale = 5

const walls = [
    { x: 0, y: 0, width: 149 * scale, height: 3 * scale },
    { x: 0, y: 0, width: 3 * scale, height: 174 * scale },
    { x: 0, y: 171 * scale, width: 174 * scale, height: 3 * scale },
    { x: 146 * scale, y: 0, width: 3 * scale, height: 174 * scale },
    { x: 0, y: 75 * scale, width: 92 * scale, height: 3 * scale },
    { x: 89 * scale, y: 75 * scale, width: 3 * scale, height: 24 * scale },
    { x: 89 * scale, y: 119 * scale, width: 60 * scale, height: 3 * scale },
    { x: 113 * scale, y: 52 * scale, width: 40 * scale, height: 3 * scale },
    { x: 90 * scale, y: 0, width: 3 * scale, height: 55 * scale },
];
const interactables = []

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

export default async function initGameSceneTwoContext(ctx) {
    const [apartment, ruslan] = await Promise.all([
        loadImage('/apartment-default.png'),
        loadImage('/sprite-ruslan-anims-2.png'),
    ]);

    initGameSceneTwo(ctx, [apartment, ruslan]);
}



function initGameSceneTwo(ctx, img) {

    ctx.imageSmoothingEnabled = false;

    const [apartment, ruslan] = img
    const apartmentObj = {
        drawX: 0, drawY: 0,
        drawWidth: 149 * scale, drawHeight: 174 * scale,
        spriteX: 0, spriteY: 0, spriteWidth: 149, spriteHeight: 174
    };
    const ruslanObj = {
        drawX: 115 * scale,
        drawY: 123 * scale,
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

        ctx.drawImage(
            apartment,
            apartmentObj.spriteX,
            apartmentObj.spriteY,
            apartmentObj.spriteWidth,
            apartmentObj.spriteHeight,
            apartmentObj.drawX,
            apartmentObj.drawY,
            apartmentObj.drawWidth,
            apartmentObj.drawHeight
        );

        const { sx, sy } = anim[nameAnim][frameNumber];
        const sw = ruslanObj.spriteWidth;
        const sh = ruslanObj.spriteHeight;
        const dw = sw * scale;
        const dh = sh * scale;

        ctx.drawImage(ruslan, sx, sy, sw, sh, ruslanX, ruslanY, dw, dh);
    }

    const keyses = {
            ArrowDown: "ArrowDown",
            ArrowUp: "ArrowUp",
            ArrowLeft: "ArrowLeft",
            ArrowRight: "ArrowRight"
        }
    
    const keys = {
            ArrowDown: "s",
            ArrowUp: "w",
            ArrowLeft: "a",
            ArrowRight: "d"
        }   

    let wasd = true;

    document.addEventListener('keydown', (e) => {

        if (e.key === 'b' || e.key === 'B') {
            dbugger(ctx)
            return
        }

        if (e.code === "ControlLeft" && e.code === "Slash") {   //Почему-то не регистрирует нажатие
            
            if (!wasd) {
                keys.ArrowDown = "s";
                keys.ArrowUp = "w";
                keys.ArrowLeft = "a";
                keys.ArrowRight = "d";
                wasd = true;
            }
            else {
                keys.ArrowDown = "ArrowDown";
                keys.ArrowUp = "ArrowUp";
                keys.ArrowLeft = "ArrowLeft";
                keys.ArrowRight = "ArrowRight";
                wasd = false;
            }
            
        }
        
        if ([keys.ArrowDown, keys.ArrowUp, keys.ArrowLeft, keys.ArrowRight].includes(e.key) && !animTimer) {
            animTimer = setInterval(() => {
                currentFrame++
                if (currentFrame > 2) currentFrame = 1

                console.log(e.key);

                let nextX = ruslanX;
                let nextY = ruslanY;

                if (e.key.toLowerCase() === keys.ArrowDown.toLowerCase()) nextY += moveSpeed;
                if (e.key.toLowerCase() === keys.ArrowUp.toLowerCase()) nextY -= moveSpeed;
                if (e.key.toLowerCase() === keys.ArrowRight.toLowerCase()) nextX += moveSpeed;
                if (e.key.toLowerCase() === keys.ArrowLeft.toLowerCase()) nextX -= moveSpeed;

                if (!isBlocked(nextX, nextY, ruslanObj.drawWidth, ruslanObj.drawHeight)) {
                    ruslanX = nextX;
                    ruslanY = nextY;
                }

                let direction = '';
                if (!wasd) {
                    direction = e.key.replace('Arrow', '').toLowerCase();
                    drawFrame(currentFrame, `move-${direction}`)
                }
                else {
                    switch(e.key.toLowerCase()) {
                        case 'w':
                            direction = 'up';
                            break;
                        case 's':
                            direction = 'down';
                            break;                        
                        case 'a':
                            direction = 'left';
                            break;
                        case 'd':
                            direction = 'right';
                            break;                            
                    }
                    drawFrame(currentFrame, `move-${direction}`);
                }
            }, 75)
        }
    })
    document.addEventListener('keyup', (e) => {
        if ([keys.ArrowDown, keys.ArrowUp, keys.ArrowLeft, keys.ArrowRight].includes(e.key)) {
            clearInterval(animTimer)
            animTimer = null
            currentFrame = 3

            let direction = '';
            if (!wasd) {
                direction = e.key.replace('Arrow', '').toLowerCase();
                drawFrame(currentFrame, `move-${direction}`)
            }
            else {
                switch(e.key.toLowerCase()) {
                case 'w':
                    direction = 'up';
                    break;
                case 's':
                    direction = 'down';
                    break;                        
                case 'a':
                    direction = 'left';
                    break;
                case 'd':
                    direction = 'right';
                    break;                            
                }
                drawFrame(currentFrame, `move-${direction}`);
            }
            
        }
    })
}


function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (
        x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2
    );
}
function isBlocked(x, y, width, height) {
    for (const wall of walls) {
        if (isColliding(x, y, width, height, wall.x, wall.y, wall.width, wall.height)) return true
    }
    return false
}

function dbugger(ctx) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, 149 * scale, 3 * scale);
    ctx.fillRect(0, 0, 3 * scale, 174 * scale);
    ctx.fillRect(0, 171 * scale, 174 * scale, 3 * scale);
    ctx.fillRect(146 * 5, 0, 3 * scale, 174 * scale);
    ctx.fillRect(0, 75 * scale, 92 * scale, 3 * scale);
    ctx.fillRect(89 * scale, 75 * scale, 3 * scale, 24 * scale);
    ctx.fillRect(89 * scale, 119 * scale, 60 * scale, 3 * scale);
    ctx.fillRect(113 * scale, 52 * scale, 40 * scale, 3 * scale);
    ctx.fillRect(90 * scale, 0, 3 * scale, 55 * scale);
}