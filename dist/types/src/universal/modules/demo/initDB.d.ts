import { IRetroReflection, IRetroReflectionGroup, IRetrospectiveMeeting, IRetrospectiveMeetingSettings, ISuggestedIntegrationGitHub, ISuggestedIntegrationJira, ITask, TaskServiceEnum } from '../../types/graphql';
export declare const demoMeetingId = "demoMeeting";
export declare const demoViewerId = "demoUser";
export declare const demoTeamId = "demoTeam";
export declare const demoOrgId = "demoOrg";
export declare const demoTeamName = "Demo Team";
export declare const JiraDemoKey = "Demo";
export declare const JiraDemoCloudName = "jira-demo";
export declare const JiraProjectKeyLookup: {
    Demo: {
        projectKey: string;
        projectName: string;
        cloudId: string;
        cloudName: string;
        avatar: string;
        service: TaskServiceEnum;
    };
    "jira-secret": {
        projectKey: string;
        projectName: string;
        cloudId: string;
        cloudName: string;
        avatar: string;
        service: TaskServiceEnum;
    };
};
export declare const GitHubDemoKey = "ParabolInc/ParabolDemo";
export declare const GitHubProjectKeyLookup: {
    "ParabolInc/ParabolDemo": {
        nameWithOwner: string;
        service: TaskServiceEnum;
    };
};
declare const initDB: (botScript: any) => {
    meetingMembers: {
        __typename: string;
        id: any;
        isCheckedIn: boolean;
        meetingId: string;
        meetingType: any;
        teamId: string;
        tasks: ITask[];
        user: any;
        userId: any;
        votesRemaining: number;
        myVotesRemaining: number;
    }[];
    newMeeting: Partial<IRetrospectiveMeeting>;
    organization: {
        id: string;
        name: string;
        tier: any;
    };
    reflections: Partial<IRetroReflection & {
        isHumanTouched: boolean;
    }>[];
    reflectionGroups: Partial<IRetroReflectionGroup>[];
    tasks: Partial<ITask>[];
    team: {
        __typename: string;
        id: string;
        isArchived: boolean;
        isPaid: boolean;
        meetingId: string;
        name: string;
        teamName: string;
        orgId: string;
        softTeamMembers: never[];
        tier: any;
        teamId: string;
        organization: any;
        meetingSettings: Partial<IRetrospectiveMeetingSettings>;
        teamMembers: any;
        newMeeting: any;
    };
    teamMembers: {
        meetingMember: {
            __typename: string;
            id: any;
            isCheckedIn: boolean;
            meetingId: string;
            meetingType: any;
            teamId: string;
            tasks: ITask[];
            user: any;
            userId: any;
            votesRemaining: number;
            myVotesRemaining: number;
        };
        user: {
            id: string;
            viewerId: string;
            atlassianAuth: {
                isActive: boolean;
                accessToken: string;
            };
            githubAuth: {
                isActive: boolean;
                accessToken: string;
            };
            connectedSockets: string[];
            createdAt: string;
            email: string;
            featureFlags: {
                jira: boolean;
                video: boolean;
            };
            facilitatorUserId: string;
            facilitatorName: string;
            inactive: boolean;
            isConnected: boolean;
            lastLogin: string;
            lastSeenAt: string;
            picture: string;
            preferredName: string;
            suggestedIntegrations: {
                hasMore: boolean;
                items: (ISuggestedIntegrationJira | ISuggestedIntegrationGitHub)[];
            };
            allAvailableIntegrations: ISuggestedIntegrationJira[];
            tms: string[];
        };
        __typename: string;
        email: string;
        id: any;
        checkInOrder: any;
        teamMemberId: any;
        isConnected: boolean;
        isFacilitator: boolean;
        isLead: boolean;
        isSelf: boolean;
        picture: any;
        preferredName: any;
        teamId: string;
        userId: any;
    }[];
    users: {
        id: string;
        viewerId: string;
        atlassianAuth: {
            isActive: boolean;
            accessToken: string;
        };
        githubAuth: {
            isActive: boolean;
            accessToken: string;
        };
        connectedSockets: string[];
        createdAt: string;
        email: string;
        featureFlags: {
            jira: boolean;
            video: boolean;
        };
        facilitatorUserId: string;
        facilitatorName: string;
        inactive: boolean;
        isConnected: boolean;
        lastLogin: string;
        lastSeenAt: string;
        picture: string;
        preferredName: string;
        suggestedIntegrations: {
            hasMore: boolean;
            items: (ISuggestedIntegrationJira | ISuggestedIntegrationGitHub)[];
        };
        allAvailableIntegrations: ISuggestedIntegrationJira[];
        tms: string[];
    }[];
    _updatedAt: Date;
    _tempID: number;
    _botScript: any;
};
export default initDB;
//# sourceMappingURL=initDB.d.ts.map