import {Circle} from "./framework26/shapes/Circle";
import {settings} from "./settings";

export class Pointer extends Circle {


    constructor(ctx: CanvasRenderingContext2D) {
        super({
            ctx: ctx,
            color: settings.pointer.color,
            radius: settings.pointer.radius,
            origin: {
                x: ctx.canvas.width / 2,
                y: ctx.canvas.height / 2
            }
        });
    }


}