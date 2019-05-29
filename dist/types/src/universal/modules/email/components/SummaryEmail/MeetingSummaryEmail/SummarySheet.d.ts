import React from 'react';
import { MeetingSummaryReferrer } from 'universal/modules/email/components/SummaryEmail/MeetingSummaryEmail/MeetingSummaryEmail';
import { SummarySheet_meeting } from '__generated__/SummarySheet_meeting.graphql';
interface Props {
    emailCSVUrl: string;
    isDemo?: boolean;
    meeting: SummarySheet_meeting;
    referrer: MeetingSummaryReferrer;
    referrerUrl?: string;
    teamDashUrl: string;
    meetingUrl: string;
    urlAction?: 'csv';
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "isDemo" | "meeting" | "urlAction" | "emailCSVUrl" | "referrer" | "referrerUrl" | "teamDashUrl" | "meetingUrl">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=SummarySheet.d.ts.map