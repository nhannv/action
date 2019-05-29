/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
import { RouteComponentProps } from 'react-router';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { TeamInvitationAccept_verifiedInvitation } from '__generated__/TeamInvitationAccept_verifiedInvitation.graphql';
interface Props extends WithAtmosphereProps, RouteComponentProps<{
    token: string;
}> {
    verifiedInvitation: TeamInvitationAccept_verifiedInvitation;
}
declare const _default: import("react").ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "verifiedInvitation">, "verifiedInvitation">, "verifiedInvitation">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamInvitationAccept.d.ts.map