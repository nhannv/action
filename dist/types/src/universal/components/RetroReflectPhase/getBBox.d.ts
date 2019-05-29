import { BBox } from 'types/animations';
export interface RectElement {
    getBoundingClientRect: HTMLElement['getBoundingClientRect'];
}
declare const getBBox: (el: RectElement | null) => BBox | null;
export default getBBox;
//# sourceMappingURL=getBBox.d.ts.map