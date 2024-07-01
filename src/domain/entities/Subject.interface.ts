import { ISubscriptor } from "./Observer.interface";

export interface IBehavorSubject <T>{
    observers: ISubscriptor<T>[];
    subscribe(observer: ISubscriptor<T>): void;
    unsubscribe(observer: ISubscriptor<T>): void;
    next(value: T): void;
}