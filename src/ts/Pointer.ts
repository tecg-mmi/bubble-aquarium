import {Circle} from "./framework26/shapes/Circle";
import {settings} from "./settings";

export class Pointer extends Circle {

    constructor(ctx: CanvasRenderingContext2D) {
        super({
            ctx: ctx,
            origin: {
                y: 100,
                x: 50
            },
            color: settings.pointer.color,
            radius: settings.pointer.radius
        });
    }
}