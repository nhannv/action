export interface JiraUser {
    self: string;
    key: string;
    accountId: string;
    name: string;
    emailAddress: string;
    avatarUrls: {
        [key: string]: string;
    };
    displayName: string;
    active: boolean;
    timeZone: string;
}
export interface AccessibleResource {
    id: string;
    name: string;
    scopes: string[];
    avatarUrl: string;
}
export interface JiraProject {
    self: string;
    id: string;
    key: string;
    name: string;
    avatarUrls: {
        '48x48': string;
        '24x24': string;
        '16x16': string;
        '32x32': string;
    };
    projectCategory: {
        self: string;
        id: string;
        name: string;
        description: string;
    };
    simplified: boolean;
    style: string;
}
export interface JiraProjectResponse {
    self: string;
    nextPage: string;
    maxResults: number;
    startAt: number;
    total: number;
    isLast: boolean;
    values: JiraProject[];
}
export interface JiraIssueType {
    self: string;
    id: string;
    description: string;
    iconUrl: string;
    name: string;
    subtask: boolean;
    fields?: {
        issuetype: {
            required: boolean;
            name: string;
            key: string;
            hasDefaultValue: false;
            operations: string[];
        };
    };
}
export interface AtlassianError {
    code: number;
    message: string;
}
interface AtlassianClientManagerOptions {
    fetch?: Window['fetch'];
    refreshToken?: string;
}
interface GetProjectsResult {
    cloudId: string;
    newProjects: JiraProject[];
}
interface Reporter {
    id: string;
}
interface Assignee {
    id: string;
}
interface CreateIssueFields {
    assignee: Assignee;
    summary: string;
    description?: object;
    reporter?: Reporter;
    project?: Partial<JiraProject>;
    issuetype?: Partial<JiraIssueType>;
}
interface IssueCreateMetadata {
    projects: Array<Pick<JiraProject, 'self' | 'id' | 'key' | 'name' | 'avatarUrls'> & {
        issuetypes: JiraIssueType[];
    }>;
}
interface JiraCreateIssueResponse {
    id: string;
    key: string;
    self: string;
}
declare type GetProjectsCallback = (error: AtlassianError | null, result: GetProjectsResult | null) => void;
interface JiraError {
    errorMessages: any[];
    errors: {
        [fieldName: string]: string;
    };
}
declare class AtlassianClientManager {
    accessToken: string;
    refreshToken?: string;
    private readonly get;
    private readonly post;
    cache: {
        [key: string]: {
            result: any;
            expiration: number | any;
        };
    };
    timeout: number;
    constructor(accessToken: string, options?: AtlassianClientManagerOptions);
    getAccessibleResources(): Promise<AccessibleResource[] | AtlassianError>;
    getMyself(cloudId: string): Promise<AtlassianError | JiraUser>;
    getPaginatedProjects(cloudId: string, url: string, callback: GetProjectsCallback): Promise<void>;
    getProjects(cloudIds: string[], callback: GetProjectsCallback): Promise<void[]>;
    getProject(cloudId: string, projectId: string): Promise<AtlassianError | JiraProject>;
    convertMarkdownToADF(markdown: string): Promise<object>;
    getCreateMeta(cloudId: string, projectKeys?: string[]): Promise<AtlassianError | IssueCreateMetadata | JiraError>;
    createIssue(cloudId: string, projectKey: string, issueFields: CreateIssueFields): Promise<AtlassianError | JiraCreateIssueResponse | JiraError>;
}
export default AtlassianClientManager;
//# sourceMappingURL=AtlassianClientManager.d.ts.map