import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    meetingId: string;
    reflectionId: string;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "reflectionId" | "meetingId">, "reflectionId" | "meetingId"> & React.RefAttributes<any>>;
export default _default;
//# sourceMappingURL=ReflectionCardDeleteButton.d.ts.map