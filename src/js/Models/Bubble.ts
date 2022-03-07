import {settings} from "../Settings/settings";
import {Circle} from "./Circle";

export class Bubble extends Circle {
    private angle: number;
    private speed: { x: number, y: number };

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mousePosition: { x: number; y: number }) {
        super(canvas, ctx, mousePosition);
        this.generate();
    }

    protected generate() {
        this.radius = Math.floor(settings.circleRadius.min + Math.random() * (settings.circleRadius.max - settings.circleRadius.min));
        this.color = settings.colors[Math.floor(Math.random() * settings.colors.length)].toString();
        this.alpha = (this.radius / settings.circleRadius.max);
        this.angle = Math.PI / 2;
        // The speed is calculated from the radius. Large bubbles rise faster than small ones.
        this.speed = {y: (this.radius / settings.circleRadius.max) * settings.circleRadius.min, x: Math.random() - 0.5};
        this.origin = {
            x: Math.floor(this.radius + Math.random() * (this.canvas.width - this.radius * 4)),
            y: this.canvas.height + this.radius * 2 + Math.random() * (this.canvas.height * 1.5 - this.canvas.height - this.radius * 2)
        }
    }

    draw(): Bubble {
        super.draw();
        return this;
    }

    update(): Bubble {
        if (this.origin.y <= -this.radius) {
            this.generate();
        }
        let hypotenuse: number;
        hypotenuse = Math.sqrt(Math.pow((this.origin.x - this.mousePosition.x), 2) + Math.pow((this.origin.y - this.mousePosition.y), 2));

        if (hypotenuse <= this.radius + settings.pointer.radius) {
            this.alpha = 0;
        }
        this.origin.y -= this.speed.y;
        this.origin.x -= this.speed.x;

        return this.draw();
    }
}