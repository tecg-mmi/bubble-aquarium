import {IRgb} from "./interfaces/IRgb";

export class Rgb {
    private _red: number;
    private _green: number;
    private _blue: number;


    constructor(color: IRgb) {
        this.red = color.red;
        this.green = color.green;
        this.blue = color.blue;
    }

    get red() {
        return this._red;
    }


    get green(): number {
        return this._green;
    }

    get blue(): number {
        return this._blue;
    }

    set red(value: number) {
        if (value < 0 || value > 255) {
            console.error(`${value} is not a valid format for red canal`);
            this._red = 0;
        } else {
            this._red = Math.trunc(value);
        }
    }

    set blue(value: number) {
        if (value < 0 || value > 255) {
            console.error(`${value} is not a valid format for blue canal`);
            this._blue = 0;
        } else {
            this._blue = Math.trunc(value);
        }
    }

    set green(value: number) {
        if (value < 0 || value > 255) {
            console.error(`${value} is not a valid format for green canal`);
            this._green = 0;
        } else {
            this._green = Math.trunc(value);
        }
    }

}



