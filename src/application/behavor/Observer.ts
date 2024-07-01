import { ISubscriptor } from "../../domain";

export class Subscriptor<T> implements ISubscriptor<T> {
    private _fn: (value: T) => void;
    private lastValue!: T;

    constructor(fn: (value: T) => void) {
        this._fn = fn;
    }

    getLastValue(): T {
        return this.lastValue;
    }

    changes(value: T): void {
        this.lastValue = value;
        this._fn(value);
    }
}