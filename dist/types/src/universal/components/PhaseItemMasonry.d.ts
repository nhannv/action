import { PhaseItemMasonry_meeting } from '__generated__/PhaseItemMasonry_meeting.graphql';
import React from 'react';
import { BBox, Coords } from 'types/animations';
import { DragReflectionDropTargetTypeEnum } from 'universal/types/graphql';
import Atmosphere from '../Atmosphere';
interface PassedProps {
    meeting: PhaseItemMasonry_meeting;
    resetActivityTimeout?: () => void;
}
interface ItemCache {
    el?: HTMLElement | undefined;
    boundingBox?: BBox | null;
    modalEl: HTMLElement | undefined;
}
export interface MasonryItemCache {
    [itemId: string]: ItemCache;
}
export interface MasonryAtmosphere extends Atmosphere {
    getMasonry: () => {
        itemCache: MasonryItemCache;
        childrenCache: MasonryChildrenCache;
        parentCache: MasonryParentCache;
    };
}
interface StaticWidthBBox {
    top: number;
    left: number;
    height: number;
}
interface ChildCache {
    el: HTMLElement | null;
    boundingBox: StaticWidthBBox | null;
    modalBoundingBox?: BBox;
    headerHeight?: number;
}
export interface MasonryChildrenCache {
    [childId: string]: ChildCache;
}
export interface MasonryParentCache {
    el: HTMLElement | null;
    boundingBox: BBox | null;
    columnLefts: Array<number>;
    cardsInFlight: {
        [itemId: string]: Coords;
    };
    incomingChildren: {
        [itemId: string]: {
            boundingBox: StaticWidthBBox | null;
            childId: string;
        };
    };
}
export declare type SetItemRef = (itemId: string, isModal?: boolean) => (c: HTMLDivElement) => void;
export declare type SetChildRef = (groupId: string, reflectionId: string) => (c: HTMLElement) => void;
export declare type SetInFlightCoords = (x: number, y: number, itemId: string) => void;
interface DropOnGridPayload {
    dropTargetType: DragReflectionDropTargetTypeEnum.REFLECTION_GRID;
    childId: string;
    itemId: string;
    sourceId: string;
}
interface DropOnGroupPayload {
    dropTargetType: DragReflectionDropTargetTypeEnum.REFLECTION_GROUP;
    dropTargetId: string;
    childId: string;
    itemId: string;
    sourceId: string;
}
interface CancelDropPayload {
    dropTargetType: null;
    itemId: string;
}
export declare type MasonryDragEndPayload = DropOnGridPayload | DropOnGroupPayload | CancelDropPayload;
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<PassedProps, "meeting" | "resetActivityTimeout">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=PhaseItemMasonry.d.ts.map