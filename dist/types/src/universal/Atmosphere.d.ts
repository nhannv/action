import GQLTrebuchetClient, { GQLHTTPClient } from '@mattkrick/graphql-trebuchet-client';
import { SocketTrebuchet, SSETrebuchet } from '@mattkrick/trebuchet-client';
import { InviteToTeamMutation_notification } from '__generated__/InviteToTeamMutation_notification.graphql';
import EventEmitter from 'eventemitter3';
import { CacheConfig, Environment, GraphQLResponse, GraphQLSubscriptionConfig, Network, ObservableFromValue, RequestParameters, Variables } from 'relay-runtime';
import StrictEventEmitter from 'strict-event-emitter-types';
import { MasonryDragEndPayload } from './components/PhaseItemMasonry';
import { IAuthToken } from './types/graphql';
interface QuerySubscription {
    subKey?: string;
    queryKey: string;
    queryFetcher: QueryFetcher;
}
interface Subscriptions {
    [subKey: string]: ReturnType<GQLTrebuchetClient['subscribe']>;
}
interface Operation {
    id?: string;
    name: string;
    text?: string;
}
interface QueryFetcher {
    dispose: () => void;
}
declare type SubCreator = (atmosphere: Atmosphere, queryVariables: Variables | undefined, subParams: any) => GraphQLSubscriptionConfig<unknown>;
interface Toast {
    level: 'info' | 'warning' | 'error' | 'success';
    autoDismiss?: number;
    title: string;
    message: string;
}
export interface AtmosphereEvents {
    addToast: Toast;
    removeToast: (toast: string | any) => void;
    endDraggingReflection: MasonryDragEndPayload;
    focusAgendaInput: void;
    inviteToTeam: NonNullable<InviteToTeamMutation_notification['teamInvitationNotification']>;
    meetingSidebarCollapsed: boolean;
    newSubscriptionClient: void;
    removeGitHubRepo: void;
}
export default class Atmosphere extends Environment {
    static getKey: (name: string, variables: Variables | undefined) => string;
    _network: Network;
    transport: GQLHTTPClient | GQLTrebuchetClient;
    authToken: string | null;
    authObj: IAuthToken | null;
    querySubscriptions: Array<QuerySubscription>;
    queryTimeouts: {
        [queryKey: string]: number;
    };
    subscriptions: Subscriptions;
    eventEmitter: StrictEventEmitter<EventEmitter, AtmosphereEvents>;
    upgradeTransportPromise: Promise<void> | null;
    viewerId: string;
    userId: string | null;
    constructor();
    fetchPing: (connectionId?: string | undefined) => Promise<Response>;
    fetchHTTP: (body: string, connectionId?: string | undefined) => Promise<any>;
    registerQuery: (queryKey: string, queryFetcher: QueryFetcher, options?: {
        subscriptions?: SubCreator[] | undefined;
        subParams?: any;
        queryVariables?: Variables | undefined;
    }) => Promise<void>;
    handleSubscribe: (operation: Operation, variables: {
        [key: string]: any;
    } | undefined, _cacheConfig: CacheConfig, observer: any) => Promise<{
        dispose: () => void;
    }>;
    trySockets: () => SocketTrebuchet;
    trySSE: () => SSETrebuchet;
    promiseToUpgrade(): Promise<void>;
    upgradeTransport(): Promise<void>;
    addAuthTokenSubscriber(): void;
    handleFetch: (request: RequestParameters, variables: Variables, _cacheConfig?: CacheConfig | undefined) => Promise<ObservableFromValue<GraphQLResponse>>;
    getAuthToken: (global: Window) => void;
    setAuthToken: (authToken: string | null) => void;
    makeDisposable: (subKeyToRemove: string) => {
        dispose: () => void;
    };
    unregisterQuery(maybeQueryKeys: string | Array<string>, delay?: number): void;
    close(): void;
}
export {};
//# sourceMappingURL=Atmosphere.d.ts.map