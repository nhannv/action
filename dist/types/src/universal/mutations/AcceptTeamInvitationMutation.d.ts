import { AcceptTeamInvitationMutation_team } from '__generated__/AcceptTeamInvitationMutation_team.graphql';
import { Disposable, RecordProxy } from 'relay-runtime';
import { LocalHandlers } from '../types/relayMutations';
import { AcceptTeamInvitationMutation, AcceptTeamInvitationMutationVariables } from '__generated__/AcceptTeamInvitationMutation.graphql';
export declare const acceptTeamInvitationNotificationUpdater: (payload: RecordProxy<any>, { atmosphere, store }: {
    atmosphere: any;
    store: any;
}) => void;
export declare const acceptTeamInvitationTeamUpdater: (payload: RecordProxy<{
    [key: string]: any;
}>, { store }: {
    store: any;
}) => void;
export declare const acceptTeamInvitationTeamOnNext: (payload: AcceptTeamInvitationMutation_team, { atmosphere }: {
    atmosphere: any;
}) => void;
declare const AcceptTeamInvitationMutation: (atmosphere: any, variables: AcceptTeamInvitationMutationVariables, { history, onCompleted, onError }: LocalHandlers) => Disposable;
export default AcceptTeamInvitationMutation;
//# sourceMappingURL=AcceptTeamInvitationMutation.d.ts.map