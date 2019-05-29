import { RetroSidebarDiscussSection_viewer } from '__generated__/RetroSidebarDiscussSection_viewer.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { useGotoStageId } from 'universal/hooks/useMeeting';
interface Props extends WithAtmosphereProps {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    viewer: RetroSidebarDiscussSection_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "viewer" | "gotoStageId">, "viewer" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroSidebarDiscussSection.d.ts.map