import { VideoAvatar_teamMember } from '__generated__/VideoAvatar_teamMember.graphql';
import React from 'react';
import { StreamUI } from '../../hooks/useSwarm';
import MediaSwarm from '../../utils/swarm/MediaSwarm';
interface Props {
    teamMember: VideoAvatar_teamMember;
    streamUI: StreamUI | undefined;
    swarm: MediaSwarm | null;
    onClick?: () => void;
    onMouseEnter?: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props & React.RefAttributes<HTMLElement>, "ref" | "key" | "onClick" | "onMouseEnter" | "swarm" | "teamMember" | "streamUI">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=VideoAvatar.d.ts.map