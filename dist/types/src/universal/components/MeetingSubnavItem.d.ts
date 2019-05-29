import React from 'react';
interface Props {
    isActive: boolean;
    isComplete: boolean;
    isDisabled: boolean;
    isDragging: boolean;
    isUnsyncedFacilitatorStage: boolean;
    label: string;
    metaContent: any;
    onClick: ((e: React.MouseEvent) => void) | undefined;
    orderLabel: string;
}
declare const MeetingSubnavItem: (props: Props) => JSX.Element;
export default MeetingSubnavItem;
//# sourceMappingURL=MeetingSubnavItem.d.ts.map