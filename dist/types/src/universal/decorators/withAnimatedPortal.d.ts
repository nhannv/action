import React from 'react';
export interface WithAnimatedPortalProps {
    isClosing: boolean;
    isOpen: boolean;
    closePortal(): void;
    terminatePortal(): void;
}
export interface WithAnimatedPortalState {
    isOpen: boolean;
    isClosing: boolean;
}
export interface InternalProps {
    isModalOpen: boolean;
    closeModal: () => void;
}
declare const withAnimatedPortal: <P extends WithAnimatedPortalProps>(ComposedComponent: React.ComponentType<P>) => {
    new (props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>>): {
        state: {
            isOpen: boolean;
            isClosing: boolean;
        };
        closePortal: () => void;
        terminatePortal: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isOpen" | "isClosing">(state: WithAnimatedPortalState | ((prevState: Readonly<WithAnimatedPortalState>, props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>>) => WithAnimatedPortalState | Pick<WithAnimatedPortalState, K> | null) | Pick<WithAnimatedPortalState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>, context?: any): {
        state: {
            isOpen: boolean;
            isClosing: boolean;
        };
        closePortal: () => void;
        terminatePortal: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isOpen" | "isClosing">(state: WithAnimatedPortalState | ((prevState: Readonly<WithAnimatedPortalState>, props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>>) => WithAnimatedPortalState | Pick<WithAnimatedPortalState, K> | null) | Pick<WithAnimatedPortalState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    getDerivedStateFromProps(nextProps: InternalProps, prevState: WithAnimatedPortalState): Partial<WithAnimatedPortalState> | null;
    contextType?: React.Context<any> | undefined;
};
export default withAnimatedPortal;
//# sourceMappingURL=withAnimatedPortal.d.ts.map