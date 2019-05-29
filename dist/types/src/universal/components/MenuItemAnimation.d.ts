import { ReactNode } from 'react';
import { PortalStatus } from 'universal/hooks/usePortal';
declare global {
    interface Element {
        scrollIntoViewIfNeeded: () => void;
    }
}
export declare const menuItemAnimation: (idx: number, itemsToAnimate: number, isDropdown?: boolean | undefined) => string;
interface Props {
    children: ReactNode;
    idx: number;
    itemsToAnimate: number;
    isDropdown: boolean;
    portalStatus: PortalStatus;
}
declare const MenuItemAnimation: (props: Props) => JSX.Element;
export default MenuItemAnimation;
//# sourceMappingURL=MenuItemAnimation.d.ts.map