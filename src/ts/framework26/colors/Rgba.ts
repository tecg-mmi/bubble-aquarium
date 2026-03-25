import {IRgba} from "../interfaces/colors/IRgba";
import {Rgb} from "./Rgb";

export class Rgba extends Rgb implements IRgba {
    private _alpha: number;


    constructor(rgba: IRgba) {
        super(rgba);
        this._alpha = rgba.alpha;
    }


    set alpha(value: number) {
        if (value > 1 || value < 0) {
            console.error("Mais c’est quoi ce truc !!!");
            this._alpha = 1;
        }
        this._alpha = value;
    }

    get alpha(): number {
        return this._alpha;
    }

    toString() {
        return `rgba(${this.red},${this.green},${this.blue}, ${this.alpha})`;
    }
}