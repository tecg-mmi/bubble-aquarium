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
        this.gradient.addColorStop(0, settings.gradientColor[0].toString());
        this.gradient.addColorStop(1, settings.gradientColor[1].toString());
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