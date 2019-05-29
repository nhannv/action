import { Disposable, HandleFieldPayload, HandlerProvider, MutableRecordSource, OptimisticUpdate, RecordSource, RelayResponsePayload, SelectorStoreUpdater, Store as _Store, StoreUpdater } from 'relay-runtime';
interface Store extends _Store {
    holdGC: () => Disposable;
}
declare type OperationDescriptor = any;
declare type Payload = {
    fieldPayloads: Array<HandleFieldPayload> | null;
    operation: OperationDescriptor | null;
    source: MutableRecordSource;
    updater?: SelectorStoreUpdater | null;
};
interface ClientPayload {
    kind: 'client';
    updater: StoreUpdater;
}
interface OptimisticPayload {
    kind: 'optimistic';
    updater: OptimisticUpdate;
}
interface ServerPayload {
    kind: 'payload';
    payload: Payload;
}
interface SourcePayload {
    kind: 'source';
    source: RecordSource;
}
declare type DataToCommit = ClientPayload | OptimisticPayload | ServerPayload | SourcePayload;
declare class LinearPublishQueue {
    _store: Store;
    _handlerProvider: HandlerProvider | null;
    _backup: MutableRecordSource;
    _currentStoreIdx: number;
    _gcHold: Disposable | null;
    _pendingBackupRebase: boolean;
    _pendingUpdates: Array<DataToCommit>;
    constructor(store: Store, handlerProvider?: HandlerProvider | null);
    applyUpdate(updater: OptimisticUpdate): void;
    revertUpdate(updater: OptimisticUpdate): void;
    revertAll(): void;
    commitPayload(operation: OperationDescriptor, { fieldPayloads, source }: RelayResponsePayload, updater?: SelectorStoreUpdater | null, optimisticUpdate?: OptimisticUpdate | null): void;
    commitRelayPayload({ fieldPayloads, source }: RelayResponsePayload): void;
    commitUpdate(updater: StoreUpdater): void;
    commitSource(source: RecordSource): void;
    run(): void;
    _applyPendingUpdates(): void;
    _commitPendingUpdates(): void;
    _handleUpdates(updates: DataToCommit[], isCommit?: boolean): void;
}
export default LinearPublishQueue;
//# sourceMappingURL=LinearPublishQueue.d.ts.map