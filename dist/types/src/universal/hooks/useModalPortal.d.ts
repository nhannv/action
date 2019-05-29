import React from 'react';
import { PortalStatus } from 'universal/hooks/usePortal';
declare const useModalPortal: (portal: (el: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => React.ReactPortal | null, targetRef: React.Ref<HTMLDivElement>, portalStatus: PortalStatus, loadingDelayRef: React.MutableRefObject<{
    start: number;
    stop: number;
    forceUpdate: () => void;
}>, closePortal: () => void, background: string | undefined) => (reactEl: any) => React.ReactPortal | null;
export default useModalPortal;
//# sourceMappingURL=useModalPortal.d.ts.map