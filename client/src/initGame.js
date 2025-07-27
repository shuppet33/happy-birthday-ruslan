// import initKaplay from './kaplayContext.js'
// import {store, isTextBoxVisibleAtom, textBoxContentAtom} from "./store.jsx";
//
// export default function initGame() {
//     const k = initKaplay()
//     const DIAGONAL_FACTOR = 1/ Math.sqrt(2);
//
//     // k.loadSprite('background', './img/apartment-the-Ruslan.png') // квартира Руслана
//     k.loadSprite('ruslan-test', 'Test1.png', {
//         sliceY: 1, sliceX: 2,
//         anims: {
//             'right-idle': 0,
//             'left-idle': 1,
//             'down-idle': 1,
//             'up-idle': 1,
//             right: {from: 0, to: 0, loop: true},
//             left: {from: 1, to: 1, loop: true},
//             up: {from: 1, to: 1, loop: true},
//             down: {from: 1, to: 1, loop: true},
//         },
//     })
//
//     k.loadSprite('background', './img/apartment-the-Ruslan.png')
//
//
//
//     k.add([
//         k.sprite('background'),
//         k.scale(6)
//     ])
//
//
//     const ruslan = k.add([
//         k.sprite('ruslan-test', {anim: 'left-idle'}),
//         k.area({shape: new k.Rect(k.vec2(0, 10), 16, 16)}),
//         k.body(),
//         k.pos(300, 400),
//         k.scale(6),
//         'ruslan',
//         {
//             speed: 350,
//             direction: k.vec2(0, 0)
//         }
//     ])
//
//
//     ruslan.onUpdate(() => {
//         ruslan.direction.x = 0;
//         ruslan.direction.y = 0;
//
//
//         if (k.isKeyDown('left')) ruslan.direction.x = -1;
//         if (k.isKeyDown('right')) ruslan.direction.x = 1;
//         if (k.isKeyDown('up')) ruslan.direction.y = -1;
//         if (k.isKeyDown('down')) ruslan.direction.y = 1;
//
//         if (ruslan.direction.eq(k.vec2(-1, 0)) && ruslan.getCurAnim().name !== 'left') {
//             ruslan.play('left')
//         }
//
//         if (ruslan.direction.eq(k.vec2(1, 0)) && ruslan.getCurAnim().name !== 'right') {
//             ruslan.play('right')
//         }
//
//         if (ruslan.direction.eq(k.vec2(0, 1)) && ruslan.getCurAnim().name !== 'down') {
//             ruslan.play('down')
//         }
//
//         if (ruslan.direction.eq(k.vec2(0, -1)) && ruslan.getCurAnim().name !== 'up') {
//             ruslan.play('up')
//         }
//
//         if (ruslan.direction.eq(k.vec2(0, 0)) && !ruslan.getCurAnim().name.includes('idle')) {
//             ruslan.play(`${ruslan.getCurAnim().name}-idle`)
//         }
//
//         if (ruslan.direction.x && ruslan.direction.y) {
//             ruslan.move(ruslan.direction.scale(DIAGONAL_FACTOR * ruslan.speed()))
//             return;
//         }
//
//         ruslan.move(ruslan.direction.scale(ruslan.speed))
//
//     })
//
//     const wallRight = k.add([
//         k.rect(3, 168),
//         k.body({isStatic: true}),
//         k.area(),
//         k.pos(876, 0),
//         k.scale(6),
//         k.outline(null)
//     ])
//     const wallLeft = k.add([
//         k.rect(3, 168),
//         k.body({isStatic: true}),
//         k.area(),
//         k.pos(0, 0),
//         k.scale(6),
//         k.outline(null)
//     ])
//     const wallDown = k.add([
//         k.rect(149, 3),
//         k.body({isStatic: true}),
//         k.area(),
//         k.pos(0, 1078),
//         k.scale(6),
//         k.outline(null)
//     ])
//
//     console.log('LOOOG', wallDown)
//     const wallUp = k.add([
//         k.rect(149, 3),
//         k.area(),
//         k.body({isStatic: true}),
//         k.pos(0, 0),
//         k.scale(6),
//         k.outline(null)
//     ])
//
//     // test.onCollide('ruslan', (ruslan) => {
//     //     // if (ruslan.direction.eq(k.vec2(0, -1))) {
//     //     //     store.set(textBoxContentAtom, "Beautiful day, isn't it?");
//     //     //     // npc.play("npc-down");
//     //     // }
//     //     //
//     //     // if (ruslan.direction.eq(k.vec2(0, 1))) {
//     //     //     // npc.play("npc-up");
//     //     //     store.set(textBoxContentAtom, "Those rocks are heavy!");
//     //     // }
//     //     //
//     //     // if (ruslan.direction.eq(k.vec2(1, 0))) {
//     //     //     // npc.play("npc-left");
//     //     //     store.set(textBoxContentAtom, "This text box is made with React.js!");
//     //     // }
//     //     //
//     //     // if (ruslan.direction.eq(k.vec2(-1, 0))) {
//     //     //     store.set(textBoxContentAtom, "Is the water too cold?");
//     //     //     // npc.play("npc-right");
//     //     // }
//     //     //
//     //     // // логика для отображения npc в зависимости от того, с какой стороны игрок подошел
//     //     // console.log(store)
//     //     // store.set(isTextBoxVisibleAtom, true);
//     //
//     //     console.log('LOOOG', 'lol')
//     // })
//
//     console.log('LOOOG', ruslan)
// }


