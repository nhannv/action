import React, { ReactElement } from 'react';
export interface WithToggledPortalProps {
    isClosing: boolean;
    isOpen: boolean;
    closePortal(): void;
    terminatePortal(): void;
}
export interface WithTogglePortalState {
    isOpen: boolean;
    isClosing: boolean;
}
export interface InternalProps {
    isToggleNativeElement?: boolean;
    onClose?(): void;
    toggle: ReactElement<any>;
    LoadableComponent: any;
    setOriginRef?(c: HTMLElement): void;
}
declare const withToggledPortal: <P extends WithToggledPortalProps>(ComposedComponent: React.ComponentType<P>) => {
    new (props: any): {
        state: {
            isOpen: boolean;
            isClosing: boolean;
        };
        smartToggle: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
        toggleRef?: HTMLElement | undefined;
        componentWillReceiveProps(nextProps: any): void;
        openPortal: () => void;
        closePortal: (e?: Event | undefined) => void;
        terminatePortal: () => void;
        makeSmartToggle(toggle: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
        render(): JSX.Element;
        context: any;
        setState<K extends "isOpen" | "isClosing">(state: WithTogglePortalState | ((prevState: Readonly<WithTogglePortalState>, props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>>) => WithTogglePortalState | Pick<WithTogglePortalState, K> | null) | Pick<WithTogglePortalState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<InternalProps & Pick<P, Exclude<keyof P, "closePortal" | "isOpen" | "isClosing" | "terminatePortal">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export default withToggledPortal;
//# sourceMappingURL=withToggledPortal.d.ts.map