import React from 'react';
import { ReflectionGroupVoting_meeting } from '__generated__/ReflectionGroupVoting_meeting.graphql';
import { ReflectionGroupVoting_reflectionGroup } from '__generated__/ReflectionGroupVoting_reflectionGroup.graphql';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    isExpanded: boolean;
    meeting: ReflectionGroupVoting_meeting;
    reflectionGroup: ReflectionGroupVoting_reflectionGroup;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "meeting" | "reflectionGroup" | "isExpanded">, "meeting" | "reflectionGroup" | "isExpanded"> & React.RefAttributes<any>, "ref" | "key" | "meeting" | "reflectionGroup" | "isExpanded">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ReflectionGroupVoting.d.ts.map