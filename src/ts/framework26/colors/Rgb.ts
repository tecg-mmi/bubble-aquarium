import {IRgb} from "../interfaces/colors/IRgb";

export class Rgb implements IRgb {
    private _red: number;
    private _green: number;
    private _blue: number;


    constructor(rgb: IRgb) {
        this.red = rgb.red;
        this.green = rgb.green;
        this.blue = rgb.blue;
    }

    set red(value: number) {
        if (value < 0 || value > 255) {
            this._red = 0;
            console.error(`${value} n’est pas une valeur valide pour red. Ce sera donc ${0}`);
        } else {
            this._red = value;
        }
    }

    set green(value: number) {
        if (value < 0 || value > 255) {
            this._green = 0;
            console.error(`${value} n’est pas une valeur valide pour gren. Ce sera donc ${0}`);
        } else {
            this._green = value;
        }
    }

    set blue(value: number) {
        if (value < 0 || value > 255) {
            this._blue = 0;
            console.error(`${value} n’est pas une valeur valide pour blue. Ce sera donc ${0}`);
        } else {
            this._blue = value;
        }
    }

    get red() {
        return Math.trunc(this._red);
    }


    get green(): number {
        console.log(this._green);
        return Math.trunc(this._green);
    }

    get blue(): number {
        return Math.trunc(this._blue);
    }

    toString() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }

}

