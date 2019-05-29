import { ReflectionGroupTitleEditor_meeting } from '__generated__/ReflectionGroupTitleEditor_meeting.graphql';
import { ReflectionGroupTitleEditor_reflectionGroup } from '__generated__/ReflectionGroupTitleEditor_reflectionGroup.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    isExpanded: boolean;
    reflectionGroup: ReflectionGroupTitleEditor_reflectionGroup;
    readOnly: boolean;
    meeting: ReflectionGroupTitleEditor_meeting;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "meeting" | "readOnly" | "reflectionGroup" | "isExpanded"> & React.RefAttributes<any>, "ref" | "key" | "meeting" | "readOnly" | "reflectionGroup" | "isExpanded">, "ref" | "key" | "meeting" | "readOnly" | "reflectionGroup" | "isExpanded">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ReflectionGroupTitleEditor.d.ts.map