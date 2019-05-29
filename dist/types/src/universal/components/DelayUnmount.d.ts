import { Component, ComponentClass, ReactNode } from 'react';
declare enum TransitionState {
    Entered = 0,
    Exiting = 1,
    Exited = 2
}
interface State {
    exitingChildren: ReactNode;
    transitionState: TransitionState;
}
interface PassthroughProps {
    isExiting: boolean;
    duration: number;
}
interface Props {
    children: ReactNode;
    Animator?: ComponentClass<PassthroughProps>;
    unmountAfter: number;
}
declare class DelayUnmount extends Component<Props, State> {
    exitTimerId: number | undefined;
    state: {
        exitingChildren: null;
        transitionState: TransitionState;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null;
    componentDidUpdate(_prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export default DelayUnmount;
//# sourceMappingURL=DelayUnmount.d.ts.map