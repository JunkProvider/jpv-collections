import { Collection } from './collection';
import { IndexedObject } from './indexed-object';
export declare class List<Value> implements Collection<Value> {
    static fromArray<Value>(values: Value[]): void;
    static fromObject<Value>(values: IndexedObject<Value>): List<Value>;
    private values;
    count(): number;
    contains(value: Value): boolean;
    get(index: number): Value;
    add(value: Value): void;
    set(index: number, value: Value): void;
    remove(index: number): boolean;
    clear(): void;
    toArray(): Value[];
    forEach(callback: (value: Value, key: number) => void): void;
}
