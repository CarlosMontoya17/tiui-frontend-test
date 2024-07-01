export interface ISubscriptor<T> {
    changes(value: T): void;
}