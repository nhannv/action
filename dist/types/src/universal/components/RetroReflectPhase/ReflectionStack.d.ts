import { PhaseItemColumn_meeting } from '__generated__/PhaseItemColumn_meeting.graphql';
import React, { Component } from 'react';
interface Props {
    idx: number;
    meetingId: string;
    phaseItemId: string;
    phaseEditorRef: React.RefObject<HTMLDivElement>;
    phaseRef: React.RefObject<HTMLDivElement>;
    readOnly: boolean;
    reflectionStack: ReadonlyArray<PhaseItemColumn_meeting['reflectionGroups'][0]['reflections'][0]>;
}
interface State {
    isExpanded: boolean;
}
declare class ReflectionStack extends Component<Props, State> {
    state: {
        isExpanded: boolean;
    };
    animationStart: number;
    stackRef: React.RefObject<HTMLDivElement>;
    placeholderRef: React.RefObject<HTMLDivElement>;
    firstReflectionRef: React.RefObject<HTMLDivElement>;
    getSnapshotBeforeUpdate(prevProps: Props): {
        duration: number;
        easing: string;
        startCoords?: undefined;
    } | {
        startCoords: ClientRect | DOMRect;
        duration: number;
        easing: string;
    } | null;
    componentDidUpdate(_prevProps: any, _prevState: any, snapshot: any): void;
    animateFromEditor(firstReflectionDiv: HTMLDivElement, first: any, duration: any, easing: any): void;
    expand: () => void;
    collapse: () => void;
    render(): JSX.Element;
}
export default ReflectionStack;
//# sourceMappingURL=ReflectionStack.d.ts.map