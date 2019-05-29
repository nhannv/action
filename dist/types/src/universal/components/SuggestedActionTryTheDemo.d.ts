import React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
import { SuggestedActionTryTheDemo_suggestedAction } from '__generated__/SuggestedActionTryTheDemo_suggestedAction.graphql';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    suggestedAction: SuggestedActionTryTheDemo_suggestedAction;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "suggestedAction">, "atmosphere" | "suggestedAction"> & React.RefAttributes<any>, "ref" | "key" | "suggestedAction">, "ref" | "key" | "suggestedAction">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=SuggestedActionTryTheDemo.d.ts.map