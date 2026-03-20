import {settings} from "./settings";
import {Circle} from "./framework26/shapes/Circle";
import {Bubble} from "./Bubble";
import {Loop} from "./framework26/core/Loop";

class Main {

    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly pointer: Circle;
    private readonly bubbles: Bubble[];
    private intervalID: number;
    private loop: Loop;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        this.resizeCanvas();
        this.bubbles = []
        this.pointer = new Bubble(this.ctx);

        this.loop = new Loop(() => {
            this.update();
        });

        this.generateBubbles();

        this.loop.start();
    }

    private resizeCanvas() {
        this.canvas.width = window.innerWidth * settings.windowRadio;
        this.canvas.height = window.innerHeight * settings.windowRadio;
    }

    private generateBubbles() {
        for (let i = 0; i < settings.bubbleCount; i++) {
            this.bubbles.push(new Bubble(this.ctx));
        }
    }

    private update(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.bubbles.forEach((bubble: Bubble) => {
            bubble.update();
            bubble.draw();
        });
    }
}

new Main();