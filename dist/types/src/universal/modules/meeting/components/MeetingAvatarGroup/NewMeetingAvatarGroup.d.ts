import { NewMeetingAvatarGroup_team } from '__generated__/NewMeetingAvatarGroup_team.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { useGotoStageId } from 'universal/hooks/useMeeting';
import { StreamUserDict } from '../../../../hooks/useSwarm';
import MediaSwarm from '../../../../utils/swarm/MediaSwarm';
interface Props extends WithAtmosphereProps {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    team: NewMeetingAvatarGroup_team;
    camStreams: StreamUserDict;
    swarm: MediaSwarm | null;
    allowVideo: boolean;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "team" | "swarm" | "gotoStageId" | "camStreams" | "allowVideo">, "team" | "swarm" | "gotoStageId" | "camStreams" | "allowVideo">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewMeetingAvatarGroup.d.ts.map