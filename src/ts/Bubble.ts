import {Circle} from "./framework26/shapes/Circle";
import {Random} from "./framework26/Math/Random";
import {settings} from "./settings";

export class Bubble extends Circle {

    private speed: number;

    constructor(ctx: CanvasRenderingContext2D) {
        const radius = Random.nextInteger(settings.radius);
        super({
            ctx: ctx,
            color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})],
            origin: {
                x: Random.nextInteger({
                    min: radius,
                    max: ctx.canvas.width - radius
                }),
                y: ctx.canvas.height + Random.nextInteger({min: 0, max: settings.maxStartingGap})
            },
            radius: radius
        });
        this.speed = Random.nextInteger(settings.speed);
    }

    update() {
        this.origin.y -= this.speed;
        if (this.origin.y < -this.radius) {
            this.origin.y = this.ctx.canvas.height + Random.nextInteger({min: 0, max: settings.maxStartingGap});
            this.origin.x = Random.nextInteger({
                min: this.radius,
                max: this.ctx.canvas.width - this.radius
            })
            this.radius = Random.nextInteger(settings.radius);
            this.speed = Random.nextInteger(settings.speed);
        }
    }
}