import React from 'react';
export declare const enum PortalStatus {
    Entering = 0,
    Entered = 1,
    AnimatedIn = 2,
    Exiting = 3,
    Exited = 4
}
export interface UsePortalOptions {
    onOpen?: (el: HTMLElement) => void;
    onClose?: () => void;
}
declare const usePortal: (options?: UsePortalOptions) => {
    openPortal: (e?: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element> | undefined) => void;
    closePortal: () => void;
    terminatePortal: () => void;
    togglePortal: (e?: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element> | undefined) => void;
    portal: (reactEl: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => React.ReactPortal | null;
    portalStatus: PortalStatus;
    setPortalStatus: React.Dispatch<React.SetStateAction<PortalStatus>>;
};
export default usePortal;
//# sourceMappingURL=usePortal.d.ts.map