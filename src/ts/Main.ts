import {settings, settings as s} from "./settings";
import {Bubble} from "./Bubble";
import {Loop} from "./framework26/core/Loop";
import {Pointer} from "./Pointer";

class Main {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly pointer: Pointer;
    private readonly bubbles: Bubble[];
    private readonly loop: Loop;
    private readonly borderWidth: number;


    constructor() {
        this.canvas = document.getElementById(s.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.bubbles = [];
        this.addEventListeners();

        this.borderWidth = parseInt(getComputedStyle(this.canvas).borderWidth)

        this.loop = new Loop(() => {
            this.animate()
        });


        this.resizeCanvas();

        this.pointer = new Pointer(this.ctx);

        this.generateBubbles();

        this.loop.start();

    }

    private addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        this.canvas.addEventListener('mousemove', (evt) => {
            const newX = evt.clientX - this.canvas.getBoundingClientRect().x - this.borderWidth;
            const newY = evt.clientY - this.canvas.getBoundingClientRect().y - this.borderWidth;
            console.log(newX, newY);


            this.pointer.origin.y = newY;
            this.pointer.origin.x = newX;
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
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.pointer.draw();

        for (const bubble of this.bubbles) {
            bubble.update();
            bubble.draw();
        }
    }
}

new Main();