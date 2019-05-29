import { ReflectionGroup_meeting } from '__generated__/ReflectionGroup_meeting.graphql';
import { ReflectionGroup_reflectionGroup } from '__generated__/ReflectionGroup_reflectionGroup.graphql';
import React from 'react';
import { MasonryChildrenCache, MasonryItemCache, MasonryParentCache, SetChildRef, SetItemRef } from '../PhaseItemMasonry';
import { DragReflectionDropTargetTypeEnum } from 'universal/types/graphql';
interface PassedProps {
    meeting: ReflectionGroup_meeting;
    reflectionGroup: ReflectionGroup_reflectionGroup;
    itemCache: MasonryItemCache;
    childrenCache: MasonryChildrenCache;
    parentCache: MasonryParentCache;
    setItemRef: SetItemRef;
    setChildRef: SetChildRef;
}
export interface MasonryDropResult {
    dropTargetType: DragReflectionDropTargetTypeEnum;
    dropTargetId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<PassedProps, "meeting" | "itemCache" | "reflectionGroup" | "setItemRef" | "childrenCache" | "parentCache" | "setChildRef">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ReflectionGroup.d.ts.map