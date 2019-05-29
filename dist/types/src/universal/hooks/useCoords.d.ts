import { MutableRefObject } from 'react';
import { BBox } from 'types/animations';
export declare type UseCoordsValue = {
    top: number;
    left: number;
} | {
    top: number;
    right: number;
} | {
    bottom: number;
    right: number;
} | {
    bottom: number;
    left: number;
};
export declare enum MenuPosition {
    UPPER_LEFT = 0,
    UPPER_RIGHT = 1,
    UPPER_CENTER = 2,
    LOWER_LEFT = 3,
    LOWER_RIGHT = 4,
    LOWER_CENTER = 5
}
export interface UseCoordsOptions {
    originCoords?: BBox;
}
declare const useCoords: (preferredMenuPosition: MenuPosition, options?: UseCoordsOptions) => {
    targetRef: (c: any) => void;
    originRef: MutableRefObject<HTMLButtonElement | HTMLDivElement | null>;
    coords: UseCoordsValue;
    menuPosition: MenuPosition;
};
export default useCoords;
//# sourceMappingURL=useCoords.d.ts.map