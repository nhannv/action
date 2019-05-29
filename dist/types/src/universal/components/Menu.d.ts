import React, { ReactNode } from 'react';
import { PortalStatus } from 'universal/hooks/usePortal';
interface Props {
    ariaLabel: string;
    children: ReactNode;
    className?: string;
    closePortal: () => void;
    defaultActiveIdx?: number;
    keepParentFocus?: boolean;
    resetActiveOnChanges?: any[];
    tabReturns?: boolean;
    isDropdown?: boolean;
    portalStatus: PortalStatus;
}
declare const Menu: React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>;
export default Menu;
//# sourceMappingURL=Menu.d.ts.map