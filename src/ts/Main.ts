import {settings, settings as s} from "./settings";
import {Bubble} from "./Bubble";
import {Loop} from "./framework26/core/Loop";
import {Pointer} from "./Pointer";
import {Distance} from "./framework26/Math/Distance";

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
            this.animate();
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
            this.pointer.origin.y = evt.clientY - this.canvas.getBoundingClientRect().y - this.borderWidth;
            this.pointer.origin.x = evt.clientX - this.canvas.getBoundingClientRect().x - this.borderWidth;
        });

        this.canvas.addEventListener('click', (evt: PointerEvent) => {
            const cursorOrigin = {
                x: evt.clientX - this.canvas.getBoundingClientRect().x - this.borderWidth,
                y: evt.clientY - this.canvas.getBoundingClientRect().y - this.borderWidth
            }

            this.bubbles.forEach((bubble: Bubble) => {
                if (Distance.euclidean(bubble.origin, cursorOrigin) < bubble.radius + this.pointer.radius) {
                    if (this.loop.isLooping()) {
                        this.loop.stop();
                    } else {
                        this.loop.start();
                    }
                }
            });
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