import React from 'react';
import { MenuPosition, UseCoordsValue } from 'universal/hooks/useCoords';
import { PortalStatus } from 'universal/hooks/usePortal';
declare const useMenuPortal: (portal: (el: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => React.ReactPortal | null, targetRef: (el: HTMLElement) => void, minWidth: number, coords: UseCoordsValue, portalStatus: PortalStatus, setPortalStatus: any, isDropdown: boolean, menuPosition: MenuPosition, loadingDelayRef: React.MutableRefObject<{
    start: number;
    stop: number;
    forceUpdate: () => void;
}>) => (reactEl: any) => React.ReactPortal | null;
export default useMenuPortal;
//# sourceMappingURL=useMenuPortal.d.ts.map