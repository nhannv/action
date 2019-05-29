import { AddTeamMemberAvatarButton_team } from '__generated__/AddTeamMemberAvatarButton_team.graphql';
import { AddTeamMemberAvatarButton_teamMembers } from '__generated__/AddTeamMemberAvatarButton_teamMembers.graphql';
import React from 'react';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps {
    isMeeting?: boolean;
    team: AddTeamMemberAvatarButton_team;
    teamMembers: AddTeamMemberAvatarButton_teamMembers;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "team" | "teamMembers" | "isMeeting">, "team" | "teamMembers" | "isMeeting">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AddTeamMemberAvatarButton.d.ts.map