import { RecordProxy, RecordSourceProxy, RecordSourceSelectorProxy } from 'relay-runtime';
declare const createProxyRecord: <T = unknown>(store: RecordSourceProxy | RecordSourceSelectorProxy<any>, type: string, record: T) => T extends unknown ? RecordProxy<any> : RecordProxy<T>;
export default createProxyRecord;
//# sourceMappingURL=createProxyRecord.d.ts.map