export interface Collection<Value> {
    count(): number;
    forEach(callback: (value: Value) => void): void;
}
