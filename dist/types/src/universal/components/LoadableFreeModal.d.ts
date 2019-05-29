/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
declare const _default: {
    new (props: Readonly<import("../decorators/withAnimatedPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">>): {
        state: {
            isOpen: boolean;
            isClosing: boolean;
        };
        closePortal: () => void;
        terminatePortal: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isOpen" | "isClosing">(state: import("../decorators/withAnimatedPortal").WithAnimatedPortalState | ((prevState: Readonly<import("../decorators/withAnimatedPortal").WithAnimatedPortalState>, props: Readonly<import("../decorators/withAnimatedPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">>) => import("../decorators/withAnimatedPortal").WithAnimatedPortalState | Pick<import("../decorators/withAnimatedPortal").WithAnimatedPortalState, K> | null) | Pick<import("../decorators/withAnimatedPortal").WithAnimatedPortalState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<import("../decorators/withAnimatedPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    new (props: import("../decorators/withAnimatedPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">, context?: any): {
        state: {
            isOpen: boolean;
            isClosing: boolean;
        };
        closePortal: () => void;
        terminatePortal: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isOpen" | "isClosing">(state: import("../decorators/withAnimatedPortal").WithAnimatedPortalState | ((prevState: Readonly<import("../decorators/withAnimatedPortal").WithAnimatedPortalState>, props: Readonly<import("../decorators/withAnimatedPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">>) => import("../decorators/withAnimatedPortal").WithAnimatedPortalState | Pick<import("../decorators/withAnimatedPortal").WithAnimatedPortalState, K> | null) | Pick<import("../decorators/withAnimatedPortal").WithAnimatedPortalState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<import("../decorators/withAnimatedPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    displayName: string;
    getDerivedStateFromProps(nextProps: import("../decorators/withAnimatedPortal").InternalProps, prevState: import("../decorators/withAnimatedPortal").WithAnimatedPortalState): Partial<import("../decorators/withAnimatedPortal").WithAnimatedPortalState> | null;
    contextType?: import("react").Context<any> | undefined;
};
export default _default;
//# sourceMappingURL=LoadableFreeModal.d.ts.map