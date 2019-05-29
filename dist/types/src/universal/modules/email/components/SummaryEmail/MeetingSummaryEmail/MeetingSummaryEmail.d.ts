import React from 'react';
export declare type MeetingSummaryReferrer = 'meeting' | 'email' | 'history';
interface Props {
    emailCSVUrl: string;
    isDemo?: boolean;
    meeting: any;
    referrer: MeetingSummaryReferrer;
    referrerUrl?: string;
    teamDashUrl: string;
    meetingUrl: string;
    urlAction?: 'csv';
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "isDemo" | "meeting" | "urlAction" | "emailCSVUrl" | "referrer" | "referrerUrl" | "teamDashUrl" | "meetingUrl">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=MeetingSummaryEmail.d.ts.map