/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
import { MenuPosition, UseCoordsOptions } from 'universal/hooks/useCoords';
import { PortalStatus, UsePortalOptions } from 'universal/hooks/usePortal';
interface Options extends UsePortalOptions, UseCoordsOptions {
    loadingWidth?: number;
    isDropdown?: boolean;
}
export interface MenuProps {
    closePortal: () => void;
    portalStatus: PortalStatus;
    isDropdown: boolean;
}
declare const useMenu: (preferredMenuPosition: MenuPosition, options?: Options) => {
    togglePortal: (e?: import("react").MouseEvent<Element, MouseEvent> | import("react").TouchEvent<Element> | undefined) => void;
    originRef: import("react").MutableRefObject<HTMLButtonElement | HTMLDivElement | null>;
    menuPortal: (reactEl: any) => import("react").ReactPortal | null;
    menuProps: {
        portalStatus: PortalStatus;
        closePortal: () => void;
        isDropdown: boolean;
    };
    loadingDelay: number;
    loadingWidth: number;
};
export default useMenu;
//# sourceMappingURL=useMenu.d.ts.map