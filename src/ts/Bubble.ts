import {Circle} from "../../../canvas-framework-23/src/ts/shapes/Circle";
import {ICircle} from "../../../canvas-framework-23/src/ts/Types/ICircle";

export class Bubble extends Circle {
    constructor(circle: ICircle) {
        super(circle);
    }

    update() {
        this.position.y -= this.speed;
        if (this.position.y <= -this.radius) {
            this.position.y = this.canvas.height + this.radius
        }
    }
}