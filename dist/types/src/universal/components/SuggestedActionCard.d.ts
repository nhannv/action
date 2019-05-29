import React, { ReactNode } from 'react';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    backgroundColor: string;
    children: ReactNode;
    iconName: string;
    suggestedActionId: string;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "children" | "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "backgroundColor" | "iconName" | "suggestedActionId">, "children" | "backgroundColor" | "iconName" | "suggestedActionId"> & React.RefAttributes<any>>;
export default _default;
//# sourceMappingURL=SuggestedActionCard.d.ts.map