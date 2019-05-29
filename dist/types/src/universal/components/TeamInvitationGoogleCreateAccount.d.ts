import { TeamInvitationGoogleCreateAccount_verifiedInvitation } from '__generated__/TeamInvitationGoogleCreateAccount_verifiedInvitation.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{
    token: string;
}> {
    verifiedInvitation: TeamInvitationGoogleCreateAccount_verifiedInvitation;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "verifiedInvitation">, "atmosphere" | "verifiedInvitation"> & React.RefAttributes<any>, "ref" | "key" | "verifiedInvitation">, "ref" | "key" | "verifiedInvitation">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamInvitationGoogleCreateAccount.d.ts.map