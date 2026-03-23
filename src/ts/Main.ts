import {settings} from "./settings";
import {Bubble} from "./Bubble";
import {Loop} from "./framework26/core/Loop";
import {Pointer} from "./Pointer";

class Main {
    private readonly canvas: HTMLCanvasElement;
    private readonly canvasBorderWidth: number;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly pointer: Pointer;
    private readonly bubbles: Bubble[];
    private loop: Loop;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.addEventListeners();
        this.resizeCanvas();
        this.bubbles = []
        this.pointer = new Pointer(this.ctx);
        this.canvasBorderWidth = parseInt(getComputedStyle(this.canvas).borderWidth);
        this.loop = new Loop(() => {
            this.update();
        });

        this.generateBubbles();

        this.loop.start();
    }

    private addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        this.canvas.addEventListener('mousemove', (evt: MouseEvent) => {
            const canvasPos = this.canvas.getBoundingClientRect();
            this.pointer.origin.x = evt.clientX - canvasPos.x - this.canvasBorderWidth;
            this.pointer.origin.y = evt.clientY - canvasPos.y - this.canvasBorderWidth;
        });
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
        this.pointer.draw();
    }
}

new Main();