import { Component, ReactNode } from 'react';
import Tab from 'universal/components/Tab/Tab';
interface Props {
    activeIdx: number;
    children: ReactNode;
    className?: string;
}
declare class Tabs extends Component<Props> {
    activeChildRef?: Tab;
    parentRef?: HTMLDivElement;
    state: {
        transform: string;
    };
    setChildRef: (c: any) => void;
    setParentRef: (c: any) => void;
    moveInkBar: (parent: HTMLDivElement | undefined, child: Tab | undefined) => void;
    render(): JSX.Element;
}
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map