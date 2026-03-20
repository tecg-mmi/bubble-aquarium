import {Circle} from "./framework26/shapes/Circle";
import {Random} from "./framework26/helpers/Random";
import {settings} from "./settings";

export class Bubble extends Circle {
    private pseudoSpeed: number;

    constructor(ctx: CanvasRenderingContext2D) {
        const radius = Random.nextInteger(settings.radius);
        super({
            ctx: ctx,
            origine: {
                x: Random.nextInteger({min: radius, max: ctx.canvas.width - radius}),
                y: ctx.canvas.height + radius + Random.nextInteger(settings.negativeGap)
            },
            radius: radius,
            color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})]
        });
        this.pseudoSpeed = Random.nextInteger(settings.speed);
    }

    update() {
        this.origine.y -= this.pseudoSpeed;
        if (this.origine.y < -this.radius) {
            this.radius = Random.nextInteger(settings.radius);
            this.origine.x = Random.nextInteger({min: this.radius, max: this.ctx.canvas.width - this.radius});
            this.origine.y = this.ctx.canvas.height + this.radius + Random.nextInteger(settings.negativeGap)

        }
    }
}