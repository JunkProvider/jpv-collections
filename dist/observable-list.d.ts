import { Collection } from './collection';
import { IndexedObject } from './indexed-object';
import { Event } from '@junkprovider/common';
export declare class ValueWithIndex<Value> {
    value: Value;
    index: number;
    constructor(value: Value, index: number);
}
export declare class ListManipulationInfo<Value> {
    items: ValueWithIndex<Value>[];
    constructor(items: ValueWithIndex<Value>[]);
}
export declare class ObservableList<Value> implements Collection<Value> {
    static fromArray<Value>(values: Value[]): void;
    static fromObject<Value>(values: IndexedObject<Value>): ObservableList<Value>;
    addedEvent: Event<ListManipulationInfo<Value>>;
    removedEvent: Event<ListManipulationInfo<Value>>;
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
