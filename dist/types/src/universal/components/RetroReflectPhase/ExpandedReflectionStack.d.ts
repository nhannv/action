import { PhaseItemColumn_meeting } from '__generated__/PhaseItemColumn_meeting.graphql';
import React, { Component } from 'react';
import FLIPGrid from 'universal/components/RetroReflectPhase/FLIPGrid';
interface Props {
    collapse(): void;
    isExpanded: boolean;
    phaseRef: React.RefObject<HTMLDivElement>;
    stackRef: React.RefObject<HTMLDivElement>;
    firstReflectionRef: React.RefObject<HTMLDivElement>;
    reflectionStack: ReadonlyArray<PhaseItemColumn_meeting['reflectionGroups'][0]['reflections'][0]>;
    meetingId: string;
    phaseItemId: string;
    readOnly: boolean;
}
interface State {
    isClosing: boolean;
}
declare class ExpandedReflectionStack extends Component<Props, State> {
    state: {
        isClosing: boolean;
    };
    resizeObserver: any;
    gridRef: React.RefObject<FLIPGrid>;
    getModalFirst: () => import("../../../types/animations").BBox | null;
    getParentBBox: () => import("../../../types/animations").BBox | null;
    getChildrenFirst: () => import("../../../types/animations").BBox | null;
    componentDidMount(): void;
    handleWindowResize: () => void;
    handleResize: (id: any) => void;
    handleClose: () => void;
    finishClose: () => void;
    componentWillUnmount(): void;
    setItemRef: (c: any) => void;
    render(): JSX.Element;
}
export default ExpandedReflectionStack;
//# sourceMappingURL=ExpandedReflectionStack.d.ts.map