import React, { Component, ReactNode } from 'react';
interface GridProps {
    colWidth: number;
    gap: number;
    maxCols?: number;
}
declare type SetItemRef = (id: string) => (c: HTMLElement | null) => any;
declare type RenderProp = (setItemRef: SetItemRef) => ReactNode;
interface Props extends GridProps {
    children: RenderProp;
    items?: Array<any> | ReadonlyArray<any>;
}
interface ItemRefs {
    [id: string]: HTMLElement;
}
declare class MasonryCSSGrid extends Component<Props> {
    itemRefs: ItemRefs;
    gridRef: React.RefObject<HTMLDivElement>;
    resizeObserver: any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    setSpans: () => void;
    setSpan(c: HTMLElement | null): void;
    setItemRef: SetItemRef;
    render(): JSX.Element;
}
export default MasonryCSSGrid;
//# sourceMappingURL=MasonryCSSGrid.d.ts.map