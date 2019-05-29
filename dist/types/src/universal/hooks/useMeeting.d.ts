/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
import { useMeetingTeam } from '__generated__/useMeetingTeam.graphql';
import { MeetingTypeEnum } from 'universal/types/graphql';
export declare const useDemoMeeting: () => void;
export declare const useEndMeetingHotkey: (meetingId: string) => void;
export declare const useGotoStageId: (team: Pick<useMeetingTeam, "id" | "name" | "newMeeting" | "isMeetingSidebarCollapsed"> | null) => (stageId: string) => Promise<void>;
export declare const useGotoNext: (team: Pick<useMeetingTeam, "id" | "name" | "newMeeting" | "isMeetingSidebarCollapsed"> | null, gotoStageId: (stageId: string) => Promise<void>) => {
    gotoNext: (options?: {
        isHotkey?: boolean | undefined;
    }) => void;
    ref: import("react").RefObject<HTMLElement>;
};
export declare const useGotoNextHotkey: (gotoNext: (options?: {
    isHotkey?: boolean | undefined;
}) => void) => void;
export declare const useGotoPrevHotkey: (team: Pick<useMeetingTeam, "id" | "name" | "newMeeting" | "isMeetingSidebarCollapsed"> | null, gotoStageId: (stageId: string) => Promise<void>) => void;
export declare const useGotoPrev: (team: Pick<useMeetingTeam, "id" | "name" | "newMeeting" | "isMeetingSidebarCollapsed"> | null, gotoStageId: (stageId: string) => Promise<void>) => () => void;
export declare const useToggleSidebar: (teamId: string, isMeetingSidebarCollapsed: boolean) => () => void;
export declare const DEFAULT_TEAM: {
    id: string;
    isMeetingSidebarCollapsed: boolean;
    name: string;
    newMeeting: null;
};
declare const useMeeting: (meetingType: MeetingTypeEnum, team: Pick<useMeetingTeam, "id" | "name" | "newMeeting" | "isMeetingSidebarCollapsed"> | null) => {
    handleGotoNext: {
        gotoNext: (options?: {
            isHotkey?: boolean | undefined;
        }) => void;
        ref: import("react").RefObject<HTMLElement>;
    };
    gotoStageId: (stageId: string) => Promise<void>;
    safeRoute: boolean;
    toggleSidebar: () => void;
    streams: import("./useSwarm").StreamDict;
    swarm: import("../utils/swarm/MediaSwarm").default | null;
};
export default useMeeting;
//# sourceMappingURL=useMeeting.d.ts.map