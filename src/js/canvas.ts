import {settings} from "./Settings/settings";

export const canvas = {
    init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.updateCanvasSize();
        this.createLinearGradient();
        return this;

    },
    updateCanvasSize() {
        this.canvas.width = window.innerWidth * settings.canvasWidthRatio;
        this.canvas.height = window.innerHeight * settings.canvasHeightRatio;
        this.createLinearGradient();
        return this;
    },
    createLinearGradient(): CanvasGradient {
        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        let fraction: number = 1 / (settings.gradientColor.length - 1);
        for (let i = 0; i < settings.gradientColor.length; i++) {
            console.log(i * fraction);
            this.gradient.addColorStop(i * fraction, settings.gradientColor[i].toString());
        }
        return this;
    },
    draw() {
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        return this;
    },
    update() {
        return this.draw();
    },
}