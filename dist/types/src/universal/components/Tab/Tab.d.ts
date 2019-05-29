import React, { Component } from 'react';
interface Props {
    isActive?: boolean;
    label?: string;
    onClick: () => void;
}
declare class Tab extends Component<Props> {
    ref: React.RefObject<HTMLButtonElement>;
    getBoundingRect: () => ClientRect | null;
    render(): JSX.Element;
}
export default Tab;
//# sourceMappingURL=Tab.d.ts.map