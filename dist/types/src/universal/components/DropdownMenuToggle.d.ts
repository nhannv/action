import React, { ReactElement } from 'react';
import useMenu from 'universal/hooks/useMenu';
interface Props {
    defaultText: string | ReactElement<any>;
    disabled?: boolean;
    onClick: ReturnType<typeof useMenu>['togglePortal'];
    onMouseEnter: () => void;
}
declare const DropdownMenuToggle: React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>;
export default DropdownMenuToggle;
//# sourceMappingURL=DropdownMenuToggle.d.ts.map