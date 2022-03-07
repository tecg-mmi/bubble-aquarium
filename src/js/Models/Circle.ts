import {settings} from "../Settings/settings";

export class Circle {
    protected radius: number;
    protected readonly canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    protected color: string;
    protected mousePosition: { x: number; y: number };
    protected origin: { x: number, y: number };
    protected alpha: number;


    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mousePosition: { x: number; y: number }, radius: number = settings.circleRadius.default, color: string = settings.defaultColor, alpha: number = 0) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.alpha = alpha;
        this.mousePosition = mousePosition;
        this.radius = radius;
        this.color = color;
        this.origin = {
            x: this.mousePosition.x,
            y: this.mousePosition.y
        }
    }

    protected draw() {
        this.ctx.globalAlpha = this.alpha;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath()
        this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.globalAlpha = 1;
    }

    protected update() {
        this.origin.x = this.mousePosition.x;
        this.origin.y = this.mousePosition.y;
        this.draw();
    }
}