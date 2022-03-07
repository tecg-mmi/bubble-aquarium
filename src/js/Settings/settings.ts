import {Color} from "./Color";

const color1 = new Color(201, 20, 23);
const color2 = new Color(186, 21, 26);
const color3 = new Color(165, 19, 40);
const color4 = new Color(133, 18, 59);
const color5 = new Color(97, 13, 80);


export const settings = {
    canvasHeightRatio: 0.6,
    canvasWidthRatio: 0.8,
    circleRadius: {min: 2, max: 30, default: 15},
    pointer: {color: "red", alpha: 0, radius: 30},
    gradientColor: [color3, color4],
    colors: [color1, color2, color3, color4, color5],
    defaultColor: "pink"
}
