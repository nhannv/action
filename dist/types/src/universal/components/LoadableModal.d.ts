/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
declare const _default: {
    new (props: any): {
        state: {
            isOpen: boolean;
            isClosing: boolean;
        };
        smartToggle: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
        toggleRef?: HTMLElement | undefined;
        componentWillReceiveProps(nextProps: any): void;
        openPortal: () => void;
        closePortal: (e?: Event | undefined) => void;
        terminatePortal: () => void;
        makeSmartToggle(toggle: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
        render(): JSX.Element;
        context: any;
        setState<K extends "isOpen" | "isClosing">(state: import("../decorators/withToggledPortal").WithTogglePortalState | ((prevState: Readonly<import("../decorators/withToggledPortal").WithTogglePortalState>, props: Readonly<import("../decorators/withToggledPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">>) => import("../decorators/withToggledPortal").WithTogglePortalState | Pick<import("../decorators/withToggledPortal").WithTogglePortalState, K> | null) | Pick<import("../decorators/withToggledPortal").WithTogglePortalState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<import("../decorators/withToggledPortal").InternalProps & Pick<import("./LoadableModalAbstract").LoadableModalAbstractProps, "background" | "LoadableComponent" | "queryVars">> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    displayName: string;
    contextType?: import("react").Context<any> | undefined;
};
export default _default;
//# sourceMappingURL=LoadableModal.d.ts.map