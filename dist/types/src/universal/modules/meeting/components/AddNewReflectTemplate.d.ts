import { AddNewReflectTemplate_reflectTemplates } from '__generated__/AddNewReflectTemplate_reflectTemplates.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    reflectTemplates: AddNewReflectTemplate_reflectTemplates;
    teamId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "teamId" | "reflectTemplates">, "teamId" | "reflectTemplates"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "reflectTemplates">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AddNewReflectTemplate.d.ts.map