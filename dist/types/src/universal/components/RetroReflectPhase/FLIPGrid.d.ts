import React, { Component, ComponentElement } from 'react';
import { BBox } from 'types/animations';
import ChildrenCache from 'universal/components/RetroReflectPhase/ChildrenCache';
import ParentCache from 'universal/components/RetroReflectPhase/ParentCache';
interface Props {
    getFirst(): BBox | null;
    getParentBBox(): BBox | null;
    isClosing: boolean;
    setBBox(bbox: BBox): void;
}
interface State {
    children: Array<ComponentElement<any, any>>;
}
declare class FLIPGrid extends Component<Props, State> {
    childrenCache: ChildrenCache;
    parentCache: ParentCache;
    first: BBox;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    updateChildren: () => void;
    handleGridChange(dims?: {
        height: number;
        width: number;
    }): void;
    handleWindowResize: () => void;
    checkForResize(key: string): void;
    makeReffedChildren(children: Array<ComponentElement<any, any>>): React.ComponentElement<any, any>[];
    render(): JSX.Element;
}
export default FLIPGrid;
//# sourceMappingURL=FLIPGrid.d.ts.map