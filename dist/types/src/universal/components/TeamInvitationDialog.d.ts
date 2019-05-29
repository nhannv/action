import React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { TeamInvitationDialog_verifiedInvitation } from '__generated__/TeamInvitationDialog_verifiedInvitation.graphql';
interface Props extends WithAtmosphereProps, RouteComponentProps<{
    token: string;
}> {
    verifiedInvitation: TeamInvitationDialog_verifiedInvitation;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "verifiedInvitation">, "verifiedInvitation">, "verifiedInvitation">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamInvitationDialog.d.ts.map