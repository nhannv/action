declare type FilterFn = (record: Record) => boolean | null | undefined | void;
declare type Options = {
    isPlural: boolean;
};
declare type Record = {
    __id: string;
    __typename: string;
    [field: string]: any;
};
declare function getCachedRecord(store: any, filterFn: FilterFn, options?: {
    isPlural: false;
} & Options): Record;
declare function getCachedRecord(store: any, filterFn: FilterFn, options: {
    isPlural: true;
} & Options): Array<Record>;
export default getCachedRecord;
//# sourceMappingURL=getCachedRecord.d.ts.map