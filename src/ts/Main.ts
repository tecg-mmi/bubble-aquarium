import {settings, settings as s} from "./settings";
import {Bubble} from "./Bubble";

class Main {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private bubble: Bubble;
    private bubbles: Bubble[];


    constructor() {
        this.canvas = document.getElementById(s.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.bubbles = [];
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        this.resizeCanvas();

        this.bubble = new Bubble(this.ctx);
        this.generateBubbles();
        this.animate();

        requestAnimationFrame(() => {
            this.animate();
        });

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
        //
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const bubble of this.bubbles) {
            bubble.update();
            bubble.draw();
        }


        requestAnimationFrame(() => {
            this.animate();
        });
    }
}

new Main();