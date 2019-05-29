import { Component, ComponentType } from 'react';
import { WithAnimatedPortalProps } from '../decorators/withAnimatedPortal';
export interface LoadableModalAbstractProps extends WithAnimatedPortalProps {
    background?: string;
    LoadableComponent: ComponentType<any>;
    queryVars?: any;
}
interface State {
    isOpen: boolean;
    isClosing: boolean;
}
declare class LoadableModalAbstract extends Component<LoadableModalAbstractProps, State> {
    render(): JSX.Element;
}
export default LoadableModalAbstract;
//# sourceMappingURL=LoadableModalAbstract.d.ts.map