import { StartNewMeetingMutation } from '__generated__/StartNewMeetingMutation.graphql';
import Atmosphere from 'universal/Atmosphere';
import { IStartNewMeetingOnMutationArguments } from 'universal/types/graphql';
import { LocalHandlers } from 'universal/types/relayMutations';
export declare const startNewMeetingTeamOnNext: (payload: any, context: any) => void;
declare const StartNewMeetingMutation: (atmosphere: Atmosphere, variables: IStartNewMeetingOnMutationArguments, { history, onError, onCompleted }: LocalHandlers) => import("relay-runtime").Disposable;
export default StartNewMeetingMutation;
//# sourceMappingURL=StartNewMeetingMutation.d.ts.map