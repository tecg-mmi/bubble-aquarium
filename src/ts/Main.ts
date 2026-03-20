import {settings, settings as s} from "./settings";
import {Bubble} from "./Bubble";
import {Loop} from "./framework26/core/Loop";

class Main {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly bubble: Bubble;
    private readonly bubbles: Bubble[];
    private readonly loop: Loop;


    constructor() {
        this.canvas = document.getElementById(s.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.bubbles = [];
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        this.loop = new Loop(() => {
            this.animate()
        });


        this.resizeCanvas();

        this.bubble = new Bubble(this.ctx);
        this.generateBubbles();

        this.loop.start();

    }

    private resizeCanvas() {
        this.canvas.width = window.innerWidth * s.canvasWidthRatio;
        this.canvas.height = window.innerHeight * s.canvasWidthRatio;
    }

    private generateBubbles() {
        for (let i = 0; i < settings.maxBubbleCount; i++) {
            this.bubbles.push(new Bubble(this.ctx));
        }
    }

    private animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const bubble of this.bubbles) {
            bubble.update();
            bubble.draw();
        }
    }
}

new Main();