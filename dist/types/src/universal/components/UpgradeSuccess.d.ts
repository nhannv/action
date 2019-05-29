import React from 'react';
declare type Props = {
    handleClose: () => void;
};
declare type State = {
    active: boolean;
};
declare class UpgradeSuccess extends React.Component<Props, State> {
    _mounted: boolean;
    constructor(props: Props);
    state: {
        active: boolean;
    };
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default UpgradeSuccess;
//# sourceMappingURL=UpgradeSuccess.d.ts.map