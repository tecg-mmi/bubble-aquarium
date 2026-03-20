import {Circle} from "./framework26/shapes/Circle";
import {Random} from "./framework26/helpers/Random";
import {settings} from "./settings";

export class Bubble extends Circle {

    constructor(ctx: CanvasRenderingContext2D) {
        const radius = Random.nextInteger(settings.radius);
        super({
            ctx: ctx,
            origine: {
                x: Random.nextInteger({min: radius, max: ctx.canvas.width - radius}),
                y: ctx.canvas.height - radius
            },
            radius: radius,
            color: settings.colors[Random.nextInteger({min: 0, max: settings.colors.length - 1})]
        });
    }

    update() {
        this.origine.y--;
    }
}