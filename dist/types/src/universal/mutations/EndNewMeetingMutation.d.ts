import Atmosphere from 'universal/Atmosphere';
import { IEndNewMeetingOnMutationArguments } from 'universal/types/graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
import { EndNewMeetingMutation } from '__generated__/EndNewMeetingMutation.graphql';
export declare const popEndNewMeetingToast: (atmosphere: any) => void;
export declare const endNewMeetingTeamOnNext: (payload: any, context: any) => void;
export declare const endNewMeetingNotificationUpdater: (payload: any, { store }: {
    store: any;
}) => void;
export declare const endNewMeetingTeamUpdater: (payload: any, { store }: {
    store: any;
}) => void;
declare const EndNewMeetingMutation: (atmosphere: Atmosphere, variables: IEndNewMeetingOnMutationArguments, { onError, onCompleted, history }: LocalHandlers) => import("relay-runtime").Disposable;
export default EndNewMeetingMutation;
//# sourceMappingURL=EndNewMeetingMutation.d.ts.map