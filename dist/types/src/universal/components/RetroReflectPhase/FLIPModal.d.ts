import React, { Component, ReactChild } from 'react';
import { BBox } from 'types/animations';
interface Props {
    childrenLen: number;
    getFirst(): BBox | null;
    getParentBBox(): BBox | null;
    children(setBBox: (bbox: BBox) => void): ReactChild;
    isClosing: boolean;
    close(): void;
}
declare class FLIPModal extends Component<Props> {
    childBBox: BBox | null;
    backgroundRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    move(): void;
    animateIn(): void;
    animateOut(): void;
    componentDidUpdate(prevProps: any): void;
    setBBox: (childBBox: any) => void;
    render(): JSX.Element;
}
export default FLIPModal;
//# sourceMappingURL=FLIPModal.d.ts.map