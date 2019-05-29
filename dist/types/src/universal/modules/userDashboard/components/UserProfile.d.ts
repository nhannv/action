import React from 'react';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithFormProps } from 'universal/utils/relay/withForm';
import { UserProfile_viewer } from '__generated__/UserProfile_viewer.graphql';
interface Props extends WithAtmosphereProps, WithMutationProps, WithFormProps {
    viewer: UserProfile_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "viewer"> & React.RefAttributes<any>, "ref" | "atmosphere" | "key" | "viewer">, "atmosphere" | "key" | "viewer"> & React.RefAttributes<any>, "ref" | "key" | "viewer">, "ref" | "key" | "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=UserProfile.d.ts.map