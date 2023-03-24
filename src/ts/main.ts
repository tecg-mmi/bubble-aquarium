import {Canvas} from "../../../canvas-framework-23/src/ts/Canvas";
import {Hsl} from "../../../canvas-framework-23/src/ts/Colors/Hsl";
import {Animate} from "../../../canvas-framework-23/src/ts/Animate";
import {Random} from "../../../canvas-framework-23/src/ts/Helpers/Random";
import {Bubble} from "./Bubble";

function main() {
    const canvas = new Canvas(document.getElementById('my-canvas') as HTMLCanvasElement, 300, 900);
    const animation = new Animate(canvas);
    for (let i = 0; i < 20; i++) {
        const radius = Random.nextInt(3, 8);
        const bubble = new Bubble({
            canvas: canvas,
            color: new Hsl(50, 70, 50),
            radius: radius,
            position: {x: Random.nextInt(radius, canvas.width - radius), y: canvas.height + radius * 2},
            speed: Random.nextInt(3, 7),
            direction: 0
        });
        animation.registerForAnimation(bubble);
    }
    animation.start();
    console.log('Bonjour');
}

main();