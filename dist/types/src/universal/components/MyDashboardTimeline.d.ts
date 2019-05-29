import { MyDashboardTimeline_viewer } from '__generated__/MyDashboardTimeline_viewer.graphql';
import React from 'react';
interface Props {
    viewer: MyDashboardTimeline_viewer;
}
export declare const enum DASH_TIMELINE {
    FEED_MAX_WIDTH = 600,
    FEED_MIN_WIDTH = 400,
    MIN_PADDING = 8,
    TIMELINE_DRAWER_WIDTH = 336
}
export declare const TimelineFeedItems: import("create-emotion-styled").StyledOtherComponent<{}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=MyDashboardTimeline.d.ts.map