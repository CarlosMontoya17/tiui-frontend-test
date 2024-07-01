import { IBehavorSubject, ISubscriptor } from "../../domain";

export class BehavorSubject<T> implements IBehavorSubject<T> {
    observers: ISubscriptor<T>[]; 
    constructor() {
        this.observers = [];
    }

    subscribe(observer: ISubscriptor<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: ISubscriptor<T>): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    next(data: T): void {
        this.observers.forEach(obs => {
            obs.changes(data);
        });
    }

}