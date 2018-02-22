import { Collection } from './collection';
import { IndexedObject } from './indexed-object';
export declare class Map<Value> implements Collection<Value> {
    static fromArray<Value>(values: Value[], getKey?: (value: Value) => string | number): Map<Value>;
    static fromObject<Value>(values: IndexedObject<Value>): Map<Value>;
    private values;
    readonly keys: string[];
    count(): number;
    contains(key: string | number): boolean;
    tryGet(key: string | number): Value;
    get(key: string | number): Value;
    add(key: string | number, value: Value): void;
    set(key: string | number, value: Value): void;
    remove(key: string | number): boolean;
    clear(): void;
    clone(): Map<Value>;
    toArray(): Value[];
    toObject(): IndexedObject<Value>;
    forEach(callback: (value: Value, key: string | number) => void): void;
}
