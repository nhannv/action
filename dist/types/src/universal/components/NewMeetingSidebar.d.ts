import React, { ReactNode } from 'react';
import { MeetingTypeEnum } from 'universal/types/graphql';
import { NewMeetingSidebar_viewer } from '__generated__/NewMeetingSidebar_viewer.graphql';
export declare const enum MEETING_SIDEBAR {
    BREAKPOINT = 800
}
interface Props {
    children: ReactNode;
    isMeetingSidebarCollapsed: boolean;
    meetingType: MeetingTypeEnum;
    toggleSidebar: () => void;
    viewer: NewMeetingSidebar_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "children" | "meetingType" | "viewer" | "toggleSidebar" | "isMeetingSidebarCollapsed">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewMeetingSidebar.d.ts.map