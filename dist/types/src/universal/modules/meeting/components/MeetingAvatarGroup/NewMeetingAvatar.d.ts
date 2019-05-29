import { NewMeetingAvatar_newMeeting } from '__generated__/NewMeetingAvatar_newMeeting.graphql';
import { NewMeetingAvatar_teamMember } from '__generated__/NewMeetingAvatar_teamMember.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { StreamUI } from '../../../../hooks/useSwarm';
import MediaSwarm from '../../../../utils/swarm/MediaSwarm';
interface Props extends WithAtmosphereProps {
    gotoStage: () => void;
    isFacilitatorStage: boolean;
    newMeeting: NewMeetingAvatar_newMeeting | null;
    teamMember: NewMeetingAvatar_teamMember;
    streamUI: StreamUI | undefined;
    swarm: MediaSwarm | null;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "newMeeting" | "swarm" | "teamMember" | "gotoStage" | "isFacilitatorStage" | "streamUI">, "newMeeting" | "swarm" | "teamMember" | "gotoStage" | "isFacilitatorStage" | "streamUI">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewMeetingAvatar.d.ts.map