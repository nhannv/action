import EventEmitter from 'eventemitter3';
import { Variables } from 'relay-runtime';
import StrictEventEmitter from 'strict-event-emitter-types';
import { ICreateReflectionPayload, IEditReflectionPayload, INewMeetingStage, IReflectPhase, IRetroReflection, IRetroReflectionGroup, NewMeetingPhase } from 'universal/types/graphql';
import initDB from './initDB';
import LocalAtmosphere from './LocalAtmosphere';
interface DemoEvents {
    team: IEditReflectionPayload | ICreateReflectionPayload;
    botsFinished: void;
}
declare type GQLDemoEmitter = {
    new (): StrictEventEmitter<EventEmitter, DemoEvents>;
};
declare const ClientGraphQLServer_base: GQLDemoEmitter;
declare class ClientGraphQLServer extends ClientGraphQLServer_base {
    atmosphere: LocalAtmosphere;
    db: ReturnType<typeof initDB>;
    getTempId: (prefix: any) => string;
    pendingBotTimeout: number | undefined;
    pendingBotAction?: (() => Array<any>) | undefined;
    constructor(atmosphere: LocalAtmosphere);
    getUnlockedStages(stageIds: Array<string>): INewMeetingStage[];
    startBot: () => void;
    isBotFinished: () => boolean;
    finishBotActions: () => Promise<void>;
    ops: {
        ExportToCSVQuery: () => {
            viewer: {
                newMeeting: {
                    reflectionGroups: IRetroReflectionGroup[];
                    __typename?: "RetrospectiveMeeting" | undefined;
                    id?: string | undefined;
                    createdAt?: any;
                    endedAt?: any;
                    facilitatorStageId?: string | undefined;
                    facilitatorUserId?: string | undefined;
                    facilitator?: import("../../types/graphql").IUser | undefined;
                    meetingMembers?: import("../../types/graphql").IRetrospectiveMeetingMember[] | undefined;
                    meetingNumber?: number | undefined;
                    meetingType?: import("../../types/graphql").MeetingTypeEnum | undefined;
                    phases?: NewMeetingPhase[] | undefined;
                    summarySentAt?: any;
                    teamId?: string | undefined;
                    team?: import("../../types/graphql").ITeam | undefined;
                    updatedAt?: any;
                    viewerMeetingMember?: import("../../types/graphql").IRetrospectiveMeetingMember | undefined;
                    autoGroupThreshold?: number | null | undefined;
                    nextAutoGroupThreshold?: number | null | undefined;
                    settings?: import("../../types/graphql").IRetrospectiveMeetingSettings | undefined;
                    taskCount?: number | undefined;
                    tasks?: import("../../types/graphql").ITask[] | undefined;
                    votesRemaining?: number | undefined;
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        TaskFooterIntegrateMenuRootQuery: () => {
            viewer: {
                userOnTeam: {
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
                        items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                    };
                    allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                    tms: string[];
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        NewMeetingSummaryRootQuery: () => {
            viewer: {
                newMeeting: {
                    reflectionGroups: IRetroReflectionGroup[];
                    meetingMembers: {
                        tasks: import("../../types/graphql").ITask[];
                        __typename: "RetrospectiveMeetingMember";
                        id: string;
                        isCheckedIn: boolean | null;
                        meetingId: string;
                        meetingType: import("../../types/graphql").MeetingTypeEnum;
                        teamId: string;
                        user: import("../../types/graphql").IUser;
                        userId: string;
                        updatedAt: any;
                        votesRemaining: number;
                    }[];
                    __typename?: "RetrospectiveMeeting" | undefined;
                    id?: string | undefined;
                    createdAt?: any;
                    endedAt?: any;
                    facilitatorStageId?: string | undefined;
                    facilitatorUserId?: string | undefined;
                    facilitator?: import("../../types/graphql").IUser | undefined;
                    meetingNumber?: number | undefined;
                    meetingType?: import("../../types/graphql").MeetingTypeEnum | undefined;
                    phases?: NewMeetingPhase[] | undefined;
                    summarySentAt?: any;
                    teamId?: string | undefined;
                    team?: import("../../types/graphql").ITeam | undefined;
                    updatedAt?: any;
                    viewerMeetingMember?: import("../../types/graphql").IRetrospectiveMeetingMember | undefined;
                    autoGroupThreshold?: number | null | undefined;
                    nextAutoGroupThreshold?: number | null | undefined;
                    settings?: import("../../types/graphql").IRetrospectiveMeetingSettings | undefined;
                    taskCount?: number | undefined;
                    tasks?: import("../../types/graphql").ITask[] | undefined;
                    votesRemaining?: number | undefined;
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        TaskFooterUserAssigneeMenuRootQuery: () => {
            viewer: {
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
                    meetingSettings: Partial<import("../../types/graphql").IRetrospectiveMeetingSettings>;
                    teamMembers: any;
                    newMeeting: any;
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        RetroRootQuery: () => {
            viewer: {
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
                    meetingSettings: Partial<import("../../types/graphql").IRetrospectiveMeetingSettings>;
                    teamMembers: any;
                    newMeeting: any;
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        SuggestMentionableUsersRootQuery: () => {
            viewer: {
                team: {
                    teamMembers: any;
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
                    meetingSettings: Partial<import("../../types/graphql").IRetrospectiveMeetingSettings>;
                    newMeeting: any;
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        useAllIntegrationsQuery: () => {
            viewer: {
                userOnTeam: {
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
                        items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                    };
                    allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                    tms: string[];
                };
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
                    items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                };
                allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                tms: string[];
            };
        };
        CreateGitHubIssueMutation: ({ taskId, nameWithOwner }: {
            taskId: any;
            nameWithOwner: any;
        }, userId: any) => {
            createGitHubIssue: {
                __typename: string;
                error: null;
                task: Partial<import("../../types/graphql").ITask>;
            };
        } | null;
        CreateJiraIssueMutation: ({ projectKey, taskId }: {
            projectKey: any;
            taskId: any;
        }, userId: any) => {
            createJiraIssue: {
                __typename: string;
                error: null;
                task: Partial<import("../../types/graphql").ITask>;
            };
        } | null;
        CreateReflectionMutation: ({ input: { content, retroPhaseItemId, sortOrder, id, groupId } }: {
            input: {
                content: any;
                retroPhaseItemId: any;
                sortOrder: any;
                id: any;
                groupId: any;
            };
        }, userId: any) => {
            createReflection: {
                meetingId: string;
                reflection: Partial<IRetroReflection & {
                    isHumanTouched: boolean;
                }>;
                reflectionId: string | undefined;
                reflectionGroupId: any;
                reflectionGroup: Partial<IRetroReflectionGroup>;
                unlockedStageIds: string[];
                unlockedStages: INewMeetingStage[];
                __typename: string;
            };
        };
        EditReflectionMutation: ({ phaseItemId, isEditing }: {
            phaseItemId: string;
            isEditing: boolean;
        }, userId: any) => {
            editReflection: {
                phaseItemId: string;
                editorId: any;
                isEditing: boolean;
                __typename: string;
            };
        };
        RemoveReflectionMutation: ({ reflectionId }: {
            reflectionId: string;
        }, userId: string) => {
            removeReflection: {
                meetingId: string;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                reflectionId: string;
                reflection: Partial<IRetroReflection & {
                    isHumanTouched: boolean;
                }>;
                unlockedStages: INewMeetingStage[];
                unlockedStageIds: string[];
                __typename: string;
            };
        };
        UpdateReflectionContentMutation: ({ reflectionId, content }: {
            reflectionId: any;
            content: any;
        }, userId: any) => {
            updateReflectionContent: {
                error: null;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                reflection: Partial<IRetroReflection & {
                    isHumanTouched: boolean;
                }>;
                __typename: string;
            };
        };
        NavigateMeetingMutation: ({ completedStageId, facilitatorStageId, meetingId }: {
            completedStageId: any;
            facilitatorStageId: any;
            meetingId: any;
        }, userId: any) => Promise<{
            navigateMeeting: {
                error: null;
                meetingId: any;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                oldFacilitatorStageId: string;
                oldFacilitatorStage: (import("../../types/graphql").ICheckInStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IRetroDiscussStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IGenericMeetingStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IUpdatesStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IAgendaItemsStage & import("../../utils/meetings/findStageById").FindStageByIdStage);
                facilitatorStageId: any;
                facilitatorStage: (import("../../types/graphql").ICheckInStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IRetroDiscussStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IGenericMeetingStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IUpdatesStage & import("../../utils/meetings/findStageById").FindStageByIdStage) | (import("../../types/graphql").IAgendaItemsStage & import("../../utils/meetings/findStageById").FindStageByIdStage);
                unlockedStageIds: any;
                unlockedStages: any;
                phaseComplete: any;
                __typename: string;
            };
        }>;
        SetPhaseFocusMutation: ({ focusedPhaseItemId }: {
            focusedPhaseItemId: any;
        }, userId: any) => {
            setPhaseFocus: {
                meetingId: string;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                reflectPhase: IReflectPhase;
                __typename: string;
            };
        };
        StartDraggingReflectionMutation: ({ reflectionId, initialCoords, dragId }: {
            reflectionId: any;
            initialCoords: any;
            dragId: any;
        }, userId: any) => {
            startDraggingReflection: {
                error: null;
                teamId: string;
                meetingId: string;
                reflectionId: any;
                reflection: Partial<IRetroReflection & {
                    isHumanTouched: boolean;
                }>;
                dragContext: {
                    id: any;
                    dragUserId: any;
                    dragUser: {
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
                            items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                        };
                        allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                        tms: string[];
                    } | undefined;
                    dragCoords: any;
                };
                __typename: string;
            };
        } | undefined;
        EndDraggingReflectionMutation: ({ reflectionId, dropTargetType, dropTargetId, dragId }: {
            reflectionId: any;
            dropTargetType: any;
            dropTargetId: any;
            dragId: any;
        }, userId: any) => {
            endDraggingReflection: {
                __typename: string;
                meetingId: string;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                reflectionId: any;
                reflection: Partial<IRetroReflection & {
                    isHumanTouched: boolean;
                }>;
                reflectionGroupId: any;
                reflectionGroup: Partial<IRetroReflectionGroup> | undefined;
                oldReflectionGroupId: string | null | undefined;
                oldReflectionGroup: Partial<IRetroReflectionGroup>;
                userId: any;
                dropTargetType: any;
                dropTargetId: any;
                dragId: any;
            };
        } | undefined;
        UpdateDragLocationMutation: ({ input }: {
            input: any;
        }, userId: any) => {
            updateDragLocation: any;
        } | undefined;
        AutoGroupReflectionsMutation: ({ meetingId, groupingThreshold }: {
            meetingId: any;
            groupingThreshold: any;
        }, userId: any) => {
            autoGroupReflections: {
                error: null;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                meetingId: any;
                reflections: any;
                reflectionGroups: any;
                removedReflectionGroups: Partial<IRetroReflectionGroup>[];
                reflectionGroupIds: any;
                reflectionIds: any;
                removedReflectionGroupIds: any;
                __typename: string;
            };
        };
        UpdateReflectionGroupTitleMutation: ({ reflectionGroupId, title }: {
            reflectionGroupId: any;
            title: any;
        }, userId: any) => {
            updateReflectionGroupTitle: {
                __typename: string;
                error: null;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                meetingId: string;
                reflectionGroupId: any;
                reflectionGroup: Partial<IRetroReflectionGroup>;
            };
        };
        VoteForReflectionGroupMutation: ({ isUnvote, reflectionGroupId }: {
            isUnvote: any;
            reflectionGroupId: any;
        }, userId: any) => {
            error: {
                message: string;
            };
            voteForReflectionGroup?: undefined;
        } | {
            voteForReflectionGroup: {
                __typename: string;
                error: null;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                meetingId: string;
                meetingMember: {
                    __typename: string;
                    id: any;
                    isCheckedIn: boolean;
                    meetingId: string;
                    meetingType: any;
                    teamId: string;
                    tasks: import("../../types/graphql").ITask[];
                    user: any;
                    userId: any;
                    votesRemaining: number;
                    myVotesRemaining: number;
                };
                userId: any;
                reflectionGroupId: string | undefined;
                reflectionGroup: Partial<IRetroReflectionGroup>;
                unlockedStageIds: any;
                unlockedStages: any;
            };
            error?: undefined;
        };
        CreateTaskMutation: ({ newTask }: {
            newTask: any;
        }, userId: any) => {
            createTask: {
                __typename: string;
                error: null;
                task: {
                    __typename: string;
                    id: any;
                    taskId: any;
                    agendaId: null;
                    content: any;
                    createdAt: string;
                    createdBy: any;
                    dueDate: null;
                    editors: never[];
                    integration: null;
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
                        meetingSettings: Partial<import("../../types/graphql").IRetrospectiveMeetingSettings>;
                        teamMembers: any;
                        newMeeting: any;
                    };
                    isSoftTask: boolean;
                    meetingId: string;
                    reflectionGroupId: any;
                    sortOrder: any;
                    status: any;
                    taskStatus: any;
                    tags: any;
                    teamId: string;
                    assigneeId: any;
                    assignee: {
                        meetingMember: {
                            __typename: string;
                            id: any;
                            isCheckedIn: boolean;
                            meetingId: string;
                            meetingType: any;
                            teamId: string;
                            tasks: import("../../types/graphql").ITask[];
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
                                items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                            };
                            allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
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
                    } | undefined;
                    updatedAt: string;
                    userId: any;
                };
                involvementNotification: null;
            };
        };
        EditTaskMutation: ({ taskId, isEditing }: {
            taskId: any;
            isEditing: any;
        }, userId: any) => {
            editTask: {
                __typename: string;
                error: null;
                task: Partial<import("../../types/graphql").ITask>;
                editor: {
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
                        items: (import("../../types/graphql").ISuggestedIntegrationJira | import("../../types/graphql").ISuggestedIntegrationGitHub)[];
                    };
                    allAvailableIntegrations: import("../../types/graphql").ISuggestedIntegrationJira[];
                    tms: string[];
                } | undefined;
                isEditing: any;
            };
        };
        UpdateTaskMutation: ({ updatedTask }: {
            updatedTask: any;
        }, userId: any) => {
            updateTask: {
                __typename: string;
                error: null;
                task: Partial<import("../../types/graphql").ITask>;
                privatizedTaskId: null;
                addedNotification: null;
                removedNotification: null;
            };
        } | null;
        DeleteTaskMutation: ({ taskId }: {
            taskId: any;
        }, userId: any) => {
            deleteTask: {
                error: null;
                task: Partial<import("../../types/graphql").ITask>;
                involvementNotification: null;
            };
        };
        UpdateTaskDueDateMutation: ({ taskId, dueDate }: {
            taskId: any;
            dueDate: any;
        }, userId: any) => {
            updateTaskDueDate: {
                __typename: string;
                error: null;
                task: Partial<import("../../types/graphql").ITask>;
            };
        };
        DragDiscussionTopicMutation: ({ stageId, sortOrder }: {
            stageId: any;
            sortOrder: any;
        }, userId: any) => {
            dragDiscussionTopic: {
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                error: null;
                stage: import("../../types/graphql").IRetroDiscussStage;
            };
        };
        EndNewMeetingMutation: ({ meetingId }: {
            meetingId: any;
        }, userId: any) => {
            endNewMeeting: {
                error: null;
                meeting: Partial<import("../../types/graphql").IRetrospectiveMeeting>;
                meetingId: any;
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
                    meetingSettings: Partial<import("../../types/graphql").IRetrospectiveMeetingSettings>;
                    teamMembers: any;
                    newMeeting: any;
                };
                teamId: string;
                isKill: boolean;
                __typename: string;
            };
        };
        InviteToTeamMutation: ({ invitees }: {
            invitees: any;
        }) => {
            inviteToTeam: {
                invitees: any;
            };
        };
    };
    fetch: (opName: string, variables: Variables) => Promise<{
        errors: {
            message: string;
        }[];
        data?: undefined;
    } | {
        data: any;
        errors?: undefined;
    }>;
}
export default ClientGraphQLServer;
//# sourceMappingURL=ClientGraphQLServer.d.ts.map