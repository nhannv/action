import React, { Ref } from 'react';
interface Props {
    hasBadge?: boolean;
    isCheckedIn?: boolean | null;
    isConnected?: boolean;
    onClick?: (e?: React.MouseEvent) => void;
    picture: string;
    sansRadius?: boolean;
    sansShadow?: boolean;
    innerRef?: Ref<HTMLElement>;
    size: number;
}
declare const Avatar: (props: Props) => JSX.Element;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map