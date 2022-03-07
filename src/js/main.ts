import {canvas} from "./canvas";
import {Bubble} from "./Models/Bubble";
import {settings} from "./Settings/settings";
import {Circle} from "./Models/Circle";


const App = {
    bubbles: [] as Bubble[],
    mousePosition: {x: 0, y: 0},
    mousePointer: Circle,
    init() {
        this.canvasElement = document.getElementById("my-canvas");
        this.canvas = canvas.init(this.canvasElement).draw();
        this.ctx = this.canvas.ctx;
        this.mousePointer = new Circle(this.canvas, this.ctx, this.mousePosition, settings.pointer.radius, settings.pointer.color, settings.pointer.alpha);
        this.canvasPosition = {
            x: this.canvas.canvas.getBoundingClientRect().x + parseInt(getComputedStyle(this.canvas.canvas).borderWidth),
            y: this.canvas.canvas.getBoundingClientRect().y + parseInt(getComputedStyle(this.canvas.canvas).borderWidth)
        };
        this.calculateMaxBubbles();
        this.animate();
        this.addEventListeners()
    },
    calculateMaxBubbles() {
        this.maxBubble = Math.floor(this.canvas.canvas.width / settings.circleRadius.min);
    },
    animate() {
        if (this.bubbles.length < this.maxBubble) {
            this.bubbles.push(new Bubble(this.canvas.canvas, this.ctx, this.mousePosition));
        } else if (this.bubbles.length > this.maxBubble) {
            this.bubbles = this.bubbles.slice(0, this.maxBubble);
        }
        this.ctx.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        this.canvas.update();
        this.bubbles.forEach((bubble: Bubble) => {
            bubble.update();
        })
        this.mousePointer.update()
        requestAnimationFrame(this.animate.bind(this));
    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.canvas.updateCanvasSize();
            this.calculateMaxBubbles();
            this.canvasPosition = this.canvas.getBoundingClientRect();
        })
        this.canvas.canvas.addEventListener('mousemove', (event: MouseEvent) => {
            this.mousePosition.x = event.clientX - this.canvasPosition.x;
            this.mousePosition.y = event.clientY - this.canvasPosition.y;
        })
        return this;
    },
}

App.init();