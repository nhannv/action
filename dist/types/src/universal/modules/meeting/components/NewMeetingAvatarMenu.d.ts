import { NewMeetingAvatarMenu_newMeeting } from '__generated__/NewMeetingAvatarMenu_newMeeting.graphql';
import { NewMeetingAvatarMenu_teamMember } from '__generated__/NewMeetingAvatarMenu_teamMember.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props extends WithAtmosphereProps {
    newMeeting: NewMeetingAvatarMenu_newMeeting;
    teamMember: NewMeetingAvatarMenu_teamMember;
    menuProps: MenuProps;
    handleNavigate?: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "newMeeting" | "teamMember" | "menuProps" | "handleNavigate">, "newMeeting" | "teamMember" | "menuProps" | "handleNavigate">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewMeetingAvatarMenu.d.ts.map