import { Disposable } from 'relay-runtime';
export declare const removeProvider: (viewer: any, teamId: any, service: any, mutatorUserId: any) => void;
export declare const updateProviderMap: (viewer: any, teamId: any, service: any, payload: any) => void;
export declare const removeIntegrations: (viewer: any, teamId: any, service: any, deletedIntegrationIds: any) => void;
export declare const removeUserFromIntegrations: (viewer: any, teamId: any, service: any, userId: any) => void;
export declare const removeProviderIntegrationUpdater: (payload: any, store: any, { atmosphere, teamId }: {
    atmosphere: any;
    teamId: any;
}) => void;
declare const RemoveProviderMutation: (atmosphere: any, { providerId, teamId }: {
    providerId: any;
    teamId: any;
}, { service, onError, onCompleted }: {
    service: any;
    onError: any;
    onCompleted: any;
}) => Disposable;
export default RemoveProviderMutation;
//# sourceMappingURL=RemoveProviderMutation.d.ts.map