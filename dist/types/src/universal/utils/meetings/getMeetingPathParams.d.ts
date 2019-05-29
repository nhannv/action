import { MeetingTypeEnum, NewMeetingPhaseTypeEnum } from 'universal/types/graphql';
interface MeetingPathResults {
    meetingSlug?: 'meeting' | 'retro' | 'retrospective-demo';
    meetingType?: MeetingTypeEnum;
    teamId?: string;
    phaseSlug?: string;
    phaseType?: NewMeetingPhaseTypeEnum;
    stageIdx?: number;
    stageIdxSlug?: string;
}
declare const getMeetingPathParams: () => MeetingPathResults;
export default getMeetingPathParams;
//# sourceMappingURL=getMeetingPathParams.d.ts.map