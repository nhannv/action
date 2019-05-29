import { RecordProxy, Variables } from 'relay-runtime';
declare type Unproxy<T> = T extends RecordProxy<infer U> ? U : T;
declare type NullIfNull<T> = null extends T ? null : never;
declare class SafeProxy<T extends RecordProxy<any>, U extends Unproxy<T> = Unproxy<T>, V extends NonNullable<U> = NonNullable<U>> {
    proxy: RecordProxy<any> | null;
    constructor(proxy: T | null);
    getValue<K extends keyof V>(name: K, args?: Variables): NullIfNull<U> | NullIfNull<V[K]> | V[K];
    getLinkedRecord<K extends keyof V>(name: K, args?: Variables): SafeProxy<RecordProxy<V[K]>>;
    getLinkedRecords<K extends keyof V>(name: K, args?: Variables): SafeProxy<RecordProxy<V[K]>>[] | SafeProxy<RecordProxy<V[K]>>;
}
declare const safeProxy: <T extends RecordProxy<any>>(proxy: T | null) => SafeProxy<T, Unproxy<T>, NonNullable<Unproxy<T>>>;
export default safeProxy;
//# sourceMappingURL=safeProxy.d.ts.map