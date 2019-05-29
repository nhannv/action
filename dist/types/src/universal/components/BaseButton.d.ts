import React, { ReactNode, Ref } from 'react';
import { PlainButtonProps } from 'universal/components/PlainButton/PlainButton';
export interface BaseButtonProps extends PlainButtonProps {
    'aria-label'?: string;
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    className?: string;
    elevationHovered?: number;
    elevationResting?: number;
    innerRef?: Ref<any>;
    onClick?: React.MouseEventHandler;
    onMouseDown?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    style?: object;
}
declare const _default: React.ForwardRefExoticComponent<BaseButtonProps & React.RefAttributes<{}>>;
export default _default;
//# sourceMappingURL=BaseButton.d.ts.map