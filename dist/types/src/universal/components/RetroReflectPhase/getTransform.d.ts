import { BBox, Point } from 'types/animations';
interface Options {
    scale?: boolean;
}
declare const getTransform: (first: BBox | Point, last: BBox | Point, { scale }?: Options) => string;
export default getTransform;
//# sourceMappingURL=getTransform.d.ts.map