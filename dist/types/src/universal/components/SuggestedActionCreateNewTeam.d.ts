import { SuggestedActionCreateNewTeam_suggestedAction } from '__generated__/SuggestedActionCreateNewTeam_suggestedAction.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    suggestedAction: SuggestedActionCreateNewTeam_suggestedAction;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "suggestedAction">, "atmosphere" | "suggestedAction"> & React.RefAttributes<any>, "ref" | "key" | "suggestedAction">, "ref" | "key" | "suggestedAction">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=SuggestedActionCreateNewTeam.d.ts.map