import { TimelineEventCard_timelineEvent } from '__generated__/TimelineEventCard_timelineEvent.graphql';
import React, { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    iconName: string;
    title: ReactNode;
    timelineEvent: TimelineEventCard_timelineEvent;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "children" | "title" | "timelineEvent" | "iconName">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TimelineEventCard.d.ts.map