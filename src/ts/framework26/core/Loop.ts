export type LoopCallback = () => void;

export class Loop {
    private readonly _callback: LoopCallback;
    private readonly _handlerID: number;


    constructor(callback: LoopCallback) {
        this._callback = callback;
    }

    start() {
        requestAnimationFrame(() => {
            this._update()
        });
    }


    private _update() {
        this._callback();

        requestAnimationFrame(() => {
            this._update();
        });
    }

    stop() {
        cancelAnimationFrame(this._handlerID);
    }
}