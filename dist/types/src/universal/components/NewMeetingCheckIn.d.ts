import { NewMeetingCheckIn_team } from '__generated__/NewMeetingCheckIn_team.graphql';
import React, { ReactElement } from 'react';
import { useGotoNext } from 'universal/hooks/useMeeting';
interface Props {
    avatarGroup: ReactElement;
    handleGotoNext: ReturnType<typeof useGotoNext>;
    team: NewMeetingCheckIn_team;
    toggleSidebar: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewMeetingCheckIn.d.ts.map