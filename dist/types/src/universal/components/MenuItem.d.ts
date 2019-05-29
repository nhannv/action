import React, { ReactNode } from 'react';
export interface MenuItemProps {
    isActive: boolean;
    activate: () => void;
    closePortal: () => void;
}
interface Props {
    label: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    onMouseEnter?: (e: React.MouseEvent) => void;
    noCloseOnClick?: boolean;
}
declare const MenuItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>;
export default MenuItem;
//# sourceMappingURL=MenuItem.d.ts.map