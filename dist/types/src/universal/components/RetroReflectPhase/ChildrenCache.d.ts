import { BBox, Dims, Point } from 'types/animations';
interface CachedChild {
    key: string;
    el: HTMLElement;
    dims: Dims;
    point?: Point;
}
declare class ChildrenCache {
    cache: Array<CachedChild>;
    childPadding: number;
    childWidth: number;
    gridPadding: number;
    maxWidth: number;
    maxHeight: number;
    private get;
    private getGridTuples;
    updateChildren(): {
        height: number;
        width: number;
    };
    setEl(key: string, el: HTMLElement): void;
    setGrid(maxWidth: number, maxHeight: number, childPadding: number, childWidth: number, gridPadding: number): {
        height: number;
        width: number;
    };
    animateIn(first: BBox, parent: BBox): void;
    animateOut(last: BBox, parent: BBox): void;
    maybeResize: (key: string) => {
        height: number;
        width: number;
    } | undefined;
    removeKeys(keys: Array<string>): {
        height: number;
        width: number;
    };
}
export default ChildrenCache;
//# sourceMappingURL=ChildrenCache.d.ts.map