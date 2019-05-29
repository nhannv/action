import { InviteToTeamMutation } from '__generated__/InviteToTeamMutation.graphql';
import { InviteToTeamMutation_notification } from '__generated__/InviteToTeamMutation_notification.graphql';
import { Disposable } from 'relay-runtime';
import { IInviteToTeamOnMutationArguments } from '../types/graphql';
import { LocalHandlers } from '../types/relayMutations';
export declare const inviteToTeamNotificationUpdater: (payload: any, { atmosphere, store }: {
    atmosphere: any;
    store: any;
}) => void;
export declare const inviteToTeamNotificationOnNext: (payload: InviteToTeamMutation_notification, { atmosphere, history }: {
    atmosphere: any;
    history: any;
}) => void;
declare const InviteToTeamMutation: (atmosphere: any, variables: IInviteToTeamOnMutationArguments, { onError, onCompleted }: LocalHandlers) => Disposable;
export default InviteToTeamMutation;
//# sourceMappingURL=InviteToTeamMutation.d.ts.map