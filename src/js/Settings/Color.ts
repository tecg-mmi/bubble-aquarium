export class Color {
    private readonly hue: number;
    private readonly saturation: number;
    private readonly lightness: number;

    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    toString(): string {
        return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    }
}