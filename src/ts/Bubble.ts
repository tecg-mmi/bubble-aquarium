import {Circle} from "./framework26/shapes/Circle";
import {settings} from "./settings";
import {Random} from "./framework26/math/Random";

export class Bubble extends Circle {
    private pseudoSpeed: number;

    constructor(ctx: CanvasRenderingContext2D) {
        const radius = Random.nextInteger(settings.radius);
        super({
            ctx: ctx,
            origin: {
                x: Random.nextInteger({min: radius, max: ctx.canvas.width - radius}),
                y: ctx.canvas.height + radius + Random.nextInteger(settings.negativeGap)
            },
            radius: radius,
            color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})]
        });
        this.pseudoSpeed = Random.nextInteger(settings.speed);
    }

    update() {
        this.origin.y -= this.pseudoSpeed;
        if (this.origin.y < -this.radius) {

            this.origin.x = Random.nextInteger({min: this.radius, max: this.ctx.canvas.width - this.radius});
            this.origin.y = this.ctx.canvas.height + this.radius + Random.nextInteger(settings.negativeGap);

            this.radius = Random.nextInteger(settings.radius);
            this.pseudoSpeed = Random.nextInteger(settings.speed);
        }
    }
}